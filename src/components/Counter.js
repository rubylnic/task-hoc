const Counter = (props) => {
  const { value, decOne, addOne } = props;
  return (
    <div>
      <button onClick={decOne}>-</button>
      <span>{value}</span>
      <button onClick={addOne}>+</button>
    </div>
  );
}



export default Counter;
