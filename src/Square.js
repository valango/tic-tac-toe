//  src/Square.js

//  Square is a Function Component.
const Square = (props) =>
  <button className="square" onClick={() => props.onClick()}>
    {props.value}
  </button>

export default Square