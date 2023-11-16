import React from "react";
import style from './ButtonsContainer.module.css'

export default function ButtonsContainer() {
    return (
        <div className={style.container}>
            <button className={style.start} disabled={false}>set start</button>
            <button className={style.end} disabled={false}>set end</button>
            <button className={style.boundaries} disabled={false}>set boundaries</button>

            <div className={style.bottomBtns}>
                <button className={style.route} disabled={false}>get the route</button>
                <button className={style.refresh}>refresh</button>
            </div>

        </div>
    )
}