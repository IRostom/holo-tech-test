import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Repositories } from '../interfaces/repositories.interface';
import { Users } from '../interfaces/user.interface';

interface UserState {
  searchQuery: string;
  filterOption: string;
  data: Array<Users | Repositories>;
}

const initialState: UserState = {
  searchQuery: '',
  filterOption: '',
  data: [],
};

export const querySlice = createSlice({
  name: 'query',
  initialState,
  reducers: {
    getStoreData: (state: any) => state,
    updateStoreData: (state: any, action: PayloadAction<UserState>) => {
      return {
        ...state,
        searchQuery: action.payload.searchQuery,
        filterOption: action.payload.filterOption,
        data: action.payload.data,
      };
    },
  },
});

export const { updateStoreData, getStoreData } = querySlice.actions;

export default querySlice.reducer;
