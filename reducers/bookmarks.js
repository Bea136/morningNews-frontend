import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: [],
};

export const bookmarksSlice = createSlice({
    name: 'bookmarks',
    initialState,
    reducers: {
        addBookmarkToStore: (state, action) => {
            state.value.push(action.payload)
        },
    },
});
export const { addBookmarkToStore } = bookmarksSlice.actions;
export default bookmarksSlice.reducer;




