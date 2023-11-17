import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    resultText: ""
}
const resultTextSlice = createSlice({
    name: 'resultText',
    initialState,
    reducers: {
        setResultText(state, action) {
            state.resultText = action.payload
        },
        unsetResultText(state) {
            state.resultText = ""
        },
    }
})

export const { setResultText, unsetResultText } = resultTextSlice.actions
export default resultTextSlice.reducer

