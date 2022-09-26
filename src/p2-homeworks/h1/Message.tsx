import React from 'react'
import s from './Message.module.css'

type MessageProps = {
    avatar?: string,
    name: string,
    message: string,
    time: string

}

function Message(props: MessageProps) {
    return (
        <div className={s.message}>
            <img src={props.avatar} alt="Avatar"></img>
            <div className={s.angle}/>
            <div className={s.block}>
                <div className={s.name}>{props.name}</div>
                <div className={s.text}>{props.message}</div>
                <div className={s.time}>{props.time}</div>
            </div>
        </div>
    )
}

export default Message
