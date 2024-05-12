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
        },
        removeAllBookmarksToStore: (state, action) => {
            state.value = []
        }
    },
});
export const { addBookmarkToStore, removeBookmarkToStore, removeAllBookmarksToStore } = bookmarksSlice.actions;
export default bookmarksSlice.reducer;




