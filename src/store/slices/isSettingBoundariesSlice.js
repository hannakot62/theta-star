import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isSettingBoundaries: false
}
const isSettingBoundariesSlice = createSlice({
    name: 'isSettingBoundaries',
    initialState,
    reducers: {
        setIsSettingBoundaries(state) {
            state.isSettingBoundaries = true
        },
        unsetIsSettingBoundaries(state) {
            state.isSettingBoundaries = false
        },
    }
})

export const { setIsSettingBoundaries, unsetIsSettingBoundaries } = isSettingBoundariesSlice.actions
export default isSettingBoundariesSlice.reducer

