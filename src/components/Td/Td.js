import React, {useState, useEffect} from "react";
import style from './Td.module.css'
import handleTdClick from "../../handlers/handleTdClick";
import {useDispatch, useSelector} from "react-redux";

export default function Td(props) {
    const {i, j} = props
    const dispatch = useDispatch()
    const [className, setClassName] = useState(style.td)

    const isSettingStart = useSelector(state => state.isSettingStart.isSettingStart)
    const isSettingEnd = useSelector(state => state.isSettingEnd.isSettingEnd)
    const isSettingBoundaries = useSelector(state => state.isSettingBoundaries.isSettingBoundaries)
    const startPoint = useSelector(state => state.startPoint)
    const endPoint = useSelector(state => state.endPoint)
    const isClean = useSelector(state => state.isClean.isClean)
    const route = useSelector(state => state.route.route)

    const handleClick = () => {
        setClassName(
            handleTdClick(i, j, dispatch, isSettingStart, isSettingEnd, isSettingBoundaries, startPoint, endPoint))
    }

    useEffect(() => {
        if (isClean) setClassName(style.td)
    }, [isClean])
    useEffect(() => {
        if (!route.length) setClassName(style.td)
        else {
            if (route.some(pair => pair[0] === i && pair[1] === j)) {
                setClassName(style.route)
            }
        }
    }, [route, i, j])

    return (
        <td className={className}
            onClick={() => handleClick()}>
        </td>
    )
}