import React, {useState, useEffect} from "react";
import style from './Td.module.css'
import handleTdClick from "../../handlers/handleTdClick";
import {useDispatch, useSelector} from "react-redux";

export default function Td(props) {
    const {i, j} = props
    const dispatch = useDispatch()
    const isSettingStart = useSelector(state => state.isSettingStart.isSettingStart)
    const isSettingEnd = useSelector(state => state.isSettingEnd.isSettingEnd)
    const isSettingBoundaries = useSelector(state => state.isSettingBoundaries.isSettingBoundaries)
    const startPoint = useSelector(state => state.startPoint)
    const endPoint = useSelector(state => state.endPoint)
    const isClean = useSelector(state => state.isClean.isClean)
    const [className, setClassName] = useState(style.td)

    const handleClick = (event) => {
        setClassName(
            handleTdClick(event, i, j, dispatch, isSettingStart, isSettingEnd, isSettingBoundaries, startPoint, endPoint))
    }

    useEffect(() => {
        if (isClean) setClassName(style.td)
    }, [isClean])


    return (
        <td className={className}
            onClick={(event) => handleClick(event)}>

        </td>
    )
}