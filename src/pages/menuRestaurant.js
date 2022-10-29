import "../components/assets/css/popular.css"
import Card from 'react-bootstrap/Card';
import Geprek from '../components/assets/menu/paketGeprek.png'
import { useNavigate } from "react-router-dom";
import {useContext, useEffect} from "react"
import {UserContext} from "../context/userContext"
import {useQuery} from "react-query"
import {API} from "../config/api"
import { useParams } from 'react-router-dom';



function MenuRestaurant(props) {

 
      const navigate = useNavigate();
      const {id} = useParams()
      const handleEditProfile = () => {
        navigate("/edit-profile");
      };
      const { data: menu } = useQuery("productsCache", async () => {
        const response = await API.get(`/products/${id}`);
        return response.data.data;
      });

      
      // useEffect(() => {
      //  menu()
      //   }
      // ,[]);
      


    return (
     <div className="ml-5">
        <div className="ml-5">
          <h2 className="text-left ml-3 mb-4 font-weight-bold mt-5">Geprek Bensu , Menus</h2>
            <div className="row justify-content-md-start">
             {menu?.map((restaurantMenu) => ( 
                
                  <Card style={{ width: '18rem' }} className="ml-3 mt-2 mb-2  p-3" >
                      <div className="">
                        <img 
                        width="100%"
                        height="200"
                        src={restaurantMenu.image ? "http://localhost:5000/uploads/"+ restaurantMenu.image : Geprek} alt="" className=""></img>
                      <h5 className="text-left  pt-2 ">{restaurantMenu.title}</h5>
                      <p className="text-left " >{restaurantMenu.price}</p>
                      <button type="button" onClick={props.orderan}class="btn btn-warning btn-md mt-5 btn-block">Order</button>
 
                      </div>
                  </Card>
                
               ))}
              
            </div>
        </div>
          
            
     </div>
    );
  }
  export default MenuRestaurant;