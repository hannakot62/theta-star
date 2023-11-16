import {unsetIsSettingEnd} from "../store/slices/isSettingEndSlice";
import {unsetIsSettingStart} from "../store/slices/isSettingStartSlice";
import {unsetIsSettingBoundaries} from "../store/slices/isSettingBoundariesSlice";
import ThetaStar from "../theta-star/ThetaStar";
import {setRoute} from "../store/slices/routeSlice";
import {setIsLoading, unsetIsLoading} from "../store/slices/isLoadingSlice";
import {setResultText} from "../store/slices/resultTextSlice";

export default function handleGetTheRouteButtonClick(dispatch, matrix, startPoint, endPoint) {
    dispatch(unsetIsSettingEnd())
    dispatch(unsetIsSettingStart())
    dispatch(unsetIsSettingBoundaries())

    const thetaStar = new ThetaStar(matrix);
    //todo: time -> modal
    dispatch(setIsLoading())
    const startTime = Date.now()
    const route = thetaStar.findPath(startPoint.x, startPoint.y, endPoint.x, endPoint.y)
    const endTime = Date.now()
    const timeRequired = endTime-startTime
    dispatch(unsetIsLoading())
    if(!route.length){
        dispatch(setResultText(`No path was found 😥
        Time required: ${timeRequired}ms`))
    }
    else{
        route.pop()
        route.shift()
        dispatch(setRoute(route))
        dispatch(setResultText(`Just found the path! 🎉🎉🎉
        Needed ${timeRequired}ms to solve it!`))
    }
}