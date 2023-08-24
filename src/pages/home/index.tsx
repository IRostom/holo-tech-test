/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { debounce } from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import { updateStoreData } from '../../store/querySlice';
import { GridResult } from '../../components';
import { Filter } from '../../components/filter';
import { filterOptions } from '../../constants';
import './home.scss';

function Home() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filterType, setFilterType] = useState<string>('users');
  const [result, setResult] = useState<any>(undefined);

  const dispatch = useDispatch();
  const cache = useSelector((state: any) => state.query);

  const handleSearch = debounce((query: string) => {
    if (query.length <= 3) {
      setResult(undefined);
      return setSearchTerm('');
    }

    console.log('====>', query);

    setSearchTerm(query);
  }, 500);

  const handleFilterChange = (v: string) => {
    console.log('filter type changed to: ', v);
    setFilterType(v);
  };

  async function search() {
    const response = await fetch(
      `https://api.github.com/search/${filterType}?q=${searchTerm}`
    );
    const data = await response.json();
    setResult(data);
    dispatch(
      updateStoreData({
        searchQuery: searchTerm,
        filterOption: filterType,
        data,
      })
    );
  }

  useEffect(() => {
    if (
      searchTerm.length > 3 &&
      (searchTerm !== cache?.searchQuery || filterType !== cache?.filterOption)
    ) {
      search();
    } else if (
      searchTerm.length > 3 &&
      searchTerm === cache?.searchQuery &&
      filterType === cache?.filterOption
    ) {
      setResult(cache?.data);
    }
  }, [searchTerm, filterType]);

  return (
    <div className="app">
      <Filter
        handleSearch={handleSearch}
        handleFilterChange={handleFilterChange}
        filterOptions={filterOptions}
      />
      <GridResult result={result} filterType={filterType} />
    </div>
  );
}

export default Home;
