import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import NewCounter from './NewCounter';

function App() {
  return (
   <>
   <div className={App}><Counter/></div>
   <NewCounter />
   </>
  );
}

export default App;
