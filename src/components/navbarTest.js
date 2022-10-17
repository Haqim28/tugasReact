import Vespa from "./assets/vespa.png";
import React, { useState } from 'react';
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
import { UserContext } from '../context/userContext';
import { useContext } from 'react';
import { dummyUser } from '../dummy/dummyUser'

function NavbarTest() {
    
      const [show, setShow] = useState(false);
      
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);
  
      const handleHome = () => {
        navigate("/")
      }
      
      const [dataUser, dispatch] = useContext(UserContext);
      console.log('context', dataUser);
      console.log("hallo")
      console.log(dataUser.user.email);
  
      const [form, setForm] = useState({
          fullname: "",
          email: "",
          password: "",
      });
  
      const handleOnChange = (e) => {
          setForm({
              ...form,
              [e.target.name]: e.target.value,
          });
      }
      const navigate = useNavigate()
      
      const handleOnSubmit = (e) => {
          e.preventDefault()

          if (form.email === "user@mail.com" ) {
              dispatch({
                  type: "LOGIN_SUCCESS",
                  payload: form
              });
  
              return navigate("/profile")
  
          } else if (form.email === "admin@mail.com") {
              dispatch({
                  type: "LOGIN_SUCCESS",
                  payload: form
              });
  
              return navigate("/profile-partner")
          } else {
              alert("anda salah")
          }
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
                      <Form onSubmit={handleOnSubmit}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                          <Form.Label></Form.Label>
                          <Form.Control
                            type="email"
                            placeholder="Email"
                            name="email"
                            value={form.email}
                            onChange={handleOnChange}
                            autoFocus
                          />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                          <Form.Label></Form.Label>
                          <Form.Control
                            type="pass"
                            placeholder="Password"
                            name="pass"
                            onChange={handleOnChange}
                            
                          />
                        </Form.Group>
                        
                       
                        
                        
                        <button className="btn  btn-lg btn-brown text-white  m-3" variant="primary" size="md" onClick={handleClose}>
                          Login
                        </button>
                      </Form>
                    </Modal.Body>  
                      <div className=" text-muted text-center mb-3">
                        Don't have an account ? Klik Here 
                      </div>
              
                  </Modal>
              </nav>       
            </div>
          </div>
         );
  }
  export default NavbarTest;