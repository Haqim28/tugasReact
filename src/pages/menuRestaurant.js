import "../components/assets/css/popular.css"
import Card from 'react-bootstrap/Card';
import Geprek from '../components/assets/menu/paketGeprek.png'
import GeprekKeju from '../components/assets/menu/geprekKeju.png'
import GeprekLeleh from '../components/assets/menu/geprekLeleh.png'
import GeprekMatah from '../components/assets/menu/sambelMatah.png'
import MaGeprek from '../components/assets/menu/ma_Geprek.png'
import MaKeju from '../components/assets/menu/ma_Keju.png'
import MaLeleh from '../components/assets/menu/ma_Leleh.png'
import MaSambal from '../components/assets/menu/ma_Sambal.png'


function MenuRestaurant(props) {

    const restaurantsMenu= ([
        {image: Geprek , nama: 'Paket Geprek', harga: 'Rp 15.000'},
        {image: GeprekKeju , nama: 'Paket Geprek Keju', harga: 'Rp 20.000'},
        {image: GeprekLeleh , nama: 'Paket Geprek Leleh', harga: 'Rp 25.000'},
        {image: GeprekMatah , nama: 'Paket Sambal Matah', harga: 'Rp 15.000'},
        {image: MaGeprek , nama: 'Mie Ayam Geprek', harga: 'Rp 17.000'},
        {image: MaKeju , nama: 'Mie Ayam Geprek Keju', harga: 'Rp 22.000'},
        {image: MaLeleh , nama: 'Mie Ayam Leleh', harga: 'Rp 27.000'},
        {image: MaSambal , nama: 'Mie Ayan Sambal Telur Asin', harga: 'Rp 22.000'},
        
      ]);

    return (
     <div className="ml-5">
        <div className="ml-5">
          <h2 className="text-left ml-3 mb-4 font-weight-bold mt-5">Geprek Bensu , Menus</h2>
            <div className="row justify-content-md-start">
            {restaurantsMenu.map((restaurantMenu) => (
                
                  <Card style={{ width: '18rem' }} className="ml-3 mt-2 mb-2  p-3" >
                      <div className="">
                        <img src={restaurantMenu.image} alt="" className="img-fluid w-100"></img>
                      <h5 className="text-left  pt-2 ">{restaurantMenu.nama}</h5>
                      <p className="text-left " >{restaurantMenu.harga}</p>
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