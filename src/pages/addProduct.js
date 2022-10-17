import React from 'react'
import Form from 'react-bootstrap/Form';
import '../components/assets/css/editProfile.css'

function AddProduct() {
    return (
        <div className='container mt-5 p-5 '>
           <h1 >Add Product</h1> 
           <Form>
                <div class="row justify-content-md-left">
                    <div class="col col-lg-9 ">
                         <Form.Group className="mb-3" controlId="formBasicFullName">
                            <Form.Control type="text" placeholder="Title" />
                        </Form.Group>
                    </div>
                    <div class="col-md-auto col-lg-3">
                        <div class="input-group mb-3">
                            <div class="custom-file">
                                <input type="file" class="custom-file-input" id="inputGroupFile01"/>
                                <label class="custom-file-label" for="inputGroupFile01">
                                    Attach File  
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <Form.Group className="mb-3 " controlId="formBasicEmail">
                    <Form.Control type="number" placeholder="Price" />
                </Form.Group>

                
                <div className='text-right'>
                    <button className='btn-delivery text-white m-5'>Save</button>
                </div>

                
            </Form>        
        </div>
             
       
    );
  }
  export default AddProduct;