import { createSlice } from '@reduxjs/toolkit'

export const RootReducer = createSlice({
  name: 'postList',
  initialState: {
    list: [],
  },
  reducers: {

    updateList: (state, action) => {
      console.log(state, 'dfd', action)
      state.list = [...state.list, ...action.payload]
    },
  },
})

// Action creators are generated for each case reducer function
export const { updateList } = RootReducer.actions

export default RootReducer.reducer