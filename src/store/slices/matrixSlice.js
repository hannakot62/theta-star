import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    matrix: Array.from({length:100},()=>Array(100).fill(1))
}
const matrixSlice = createSlice({
    name: 'matrix',
    initialState,
    reducers: {
        addBoundary(state, action) {
            state.matrix[action.payload.i][action.payload.j] = 0
        },
        setDefaultMatrix(state) {
            state.matrix = Array.from({length:100},()=>Array(100).fill(1))
        },
    }
})

export const { addBoundary, setDefaultMatrix } = matrixSlice.actions
export default matrixSlice.reducer

