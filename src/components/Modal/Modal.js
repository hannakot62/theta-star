import React, {useEffect} from "react";
import style from "./Modal.module.css"
import {useSelector} from "react-redux";

export default function Modal(props) {
    const {active, setActive} = props
    const resultText = useSelector(state=>state.resultText.resultText)

    useEffect(() => {
        resultText?setActive(true):setActive(false)
    }, [resultText, setActive]);

    return (
        <div className={active ? style.backgroundActive : style.background} onClick={() => setActive(false)}>
            <div className={active ? style.modalActive : style.modal} onClick={(e) => e.stopPropagation()}>
                {resultText}
                <button className={style.btn} onClick={() => setActive(false)}>Cancel</button>
            </div>
        </div>
    )
}