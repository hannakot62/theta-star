import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isClean: true
}
const isCleanSlice = createSlice({
    name: 'isClean',
    initialState,
    reducers: {
        setIsClean(state) {
            state.isClean = true
        },
        unsetIsClean(state) {
            state.isClean = false
        },
    }
})

export const { setIsClean, unsetIsClean } = isCleanSlice.actions
export default isCleanSlice.reducer

