
import React from 'react'
import Form from 'react-bootstrap/Form';
import '../components/assets/css/editProfile.css'
import Maps from '../components/assets/maps.png'
import selectMaps from '../components/assets/selectMap.png'

function EditProfilePartner() {
    return (
        <div className='container mt-5 p-5 '>
           <h1 >Edit Profile Partner</h1> 
           <Form>
                <div class="row justify-content-md-left">
                    <div class="col col-lg-9 ">
                         <Form.Group className="mb-3" controlId="formBasicFullName">
                            <Form.Control type="text" placeholder="FullName" />
                        </Form.Group>
                    </div>
                    <div class="col-md-auto col-lg-3">
                        <div class="input-group mb-3">
                            <div class="custom-file">
                                <input type="file" class="custom-file-input" id="inputGroupFile01"/>
                                <label class="custom-file-label" for="inputGroupFile01">
                                    Attacht File  
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <Form.Group className="mb-3 " controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Email" />
                </Form.Group>

                <Form.Group className="mb-3 " controlId="formBasicPhone">
                    <Form.Control type="number" placeholder="Phone" />
                </Form.Group>
                <div class="row justify-content-md-left">
                    <div class="col col-lg-9 ">
                        <Form.Group className="mb-3 " controlId="formBasicLocation">
                        <Form.Control type="text" placeholder="Location" />
                        </Form.Group>
                    </div>
                    <div class="col-md-auto col-lg-3 text-right  text-white" >
                        <div className="btn-delivery text-center " style={{cursor:'pointer'}} data-toggle="modal" data-target=".bd-example-modal-xl">
                            <div className='pt-2'>Select On Map <img src={selectMaps} alt="" className='pl-3'></img></div>
                        </div>  
                        <div className="modal fade bd-example-modal-xl" tabindex="-1" role="dialog" aria-labelledby="myExtraLargeModalLabel" aria-hidden="true">
                                <div className="  modal-dialog  modal-xl" >
                                    <div className="modal-content">
                                        <img src={Maps} alt="" ></img>
                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
                <div className='text-right'>
                    <button className='btn-delivery text-white m-5'>Save</button>
                </div>

                
            </Form>   
              
        </div>
             
       
    );
  }
  export default EditProfilePartner;