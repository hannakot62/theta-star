import {setIsSettingStart} from "../store/slices/isSettingStartSlice";
import {unsetIsSettingEnd} from "../store/slices/isSettingEndSlice";
import {unsetIsSettingBoundaries} from "../store/slices/isSettingBoundariesSlice";
import {unsetIsClean} from "../store/slices/isCleanSlice";

export default function handleSetStartButtonClick(dispatch){
    dispatch(unsetIsSettingEnd())
    dispatch(unsetIsSettingBoundaries())
    dispatch(setIsSettingStart())

    dispatch(unsetIsClean())
}