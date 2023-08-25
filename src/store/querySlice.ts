import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Repositories } from '../interfaces/repositories.interface';
import { Users } from '../interfaces/user.interface';

interface UserState {
  searchQuery: string;
  filterOption: string;
  data: Users | Repositories;
}

const initialState: UserState = {
  searchQuery: '',
  filterOption: '',
  data: {
    incomplete_results: false,
    total_count: 0,
    items: [],
  },
};

export const querySlice = createSlice({
  name: 'query',
  initialState,
  reducers: {
    setQuery: (state: any, action: PayloadAction<UserState>) => {
      return {
        ...state,
        searchQuery: action.payload.searchQuery,
        filterOption: action.payload.filterOption,
        data: action.payload.data,
      };
    },
    updateQueryList: (state: any, action: PayloadAction<UserState>) => {
      state.data.items.push(...action?.payload?.data?.items);
    },
  },
});

export const { setQuery, updateQueryList } = querySlice.actions;

export default querySlice.reducer;
