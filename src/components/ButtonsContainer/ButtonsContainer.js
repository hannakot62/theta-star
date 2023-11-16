import React from "react";
import style from './ButtonsContainer.module.css'
import {useDispatch, useSelector} from "react-redux";
import handleSetStartButtonClick from "../../handlers/handleSetStartButtonClick";
import handleSetEndButtonClick from "../../handlers/handleSetEndButtonClick";
import handleRefreshButtonClick from "../../handlers/handleRefreshButtonClick";
import handleSetBoundariesButtonClick from "../../handlers/handleSetBoundariesButtonClick";
import handleGetTheRouteButtonClick from "../../handlers/handleGetTheRouteButtonClick";

export default function ButtonsContainer() {
    const setStartDisabled = useSelector(state => state.startPoint.x) !== -1
    const setEndDisabled = useSelector(state => state.endPoint.x) !== -1
    const getTheRouteDisabled = !(setStartDisabled && setEndDisabled)
    const dispatch = useDispatch()

    const startPoint = useSelector(state => state.startPoint)
    const endPoint = useSelector(state => state.endPoint)
    const matrix = useSelector(state => state.matrix.matrix)

    return (
        <div className={style.container}>
            <button className={style.start} disabled={setStartDisabled}
                    onClick={() => handleSetStartButtonClick(dispatch)}>set start
            </button>
            <button className={style.end} disabled={setEndDisabled}
                    onClick={() => handleSetEndButtonClick(dispatch)}>set end
            </button>
            <button className={style.boundaries} onClick={() => handleSetBoundariesButtonClick(dispatch)}>set
                boundaries
            </button>


            <div className={style.bottomBtns}>
                <button className={style.route} disabled={getTheRouteDisabled}
                        onClick={() => handleGetTheRouteButtonClick(dispatch, matrix, startPoint, endPoint)}>get the route
                </button>
                <button className={style.refresh} onClick={() => handleRefreshButtonClick(dispatch)}>refresh</button>
            </div>

        </div>
    )
}