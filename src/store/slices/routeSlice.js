import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    route: []
}
const routeSlice = createSlice({
    name: 'route',
    initialState,
    reducers: {
        setRoute(state, action) {
            state.route = action.payload
        },
        unsetRoute(state) {
            state.route = []
        },
    }
})

export const { setRoute, unsetRoute } = routeSlice.actions
export default routeSlice.reducer

