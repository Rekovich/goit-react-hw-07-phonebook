import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
  },
  reducers: {
    addContactAction(state, { payload }) {
      state.items = [...state.items, payload];
    },
    deleteContactAction(state, { payload }) {
      state.items = state.items.filter(item => item.id !== payload);
    },
  },
});

export const { addContactAction, deleteContactAction } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
