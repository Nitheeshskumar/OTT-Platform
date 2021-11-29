import { configureStore } from '@reduxjs/toolkit'
import updateList from './Reducer'

export default configureStore({
  reducer: {
    updateList: updateList,
  },
})