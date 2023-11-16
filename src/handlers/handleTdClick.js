import {setStartPoint} from "../store/slices/startPointSlice";
import {unsetIsSettingStart} from "../store/slices/isSettingStartSlice";
import {setEndPoint} from "../store/slices/endPointSlice";
import {unsetIsSettingEnd} from "../store/slices/isSettingEndSlice";
import tdStyle from '../components/Td/Td.module.css'
import {unsetIsSettingBoundaries} from "../store/slices/isSettingBoundariesSlice";

export default function handleTdClick(event, i, j, dispatch, isSettingStart, isSettingEnd, isSettingBoundaries, startPoint, endPoint, isClean) {

    if(!event) return tdStyle.td
    if (isSettingStart) {
        dispatch(setStartPoint({x:i,y:j}))
        dispatch(unsetIsSettingStart())
        return tdStyle.start
    }
    if (isSettingEnd) {
        dispatch(setEndPoint({x:i,y:j}))
        dispatch(unsetIsSettingEnd())
        return tdStyle.end
    }
    if (isSettingBoundaries) {
//todo: обновить матрицу


        dispatch(unsetIsSettingBoundaries())
        return tdStyle.boundary
    }

    return tdStyle.td
}