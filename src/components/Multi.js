import React, { Fragment, useState } from 'react'

export default function Multi() {
    const [num1, setNum1] = useState(5);
    const [num2, setNum2] = useState(6);
    const [result, SetResult] = useState(0);

    function addFun(){
        SetResult(num1 * num2)
    }

    return (
    <Fragment>
        <h1>Multiplication</h1>
        <input type="text"  onChange={event => setNum1(event.target.value)} />
        <input type="text"  onChange={event => setNum2(event.target.value)} />
        <button onClick={addFun} >Multiply </button>
        <h3>{result}</h3>
    </Fragment>
  )
}