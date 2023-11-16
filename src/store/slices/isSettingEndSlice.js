import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isSettingEnd: false
}
const isSettingEndSlice = createSlice({
    name: 'isSettingEnd',
    initialState,
    reducers: {
        setIsSettingEnd(state) {
            state.isSettingEnd = true
        },
        unsetIsSettingEnd(state) {
            state.isSettingEnd = false
        },
    }
})

export const { setIsSettingEnd, unsetIsSettingEnd } = isSettingEndSlice.actions
export default isSettingEndSlice.reducer

