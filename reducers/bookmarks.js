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
        removeBookmarkToStore: (state, action) => {
            state.value = state.value.filter(bookmark => bookmark.title !== action.payload.title)
        }
    },
});
export const { addBookmarkToStore, removeBookmarkToStore } = bookmarksSlice.actions;
export default bookmarksSlice.reducer;




