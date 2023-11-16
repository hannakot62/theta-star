import {unsetIsSettingStart} from "../store/slices/isSettingStartSlice";
import {unsetIsSettingEnd} from "../store/slices/isSettingEndSlice";
import {unsetIsSettingBoundaries} from "../store/slices/isSettingBoundariesSlice";
import {unsetStartPoint} from "../store/slices/startPointSlice";
import {unsetEndPoint} from "../store/slices/endPointSlice";
import {setIsClean} from "../store/slices/isCleanSlice";

export default function handleRefreshButtonClick(dispatch){
    dispatch(unsetIsSettingStart())
    dispatch(unsetIsSettingEnd())
    dispatch(unsetIsSettingBoundaries())
    dispatch(unsetStartPoint())
    dispatch(unsetEndPoint())

    dispatch(setIsClean())

    //todo: очитска поля
}