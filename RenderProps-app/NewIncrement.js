export default (props) => {

   return (
       <>
       <h1>In NewIncrement</h1>
       NewValue: {props.value}
       <button onClick={props.onClickHandler}>NewAdd</button>
       </>
   )
}