import {setIsSettingEnd} from "../store/slices/isSettingEndSlice";
import {unsetIsSettingStart} from "../store/slices/isSettingStartSlice";
import {unsetIsSettingBoundaries} from "../store/slices/isSettingBoundariesSlice";
import {unsetIsClean} from "../store/slices/isCleanSlice";

export default function handleSetEndButtonClick(dispatch){
    dispatch(unsetIsSettingStart())
    dispatch(unsetIsSettingBoundaries())
    dispatch(setIsSettingEnd())

    dispatch(unsetIsClean())
}