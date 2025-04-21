import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  Loading: [
    {
        "id": 0,
        "name": "",
        "img": "",
        "audio": "",
        "auth": ""
    }
  ],
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    EDIT_LOADING: (state, action) => {
      let Loading = state.Loading;
      Loading = Loading !== action.payload ? Loading = action.payload : Loading
      state.Loading = Loading
    }
  },
})

// Action creators are generated for each case reducer function
export const { EDIT_LOADING } = counterSlice.actions

export default counterSlice.reducer