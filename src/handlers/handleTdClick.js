import {setStartPoint} from "../store/slices/startPointSlice";
import {unsetIsSettingStart} from "../store/slices/isSettingStartSlice";
import {setEndPoint} from "../store/slices/endPointSlice";
import {unsetIsSettingEnd} from "../store/slices/isSettingEndSlice";
import tdStyle from '../components/Td/Td.module.css'
import {addBoundary} from "../store/slices/matrixSlice";

export default function handleTdClick( i, j, dispatch, isSettingStart, isSettingEnd, isSettingBoundaries,startPoint, endPoint) {

    if (i === startPoint.x && j === startPoint.y)
        return tdStyle.start
    if (i === endPoint.x && j === endPoint.y)
        return tdStyle.end


    if (isSettingStart) {
        dispatch(setStartPoint({x: i, y: j}))
        dispatch(unsetIsSettingStart())
        return tdStyle.start
    }
    if (isSettingEnd) {
        dispatch(setEndPoint({x: i, y: j}))
        dispatch(unsetIsSettingEnd())
        return tdStyle.end
    }
    if (isSettingBoundaries) {
        dispatch(addBoundary({i, j}))
        return tdStyle.boundary
    }

    return tdStyle.td
}