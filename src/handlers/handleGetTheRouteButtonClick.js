import {unsetIsSettingEnd} from "../store/slices/isSettingEndSlice";
import {unsetIsSettingStart} from "../store/slices/isSettingStartSlice";
import {unsetIsSettingBoundaries} from "../store/slices/isSettingBoundariesSlice";
import ThetaStar from "../theta-star/ThetaStar";

export default function handleGetTheRouteButtonClick(dispatch, matrix, startPoint, endPoint) {
    dispatch(unsetIsSettingEnd())
    dispatch(unsetIsSettingStart())
    dispatch(unsetIsSettingBoundaries())

    const thetaStar = new ThetaStar(matrix);
    const route = thetaStar.findPath(startPoint.x, startPoint.y, endPoint.x, endPoint.y)
    console.log(route)

    //todo: сам путь + загрузка
}