import Product from './components/Product'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function App() {

  const products=[ { name:"Laptop", price:"90000", url:"https://m.media-amazon.com/images/I/71jG+e7roXL._SL1500_.jpg" },
    { name:"SmartPhone", price:"50000", url:"https://cdn.thewirecutter.com/wp-content/media/2024/09/iphone-2048px-6959.jpg?auto=webp&quality=75&width=980&dpr=2" },
    { name:"SmartWatch", price:"15000", url:"https://www.leafstudios.in/cdn/shop/files/1_1099cd20-7237-4bdf-a180-b7126de5ef3d_1000x.png?v=1722230645" },
    { name:"HeadPhones", price:"3000", url:"https://www.boat-lifestyle.com/cdn/shop/files/mainimage_458147a3-eabc-4816-a1c0-429c950422ad_800x.png?v=1741067646" }
  ]


  return (
  <div className="container">
    <ToastContainer position="top-right" autoClose={2000} />
    <h1 className="my-4">Product Page</h1>
    <div className="row">
      {products.map((element, index) => (
        <div className="col-md-3 mb-4" key={index}>
          <Product name={element.name} price={element.price} url={element.url} />
        </div>
      ))}
    </div>
  </div>
)

}

export default App;
