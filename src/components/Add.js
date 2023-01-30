import { Fragment, useState } from "react";
function Add (props) {
const [ num1, setNum1 ] = useState(parseInt(props.x));
const [ num2, setNum2 ] = useState(parseInt(props.y));
const [ result, setResult ] = useState(0);
function addFun() {
setResult(num1 + num2);
}
return (<Fragment>
<h1>Addition of two numbers</h1>
<input type="text" onChange={ e => setNum1(parseInt(e.target.value)) }/>
<input type="text" onChange={ e => setNum2(parseInt(e.target.value)) } />
<button onClick={addFun}>Get Addtion</button>
<div>{result}</div>
</Fragment>);
}
export default Add;