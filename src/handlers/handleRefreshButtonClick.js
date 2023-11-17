import {unsetIsSettingStart} from "../store/slices/isSettingStartSlice";
import {unsetIsSettingEnd} from "../store/slices/isSettingEndSlice";
import {unsetIsSettingBoundaries} from "../store/slices/isSettingBoundariesSlice";
import {unsetStartPoint} from "../store/slices/startPointSlice";
import {unsetEndPoint} from "../store/slices/endPointSlice";
import {setIsClean} from "../store/slices/isCleanSlice";
import {setDefaultMatrix} from "../store/slices/matrixSlice";
import {unsetRoute} from "../store/slices/routeSlice";
import {unsetResultText} from "../store/slices/resultTextSlice";

export default function handleRefreshButtonClick(dispatch){
    dispatch(unsetIsSettingStart())
    dispatch(unsetIsSettingEnd())
    dispatch(unsetIsSettingBoundaries())
    dispatch(unsetStartPoint())
    dispatch(unsetEndPoint())

    dispatch(setDefaultMatrix())
    dispatch(unsetRoute())
    dispatch(setIsClean())
    dispatch(unsetResultText())
}