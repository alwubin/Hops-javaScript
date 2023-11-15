/* eslint-disable */
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { addcart } from '../store';
import Alert from "react-bootstrap/Alert";
import EarpodTab from "../components/EarpodTab";
import Form from 'react-bootstrap/Form';

function Detailep(props) {
  let { id } = useParams();
  let product = props.earpod.find((x) => x.id == id);
  let [alert, setAlert] = useState(true);
  let [popup, setPopup] = useState(false);
  let [fade, setFade] = useState('')
  let dispatch = useDispatch()
  let cart = useSelector((state) => state.cart)

  useEffect(() => { 
    setTimeout(() => {setPopup(false);}, 3000);
  });

  useEffect(() => {
    setTimeout(() => {setAlert(false);}, 2000);
  }, []);

  useEffect(() => {
    setTimeout(() => {setFade('end')}, 100)
    return () => {setFade('')}
  }, [product]);


  useEffect(() => {
    let watchedItem = localStorage.getItem('watched');
    watchedItem = JSON.parse(watchedItem);
    let delItem = watchedItem.indexOf('/img/epdt'+(product.id+1)+'.png');
    if(delItem !== -1){watchedItem.splice(delItem,1);} 
    watchedItem.push('/img/epdt'+(product.id+1)+'.png');
    localStorage.setItem('watched', JSON.stringify(watchedItem));
  }, []);


  return (
    <div className={"detail start " + fade}>
      {alert == true ? <Alertevent /> : null}
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src={product.img} style={{ width: "100%", height: "100%", marginTop: "20px" }} />
          </div>
          <div className="col-md-6" style={{ fontFamily: "Spoqa Han Sans"}}>
            <h2 className="pt-5" style={{textAlign:'left'}}>{product.title}</h2>
            <hr style={{border:'solid 1px'}}/>
            <div style={{position:'relative', top:'13px'}}>
              <p style={{marginBottom: "5px", textAlign:'left', marginLeft:'10px', marginTop:'40px', fontSize:'20px'}}>판매가:</p>
              <p style={{marginBottom: "5px", textAlign:'right', position:'relative', bottom:'32px', right:'280px',fontSize:'20px'}}>{product.price}원</p>
              <p style={{marginBottom: "5px",textAlign:'left', marginLeft:'10px', position:'relative', bottom:'5px', fontSize:'20px'}}>배송비:</p>
              <p style={{marginBottom: "5px",textAlign:'right', position:'relative', bottom:'38px', right:'280px', fontSize:'20px'}}>2500원</p>
              <p style={{textAlign:'left', marginLeft:'10px', position:'relative', fontSize:'20px', bottom:'0px'}}>기종:</p>
              <div style={{marginLeft:'80px', position:'relative', bottom:'50px'}}>
                <Form.Select aria-label="Default select example">
                  <option>에어팟 기종을 선택해주세요.</option>
                  <option value="1">에어팟 1&2</option>
                  <option value="2">에어팟 프로</option>
                </Form.Select>
              </div>
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
      <EarpodTab product = {product}/>
    </div>
  );
}

function Alertevent() {
  return (
    <Alert variant="warning">
      회원 가입 후 첫 구매시, 무료배송 해드립니다. 😊
    </Alert>
  );
}

function Popup() {
  return <Alert variant="success">
    장바구니에 추가되었습니다!
    </Alert>;
}

export default Detailep;
