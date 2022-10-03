import React, {ChangeEventHandler, MouseEventHandler} from 'react'
import s from './Greeting.module.css'
import {UserType} from "./HW3";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: ChangeEventHandler<HTMLInputElement> // need to fix any
    addUser: MouseEventHandler<HTMLButtonElement>// need to fix any
    error: string | null // need to fix any
    totalUsers: number // need to fix any
    users: Array<UserType>

}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, users} // деструктуризация пропсов
) => {
    const inputClass =
        error ? s.error : s.input // need to fix with (?:)

    return (
        <div className={s.someClass}>
            <div className={s.totalUsers}> Людей добавили <span>{totalUsers}</span></div>
            <input value={name} onChange={setNameCallback} className={inputClass}/>
            <button onClick={addUser} className={s.buttonHW3}>Add</button>
            {error && <div className={s.errorMessage}>{error}</div>}
        </div>
    )
}

export default Greeting
