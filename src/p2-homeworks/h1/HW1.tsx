import React from 'react'
import Message from "./Message";
import AlternativeMessage from "./AlternativeMessage";

const messageData = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Some Name',
    message: 'some text',
    time: '22:00',
}
const messageArchi = {
    avatar: 'https://www.purina.ru/sites/default/files/2020-09/prichini.jpg',
    name: 'Archi',
    message: 'Hello',
    time: '14:31',
}

function HW1() {
    return (
        <div>
            <hr/>
            homeworks 1

            {/*should work (должно работать)*/}

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />
            <Message
                avatar={messageArchi.avatar}
                name={messageArchi.name}
                message={messageArchi.message}
                time={messageArchi.time}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            <AlternativeMessage/>
            <hr/>
        </div>
    )
}

export default HW1
