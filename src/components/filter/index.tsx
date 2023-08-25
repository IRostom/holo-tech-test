import { DebouncedFunc } from 'lodash';
import { FilterOption } from '../../interfaces';
import './filter.scss';
import logo from './github-mark.svg';

export const Filter = ({
  handleSearch,
  handleFilterChange,
  filterOptions,
}: {
  handleSearch: DebouncedFunc<(query: string) => void>;
  handleFilterChange: (filterValue: string) => void;
  filterOptions: Array<FilterOption>;
}) => {
  return (
    <div className="filter">
      <div className='filter_input'>
        <label className="filter_label" htmlFor="github-input">
          <img width={48} src={logo} alt="github mark" />
          <div className="filter_label_text">
            <h2>GitHub Searcher</h2>
            <span>Search Users or Repositories below</span>
          </div>
        </label>
        <input
          id="github-input"
          type="text"
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Start Typing to search"
        />
      </div>

      <div className="filter_dropdown">
        <select
          name="filter"
          id="filter"
          onChange={(e) => handleFilterChange(e.target.value)}
        >
          {filterOptions.map((option) => (
            <option key={option?.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
