/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from 'react';
import { debounce } from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import { updateQueryList, setQuery } from '../../store/querySlice';
import { GridResult } from '../../components';
import { Filter } from '../../components/filter';
import { filterOptions } from '../../constants';
import './home.scss';

function Home() {
  const observerTarget = useRef(null);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filterType, setFilterType] = useState<string>('users');
  const [page, setPage] = useState<number>(1);
  const [result, setResult] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const dispatch = useDispatch();
  const cache = useSelector((state: any) => state.query);

  const handleTextChange = debounce((query: string) => {
    if (query.length <= 3) {
      setResult(undefined);
      setPage(1);
      return setSearchTerm('');
    }
    setSearchTerm(query);
    setResult(undefined);
  }, 500);

  const search = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `https://api.github.com/search/${filterType}?q=${searchTerm}&page=${page}`
      );
      const data = await response.json();

      setResult((oldResult: any) => {
        return oldResult
          ? {
              ...oldResult,
              items: [...(oldResult.items ?? []), ...(data?.items ?? [])],
            }
          : data;
      });

      if (page > 1) {
        dispatch(
          updateQueryList({
            searchQuery: searchTerm,
            filterOption: filterType,
            data,
          })
        );
      } else
        dispatch(
          setQuery({
            searchQuery: searchTerm,
            filterOption: filterType,
            data,
          })
        );
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries: any) => {
        if (
          entries[0].isIntersecting &&
          result &&
          result?.items?.length < result.total_count
        ) {
          setPage((p) => {
            return p + 1;
          });
        }
      },
      { threshold: 1 }
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => {
      if (observerTarget.current) {
        observer.unobserve(observerTarget.current);
      }
    };
  }, [observerTarget, result, setPage]);

  useEffect(() => {
    if (
      searchTerm.length >= 3 &&
      (searchTerm !== cache?.searchQuery || filterType !== cache?.filterOption)
    ) {
      search();
    } else if (
      searchTerm.length >= 3 &&
      searchTerm === cache?.searchQuery &&
      filterType === cache?.filterOption
    ) {
      setResult(cache?.data);
    }
  }, [searchTerm, filterType]);

  useEffect(() => {
    if (page > 1) {
      search();
    }
  }, [page]);

  return (
    <div className="app">
      <Filter
        handleSearch={handleTextChange}
        handleFilterChange={(v) => {
          setFilterType(v);
        }}
        filterOptions={filterOptions}
      />
      <GridResult result={result} filterType={filterType} />
      {isLoading && <p>Loading...</p>}
      <div className="scroll-target" ref={observerTarget}></div>
    </div>
  );
}

export default Home;
