import logo from './logo.svg';
import './App.css';
import ClassComponentConversion from './ClassComponentConversion';
import FunctionalComponent from './FunctionalComponent';
import OnlineOrders from './OnlineOrders';
import OfflineOrders from './OfflineOrders';

function App() {
  return (
    <div className="Container text-centre">
    {/* <ClassComponentConversion />
    <FunctionalComponent />
    //---------------------// */}
    <OnlineOrders />
    <OfflineOrders />
    </div>
  );
}

export default App;
