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
            <div className={s.block}>
                <p className={s.name}>{props.name}</p>
                <p className={s.time}>{props.time}</p>
                <p>{props.message}</p>
            </div>
        </div>
    )
}

export default Message
