export default (props) => {
    return (
        <>
        <h1>In NewDecrement</h1>
        NewValue: {props.value}
        <button onClick={props.onClickHandler}>NewDecrement</button>
        </>
    )
}