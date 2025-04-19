import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: [],
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    ADD__USER: (state, action) => {
        let User = {id: action.payload.id, username: action.payload.username}
        return{
            ...state, user:[...state.user, User]
        }
    },
    DELETE__USER: (state, action) => {
        let user = state.user
        user = user.filter(item => item.id !== action.payload.id)
        return{
            ...state, user
        }
    },
  },
})

// Action creators are generated for each case reducer function
export const { ADD__USER, DELETE__USER } = counterSlice.actions

export default counterSlice.reducer