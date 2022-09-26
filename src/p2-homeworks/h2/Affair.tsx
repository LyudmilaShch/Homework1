import React from 'react'
import {AffairType} from "./HW2";
import s from './Affairs.module.css'

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number) => void// need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)

    }// need to fix
    let color;
    if (props.affair.priority === 'low') {
        color = s.green;
    }
    if (props.affair.priority === 'middle') {
        color = s.yellow;
    }
    if (props.affair.priority === 'high') {
        color = s.red
    }
    return (
        <div key={props.affair._id}>
            <div className={s.blockAffairs}>
                <div className={s.affairName}>{props.affair.name}</div>
                <div className={`${s.affairPriority} ${color}`}>{props.affair.priority}</div>

            </div>
            <button onClick={deleteCallback}>x</button>

        </div>
    )
}

export default Affair
