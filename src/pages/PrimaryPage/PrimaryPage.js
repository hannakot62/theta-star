import React from "react"
import style from './PrimaryPage.module.css'
import Table from "../../components/Table/Table";
import ButtonsContainer from "../../components/ButtonsContainer/ButtonsContainer";


export default function PrimaryPage() {
    return (
        <div className={style.container}>
            <h1>Find the shortest way!!!</h1>
            <div className={style.subcontainer}>
                <Table/>
                <ButtonsContainer/>
            </div>
        </div>
    )
}