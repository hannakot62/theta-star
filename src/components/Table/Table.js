import React from "react";
import style from './Table.module.css'
import Td from "../Td/Td";


export default function Table() {
    const rows = 100;
    const cols = 100;

    const table = Array.from({length: rows},
        (tr, i) => <tr key={i}>{Array.from({length: cols},
            (td, j) =>
                <Td key={i.toString() + j.toString()} i={i} j={j}></Td>
        )}</tr>)

    return (
        <table className={style.table}>
            <tbody>{table}</tbody>
        </table>
    )
}