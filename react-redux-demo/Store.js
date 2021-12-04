import { createStore } from "redux"

const initialState = {
    counter : 0,
    newCounter: 0,
};

const reducer=( state=initialState, action) => {
    
    const { type } = action;
    
    
    switch (type) {
        case "increment":
         return {
            counter: state.counter + 1,
         } ; 
         
         case "decrement":
         return {
            counter: state.counter - 1,
         } ; 
    
         case "multiply":
         return {
            counter: state.counter * 1,
         } ; 
         
         case "divide":
         return {
            counter: state.counter / 1,
         } ; 

         case "newIncrement":
         return {
            counter: state.newCounter + 1,
         } ; 
         
         case "newDecrement":
         return {
            counter: state.newCounter - 1,
         } ;
         
        default:
            return state;

            

    }

};

const store = createStore(reducer); 

    
export default store;