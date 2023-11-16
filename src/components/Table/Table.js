import React from "react";
import style from './Table.module.css'


export default function Table() {
    const rows = 100;
    const cols = 100;

    const table = Array.from({length: rows}, () => <tr>{Array.from({length: cols}, () => <td></td>)}</tr>)
    return (
        <table className={style.table}>{table}</table>
    )
}