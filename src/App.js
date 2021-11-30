import { Routes, Route } from 'react-router-dom';
import './App.css';
import Body from './Body';
import Footer from './Footer';
import Header from './Header';
import Nav from './Nav';
import Posts from './Posts';
import ToDos from './ToDos';
import Users from './Users';

function App() {
  return (
    <>
    
    <Header />
    <Nav />
    <Routes>
      <Route path={'/todos'} element={<ToDos />} />
      <Route path={'/posts'} element={<Posts />} />
      <Route path={'/users'} element={<Users />} />
    </Routes>
    {/* <Body />
    <Footer /> */}
    </>
  );
}

export default App;
