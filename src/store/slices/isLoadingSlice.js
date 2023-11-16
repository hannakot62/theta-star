import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoading: false
}
const isLoadingSlice = createSlice({
    name: 'isLoading',
    initialState,
    reducers: {
        setIsLoading(state) {
            state.isLoading = true
        },
        unsetIsLoading(state) {
            state.isLoading= false
        },
    }
})

export const { setIsLoading, unsetIsLoading } = isLoadingSlice.actions
export default isLoadingSlice.reducer

