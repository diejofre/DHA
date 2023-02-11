import './App.css';
import {useState,useEffect} from 'react';
import NavBar from './Components/NavBar';
import ItemListConteiner from './Components/ItemListConteiner';
import {db} from './db/firebase-config.js';
import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import Cards from './Components/Cards';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import ElLugar from './Components/ElLugar';
import Contacto from './Components/Contacto';
import Cartwidget from './Components/CartWidget';
import Descripcion from './Components/Descripcion';


function App() {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({});
  const productsCollectionRef = collection(db, "data");

  const getProducts = async () => {
  const data = await getDocs(productsCollectionRef);  
  setProducts(data.docs.map(doc => ({...doc.data(), id: doc.id})));
  }
  


const getProduct = async (id) => {
  const docRef = doc(db, "data", id);
  const docSnap = await getDoc(docRef); 
  
  if (docSnap.exists()) {
    setProduct(docSnap.data());
  } }



  useEffect(() => {
    getProducts();
    },[])

  return (
    <div className="App" >
      <NavBar/>
      <Routes>           
        <Route path="/Programacion" element={<ItemListConteiner products={products}/>}/>
        <Route path="/Programacion/:titulo" element={<Descripcion products={products}/>}/>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/El lugar" element={<ElLugar/>}/>
        <Route path="/Contacto" element={<Contacto/>}/>
        <Route path="/Cartwidget" element={<Cartwidget/>}/>
      </Routes>
    </div>
  );
}

export default App;
