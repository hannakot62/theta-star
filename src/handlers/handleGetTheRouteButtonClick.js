import {unsetIsSettingEnd} from "../store/slices/isSettingEndSlice";
import {unsetIsSettingStart} from "../store/slices/isSettingStartSlice";
import {unsetIsSettingBoundaries} from "../store/slices/isSettingBoundariesSlice";

export default function handleGetTheRouteButtonClick(dispatch){
    dispatch(unsetIsSettingEnd())
    dispatch(unsetIsSettingStart())
    dispatch(unsetIsSettingBoundaries())

    //todo: сам путь + загрузка
}