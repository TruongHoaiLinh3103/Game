import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  Cordage: 0,
  Body: 0,
  Miu : 0
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    EDIT_CORDAGE: (state, action) => {
      let Cordage = state.Cordage;
      Cordage = Cordage !== action.payload ? Cordage = action.payload : Cordage
      state.Cordage = Cordage
    },
    EDIT_BODY: (state, action) => {
      let Body = state.Body;
      Body = Body !== action.payload ? Body = action.payload : Body
      state.Body = Body
    },
    EDIT_MIU: (state, action) => {
      let Miu = state.Miu;
      Miu = Miu !== action.payload ? Miu = action.payload : Miu
      state.Miu = Miu
    }
  },
})

// Action creators are generated for each case reducer function
export const { EDIT_CORDAGE, EDIT_BODY, EDIT_MIU } = counterSlice.actions

export default counterSlice.reducer