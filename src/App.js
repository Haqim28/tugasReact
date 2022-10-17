import './App.css';
import Navbar from './components/navbar'; // navbar
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import MenuRestaurant from './pages/menuRestaurant';
import Home from './pages/Home'
import Profile from './pages/profile';
import CartOrder from './pages/cart-order';
import EditProfil from './pages/editProfile';
import AddProduct from './pages/addProduct';
import EditProfilePartner from './pages/editProfilePartner';
import ProfilePartner from './pages/profilePartner';
import React from 'react';
import IncomeTransaction from './pages/incomeTransaction';
import LoginTest from './loginTest'
import NavbarTest from './components/navbarTest'
import NavbarPartner from './components/navbarPartner'


function App() {
  return (
    <div className='App-back'>
      <div className='App-back'>
          <Router>
              <Navbar/>
              <Routes>
                <Route exact path="/" element={<Home  />} />
                <Route exact path="/resto" element={<MenuRestaurant  />}></Route>
                <Route exact path="/cart-order" element={<CartOrder/>}></Route>
                <Route exact path="/profile" element={<Profile/>}></Route>
                <Route exact path="/edit-profile" element={<EditProfil/>}></Route>
                <Route exact path="/profile-partner" element={<ProfilePartner />}></Route>
                <Route exact path="/edit-profile-partner" element={<EditProfilePartner/>}></Route>
                <Route exact path="/add-product" element={<AddProduct/>}></Route>
                <Route exact path="/income" element={<IncomeTransaction />}></Route>
                <Route exact path="/login-test" element={<LoginTest/>}></Route>
              </Routes>
          </Router>
      </div>
    </div>
  );
}
export default App;
