import logo from './logo.svg';
import './App.css';

import UserHooksSample from './UserHooksSample';
import HooksSample from './HooksSample';
function App() {
  
  return (
    <div className="container text-centre">
      {/* <h1>Sample App Using Hooks</h1>
       */}
      {/* <RefParent/> */}
      I am inside App Component
      {/* <PortalDemo/> */}
      {/* <ProfilerDemo/> */}
      <HooksSample/> 
      <UserHooksSample/>
    </div>
  );
}

export default App;
