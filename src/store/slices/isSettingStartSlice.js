import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isSettingStart: false
}
const isSettingStartSlice = createSlice({
    name: 'isSettingStart',
    initialState,
    reducers: {
        setIsSettingStart(state) {
            state.isSettingStart = true
        },
        unsetIsSettingStart(state) {
            state.isSettingStart = false
        },
    }
})

export const { setIsSettingStart, unsetIsSettingStart } = isSettingStartSlice.actions
export default isSettingStartSlice.reducer

