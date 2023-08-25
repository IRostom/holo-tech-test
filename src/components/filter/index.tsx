import { DebouncedFunc } from 'lodash';
import { FilterOption } from '../../interfaces';
import './filter.scss';

export const Filter = ({
  handleSearch,
  handleFilterChange,
  filterOptions
}: {
  handleSearch: DebouncedFunc<(query: string) => void>;
  handleFilterChange: (filterValue: string) => void;
  filterOptions: Array<FilterOption>;
}) => {
  return (
    <div className="filter">
      <input
        type="text"
        onChange={(e) => handleSearch(e.target.value)}
        placeholder="Start Typing to search"
      />
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
  );
};
