import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    x: -1,
    y: -1
}
const endPointSlice = createSlice({
    name: 'endPoint',
    initialState,
    reducers: {
        setEndPoint(state, action) {
            state.x = action.payload.x
            state.y = action.payload.y
        },
        unsetEndPoint(state) {
            state.x = -1
            state.y = -1
        },
    }
})

export const { setEndPoint, unsetEndPoint } = endPointSlice.actions
export default endPointSlice.reducer

