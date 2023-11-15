/* eslint-disable */
import "./App.css";
// import axios from 'axios';
import { useState, useEffect, lazy, Suspense } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Routes, Route, useNavigate } from "react-router-dom";

import Home from "./pages/Home";
const Phonecase = lazy(()=>import("./components/Phonecase"));
const Griptokcase = lazy(()=>import("./components/Griptokcase"));
const Earpodcase = lazy(()=>import("./components/Earpodcase"));
// const pdata = lazy(()=>import("./components/Phonedata"));
// const edata = lazy(()=>import("./components/Earpoddata"));
// const gdata = lazy(()=>import("./components/Griptokdata"));
const Detailep= lazy(()=>import("./pages/Detailep"));
const Detailgt= lazy(()=>import("./pages/Detailgt"));
const Detailpc= lazy(()=>import("./pages/Detailpc"));
const Wrong= lazy(()=>import("./pages/Wrong"));
const Cart= lazy(()=>import("./pages/Cart"));
const Login= lazy(()=>import("./pages/Login"));
const Join= lazy(()=>import("./pages/Join"));
const RecentWatchted= lazy(()=>import("./components/RecentWatched"));
// import Phonecase from "./components/Phonecase";
// import Griptokcase from "./components/Griptokcase";
// import Earpodcase from "./components/Earpodcase";
import pdata from "./components/Phonedata"; //export 한 파일 import해오기
import edata from "./components/Earpoddata";
import gdata from "./components/Griptokdata";
// import Detailep from "./pages/Detailep";
// import Detailgt from "./pages/Detailgt";
// import Detailpc from "./pages/Detailpc";
// import Home from "./pages/Home";
// import Wrong from "./pages/Wrong";
// import Cart from "./pages/Cart";
// import Login from "./pages/Login";
// import Join from "./pages/Join";
// import RecentWatchted from "./components/RecentWatched";

function App() {
  let [phone] = useState(pdata);
  let [earpod] = useState(edata);
  let [griptok] = useState(gdata);
  let navigate = useNavigate();
  let getWatched = JSON.parse(localStorage.getItem('watched'));
  if(getWatched !== null){
    getWatched = getWatched.reverse();//최근 본 상품 순서대로 출력 
  }

  useEffect(()=>{ //최근 본 상품 및 장바구니 상품 
    if(!localStorage.getItem('watched')){ //'watched'라는 배열을 가져왔을 때 이미 있으면 true 없으면 false인데, 없는게 true일 때 생성 
      localStorage.setItem('watched', JSON.stringify([]))
    }
    if(!localStorage.getItem('cartstorage')){ //'cart'라는 배열을 가져왔을 때 이미 있으면 true 없으면 false인데, 없는게 true일 때 생성
      localStorage.setItem('cartstorage', JSON.stringify([]))
    }
  }, )

  return (
    <div className="App">
      <Navbar bg="light" data-bs-theme="light" style={{position:'sticky', top:'0', zIndex:'2'}}>
        <Container >
          <Navbar.Brand onClick={() => {navigate("/");}}className="nav">
            <img src="/img/logo.png" alt="Hops' logo" />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => {navigate("/");}}>홈</Nav.Link>
            <Nav.Link onClick={() => {navigate("/phone");}} >폰케이스</Nav.Link>
            <Nav.Link onClick={() => {navigate("/earpod");}}>에어팟케이스</Nav.Link>
            <Nav.Link onClick={() => {navigate("/griptok");}}>스마트톡</Nav.Link>
          </Nav>
          <Nav.Link className="right-nav" onClick={() => {navigate("/cart");}} style={{textAlign:'right', marginRight:'10px'}}>장바구니</Nav.Link>
          <Nav.Link className="right-nav" onClick={() => {navigate("/login");}} style={{textAlign:'right'}}>로그인</Nav.Link>
        </Container>
      </Navbar>

      <Suspense fallback={ <img src="/img/suspense.jpeg"  style={{width:'80%', height:'80%'}} alt="suspense"/>}>
        <RecentWatchted getWatched={getWatched}/>

        <Routes>
          <Route path="/" element={<Home/>} />

          <Route path="/cart" element={<Cart/>} />
          <Route path="/login" element={ <Login/> } />
          <Route path="/join" element={<Join />} />

          <Route path="/detailep/:id" element={<Detailep earpod={earpod}/>}/>
          <Route path="/detailgt/:id" element={<Detailgt griptok={griptok}/>}/>
          <Route path="/detailpc/:id" element={<Detailpc phone={phone}/>}/>

          <Route path="/phone" element={<Phonecase phone={phone}/>} />
          <Route path="/earpod" element={<Earpodcase earpod={earpod}/>} />
          <Route path="/griptok" element={ <Griptokcase griptok={griptok}/>}  />
          <Route path="*" element={<Wrong/>} />
        </Routes>
      </Suspense>
    </div>
  );
}


export default App;
