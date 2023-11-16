import {unsetIsSettingEnd} from "../store/slices/isSettingEndSlice";
import {unsetIsSettingStart} from "../store/slices/isSettingStartSlice";
import {setIsSettingBoundaries} from "../store/slices/isSettingBoundariesSlice";
import {unsetIsClean} from "../store/slices/isCleanSlice";

export default function handleSetBoundariesButtonClick(dispatch){
    dispatch(unsetIsSettingEnd())
    dispatch(unsetIsSettingStart())
    dispatch(setIsSettingBoundaries())

    dispatch(unsetIsClean())
}