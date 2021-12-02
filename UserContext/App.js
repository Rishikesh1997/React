import { Routes, Route } from 'react-router-dom';
import './App.css';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import Navbar from './Navbar';
import Posts from './Posts';
import ToDos from './ToDos';
import Users from './Users';
import Accessibility from './Accessibility';
import { PersonProvider } from './PersonContext';
import ContextConsumer from './ContextConsumer';
import { UserProvider } from './UserContext';
import UserContextConsumer from './UserContextConsumer';
import UserContextConsumerChild from './UserContextConsumerChild';


function App() {
  return (
    <>
    
    <HeaderComponent/>
    <Navbar/>
    <UserProvider value = {{name: "Rahul", age: 25}}>
      <UserContextConsumerChild/>
    </UserProvider>

    {/* <PersonProvider value = {{name : "Rahul", age: 25}}>
      <ContextConsumer/>
    </PersonProvider> */}
    {/* <Accessibility/> */}
    
    {/* <Routes>
      <Route path={'/todos'} element={<ToDos />} />
      <Route path={'/posts'} element={<Posts />} />
      <Route path={'/users'} element={<Users />} />
    </Routes> */}
    {/* <FooterComponent/> */}
  
    </>
  );
}

export default App;
