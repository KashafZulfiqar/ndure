import React,{useState} from 'react'
// import Men from './Men/men'
// import kid from './Kids/Kid'
// import Women from './Women/Women'
import Home from './Pages/Home/Home'
import Product from './Pages/product/product';
import Nextpage from './Pages/Next page/Nextpage'
import { Routes, Route } from "react-router-dom";
export default function App() {
const  [data, setdata] = useState("Men")
  function transfer (name){
    setdata(name)
    console.log(name);

  }
  return (
    <>

    {/* <Product/> */}

    <Routes>
              <Route path="/" element={<Home newdata={transfer}/> }></Route>
              <Route path="next" element={<Nextpage data={data} />}></Route>
              <Route path="next/pro" element={<Product />}></Route>
            
            </Routes>
        </>
  )
}


