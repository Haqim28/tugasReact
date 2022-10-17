import "./assets/css/popular.css"
import Card from 'react-bootstrap/Card';
import Bk from "./assets/bk.png";
import Sb from "./assets/starbuck.png";
import Kfc from "./assets/kfc.png";
import Jco from "./assets/jco.png";


function PopularRestaurant() {
  
    const restaurants = ([
        {image: Bk , nama: 'BurgerKing'},
        {image: Sb , nama: 'Starbucks'},
        {image: Kfc , nama: 'KFC'},
        {image: Jco , nama: 'JCO'}, 
      ]);
    return (
     <div className="container">
        <div className="container row text-center">
        <h2 className="  mb-4 mt-5 font-weight-bold col-md-text-left col-lg-6 col-md-12">Popular Restaurant</h2>
           <div className="row justify-content-md-start col-lg-12 ml-5">
           {restaurants.map((restaurant) => (
          
                 <Card style={{ width: '14rem'  }} className=" card ml-2 border mt-2 p-4">
                    <div className="d-flex">
                    <img src={restaurant.image} alt=""  className="img fluid "></img>
                    <h5 className="text-center pt-4 px-2  font-weight-bold titlePopular"> {restaurant.nama} </h5>

                    </div>
                </Card>
            ))}
            
        </div>
            
         </div>
            
     </div>
    );
  }
  export default PopularRestaurant;