import logo from "./logo.svg";
import "./App.css";
import NormalProps from "./NormalProps";
import Incrementer from "./Incrementer";
import Increment from "./Increment";
import NewIncrement from "./NewIncrement";
import Decrementer from "./Decrementer";
import Decrement from "./Decrement";
import NewDecrement from "./NewDecrement";
import DemoComponent from "./DemoComponent";
import Reconciliation from "./Reconciliation";
import Reconciliation1 from "./Reconciliation1";
function App() {
  return (
    <div className="App">
      {/* <NormalProps render={(someValue) => {
        return "Old Name " + someValue; 
      }}/>

      <Incrementer 
      render={(value, onClickHandler) => {
        return(
        <>
        <Increment value={value} onClickHandler={onClickHandler} />
       
        </>
        )
      }}
      />
      
      <Incrementer 
      render={(value, onClickHandler) => {
        return (
        <>
          <NewIncrement value={value} onClickHandler={onClickHandler} />
        </>
        )
      }}
      />

      <Decrementer 
      render={(value, onClickHandler) => {
        return (
          <>
          <Decrement value={value} onClickHandler={onClickHandler}/>
          </>
        )
      }}
      />

      <Decrementer 
      render={(value, onClickHandler) => {
        return (
          <>
          <NewDecrement value={value} onClickHandler={onClickHandler} />
          </>
        )
      }}
      /> */}

      {/* <DemoComponent /> */}

      {/* //--------------------------------------------// */}

      {/* <Reconciliation /> */}

      <Reconciliation1 />
    </div>
  );
}

export default App;
