import React, { useState } from 'react'
import JsonArray from "./JsonArray"
import Show from './Show'



const Exer2 = () => {
    const [ui, setui] = useState()
    const [stagiaires, setstagiaires] = useState([])
    const funci = (e) => {
        e.preventDefault()
    }

    const handleChange = (text) => {
        setui(text.target.value)
    }

    const arrayfilter = () => {
        console.log(JsonArray.filter((elem) => elem.filiere == ui))
        setstagiaires(JsonArray.filter((elem) => elem.filiere == ui))
    }


    return (
        <>
            <form onSubmit={funci} >
                <input type="text" onChange={handleChange} />
                <button type='submit' onClick={arrayfilter}>Search</button>
            </form>
            <p>{ui}</p>
            <Show students={stagiaires} />
        </>
    )
}

export default Exer2