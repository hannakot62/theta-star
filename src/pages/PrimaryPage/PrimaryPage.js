import React from "react"
import style from './PrimaryPage.module.css'
import Table from "../../components/Table/Table";
import ButtonsContainer from "../../components/ButtonsContainer/ButtonsContainer";
import {useSelector} from "react-redux";
import Loader from "../../components/Loader/Loader";


export default function PrimaryPage() {
    const isLoading = useSelector(state=>state.isLoading.isLoading)
    if(isLoading) return (<Loader/>)
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