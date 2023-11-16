import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    x: -1,
    y: -1
}
const startPointSlice = createSlice({
    name: 'startPoint',
    initialState,
    reducers: {
        setStartPoint(state, action) {
            state.x = action.payload.x
            state.y = action.payload.y
        },
        unsetStartPoint(state) {
            state.x = -1
            state.y = -1
        },
    }
})

export const { setStartPoint, unsetStartPoint } = startPointSlice.actions
export default startPointSlice.reducer

