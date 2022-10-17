import Vespa from "./assets/vespa.png";
import React, { useState} from 'react';
import "./assets/css/navbar.css";
import Register from "./Modal/Register";
import keranjang from "./assets/keranjang.png";
import Profil from "./assets/profil.png";
import Profile from "./assets/profile.png";
import Logout from "./assets/logout 1.png"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import {useNavigate} from "react-router-dom";
import Login from "./assets/Login.png"


function PrivatePage(props) {

  const navigate = useNavigate()

  const handleCart = () => {
    navigate("/cart-order")
  }

  const handleHome = () => {
    navigate("/")
  }

  const handleProfile = () => {
    navigate("/profile")
  }
  
  return (
    <div className="App Container bg-warning ">
      <div className="container">
        <nav className="container navbar navbar-expand-lg bg-warning navbar-light">
              
              <div className="justify-content-start" onClick={handleHome} style={{cursor:"pointer"}}>
                  <a className="navbar-brand waysFoodHeader" alt="#">WaysFood</a>
                  <img src={Vespa} alt="delivery" className="ml-2"></img>
              </div>      
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
              </button>

              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                    </ul>
                    <form class="form-inline my-2 my-lg-0">
                    <div onClick={handleCart} style={{cursor:'pointer'}}>
                        <img src={keranjang} alt="delivery" className="mr-4 "></img>     
                      </div>
                  <div className="dropdown">
                        <img src={Profil} alt="" className="dropdown" type="button" id="dropdownMenu2" data-toggle="dropdown" />
                     
                      
                      <ul className="dropdown-menu " aria-labelledby="dropdownMenu2">
                          <li className="dropdown-content mr-5 mt-1 " style={{cursor:"pointer"}} >
                              <div className="bg-white " onClick={handleProfile}>
                                  <img src={Profile} className="img fluid mr-3 ml-1" alt="profile"></img>
                                  <span className="title-down">Profile</span>
                              </div>
                          </li>
                          <hr />
                          <li className="dropdown-content mr-5 mt-1" style={{cursor:"pointer"}}>
                              <div onClick={props.logout} className="bg-white ">
                                  <img src={Logout} className="img fluid mr-3 " alt="profile"></img>
                                  <span className="title-down">Logout</span>
                              </div>
                          </li>
                        </ul>
                  </div>
                   </form>
              </div>
          </nav>      
      </div>    
    </div>
  );
}

 

function GuestPage(props) {
  const navigate = useNavigate()
    const [show, setShow] = useState(false);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleHome = () => {
      navigate("/")
    }
    const [user,setUser] = useState ('')


    function getUser(val) {
      setUser(val.target.value)
      console.log(user);




      
    }
    return (
        <div className="App Container bg-warning  ">
          <div className="container ">
            <nav class="container navbar navbar-expand-lg bg-warning navbar-light">
              <div class="justify-content-start "onClick={handleHome} style={{cursor:'pointer'}}>
                <a class="navbar-brand waysFoodHeader" >WaysFood</a>
                <img src={Vespa} alt="delivery" className="ml-2"></img>
                
              </div>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                    </ul>
                    <form class="form-inline my-2 my-lg-0">
                    <Register  />
                    <div>

                    </div>
                    <Button className="bg-dark text-white mr-3"  onClick={handleShow}>Login</Button>
                   </form>
                </div>
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header >
                    <Modal.Title ><img src={Login} alt=""></img></Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Form>
                      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label></Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Email"
                          name="email"
                          value={user}
                          onChange={getUser}
                          autoFocus
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label></Form.Label>
                        <Form.Control
                          type="pass"
                          name="pass"
                          
                          placeholder="Password"
                         
                        />
                      </Form.Group>
                      
                    </Form>
                  </Modal.Body>
      
                    
                    <button className="btn  btn-lg btn-brown text-white  m-3" variant="primary" size="md" onClick={props.login} >
                        Login
                      </button>
                      
                    <div className=" text-muted text-center mb-3">
                      Don't have an account ? Klik Here 
                    </div>
            
                </Modal>
            </nav>       
          </div>
        </div>
       );
}

function Navbar() {
  const [isLoggedin, setIsLoggedin] = useState(false);
  return (
    <div>
      {isLoggedin ? (
        console.log("Anda Login"),
        <PrivatePage logout={() => setIsLoggedin(!isLoggedin)  } />
        ) : (
          console.log("Anda Keluar"),
          
         <GuestPage login={() => setIsLoggedin(!isLoggedin)} /> 
          
      )}
    </div>
  );
}

export default Navbar;



