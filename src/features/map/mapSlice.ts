import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Book } from '../../types/Book';

interface MapState {
  initiated: boolean;
  books: Book[];
  countrySelection: string | null;
}

const initialState: MapState = {
  initiated: false,
  books: [],
  countrySelection: null,
};

export const mapSlice = createSlice({
  name: 'map',
  initialState,
  reducers: {
    setInitiated: (state) => {
      state.initiated = true;
    },
    setBooks: (state, action: PayloadAction<Book[]>) => {
      state.books = action.payload;
    },
    selectCountry: (state, action: PayloadAction<string>) => {
      state.countrySelection = action.payload;
    },
    clearCountrySelection: (state) => {
      state.countrySelection = null;
    }
  },
});

export const { setInitiated, setBooks, selectCountry, clearCountrySelection } = mapSlice.actions;

export default mapSlice.reducer;
