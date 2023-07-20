import {useReducer, useState, useEffect} from 'react'

function Reducer() {

    // const initState = {
    //     count: 0,
    // }
    // const reducer = (state, action) => {
    //     switch(action.type){
    //         case 'up':  return {count : state.count + 1}
    //         case 'down': return {count: state.count - 1}
    //         case 'reset':  return {count: 0}
    //         // eslint-disable-next-line no-unused-expressions
    //         default: state;
    //     }
    // }

    const initState = {
        username: "",
        email: "",
        notes: ""
    }

    const reducer = (state, action) => {
        switch(action.type) {
            case "input":
                return {...state, [action.field]: action.payload};
            case "reset":
                return initState;
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, initState)

    const handleReset = () => {
        dispatch({type: "reset"})
    }

    const handleChange = (e) => {
        dispatch({
            type: "input", 
            field: e.target.name,
            payload: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(state)
        return state
    }

  return (
    <div style={{display:"flex", flexDirection: "column", justifyContent:"center", minHeight: "100vh", alignItems:"center"}}>
        {/* {state.count}
        <button onClick={() => {dispatch({type: 'up'})}}>Up</button>
        <button onClick={() => {dispatch({type: 'down'})}}>Down</button>
        <button onClick={() => {dispatch({type: 'reset'})}}>Reset</button> */}

        <form onSubmit={handleSubmit} style={{display:"flex", flexDirection: "column", gap:10, justifyContent:"space-between", width:"40%", backgroundColor:"gray", borderRadius: 10, padding:10, alignItems:"center"}}>
            <label style={{display:"flex", justifyContent:"space-between", width:"100%"}}>
                Username:
                <input type='text' name='username' value={state.username} onChange={handleChange} />
            </label>

            <label style={{display:"flex", justifyContent:"space-between", width:"100%"}}>
                Email:
                <input type='email' name='email' value={state.email} onChange={handleChange} />
            </label>

            <label style={{display:"flex", justifyContent:"space-between", width:"100%"}}>
                Notes:
                <textarea style={{resize:"none", width:"39.5%"}} name='notes' value={state.notes} onChange={handleChange} ></textarea>
            </label>

            <button type='submit'>Submit</button>
            <button type='button' onClick={handleReset}>Reset</button>
        </form>

    </div>
  )
}

export default Reducer