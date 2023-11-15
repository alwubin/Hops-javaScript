/* eslint-disable */
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { addcart } from '../store';
import Alert from 'react-bootstrap/Alert';
import PhoneTab from "../components/PhoneTab";

function Detailpc(props) {
  let { id } = useParams();
  let product = props.phone.find((x)=>x.id == id);
  let [alert, setAlert] = useState(true);
  let [popup, setPopup] = useState(false);
  let [fade, setFade] = useState('');
  let dispatch = useDispatch()
  let cart = useSelector((state) => state.cart)


  useEffect(() => {
    setTimeout(() => {setAlert(false)},2000)
  }, []);

  useEffect(() => {
    setTimeout(()=>{setPopup(false)}, 2000)
  });

  useEffect(() => {
    setTimeout(() => { setFade('end') }, 100)
    return () => { setFade('') }
  }, [product]);
  
  useEffect(() => {
    let watchedItem = localStorage.getItem('watched');
    watchedItem = JSON.parse(watchedItem);
    let item = watchedItem.indexOf('/img/pcdt'+(product.id+1)+'.png');
    if(item !== -1){ watchedItem.splice(item,1); }
    watchedItem.push('/img/pcdt'+(product.id+1)+'.png');
    localStorage.setItem('watched', JSON.stringify(watchedItem))
  })


    return (
      <div className={"detail start " + fade}>
        { alert==true ? <Alertevent /> : null }
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src={product.img} style={{width:'100%', height:'100%', marginTop:'20px'}}/>
            </div>
            <div className="col-md-6" style={{fontFamily: "Spoqa Han Sans"}}>
              <h2 className="pt-5" style={{textAlign:'left'}}>{product.title}</h2>
                <hr style={{border:'solid 1px'}}/>
                <div style={{position:'relative', top:'13px'}}>
                  <p style={{marginBottom: "5px", textAlign:'left', marginLeft:'10px', marginTop:'40px', fontSize:'20px'}}>판매가:</p>
                  <p style={{marginBottom: "5px", textAlign:'right', position:'relative', bottom:'32px', right:'280px',fontSize:'20px'}}>{product.price}원</p>
                  <p style={{marginBottom: "5px",textAlign:'left', marginLeft:'10px', position:'relative', bottom:'5px', fontSize:'20px'}}>배송비:</p>
                  <p style={{marginBottom: "5px",textAlign:'right', position:'relative', bottom:'38px', right:'280px', fontSize:'20px'}}>2500원</p>
                </div>
                <hr/>
                <button className="btn btn-danger" style={{marginBottom:'10px', width:'200px', height:'70px', fontSize:'25px'}}
                  onClick={() => { dispatch(addcart(product)); setPopup(true);}}>
                  주문하기
                </button>
                { popup == true ? <Popup /> : null }
            </div>
          </div>
        </div>
        <PhoneTab product = {product}/>
      </div>
    );
  }

  function Alertevent() {
    return (
      <Alert variant="warning">
        회원 가입 후 첫 구매시, 무료배송 해드립니다. 😊
      </Alert>
    )
  }

  function Popup() {
    return (
      <Alert variant="success">
        장바구니에 추가되었습니다!
      </Alert>
    )
  }

export default Detailpc;