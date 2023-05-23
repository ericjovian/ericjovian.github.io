import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

// Define a type for the slice state
interface CommonState {
  isLoading: boolean
}

// Define the initial state using that type
const initialState: CommonState = {
  isLoading: false,
}

export const commonSlice = createSlice({
  name: 'common',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    }
  },
})

export const { setIsLoading } = commonSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCommon = (state: RootState) => state.common.isLoading

export default commonSlice.reducer