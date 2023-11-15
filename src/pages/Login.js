/* eslint-disable */

import { Col, Form, Row, Button, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";

function Login(){
    let navigate = useNavigate();
    let [popup, setPopup] = useState(false);
    let [id, setId] = useState('');
    let [pw, setPw] = useState('');
    let user = useSelector((state) => state.user);
    let goToMain = () => { navigate('/'); };
    

    useEffect(()=>{
        setTimeout(()=>{setPopup(false)}, 5000);
      }, );

   return (
    <>
    { popup == true ? <Popup /> : null }
    <form style={{marginLeft:'35%', marginTop:'10%'}}>
        <div class="form-group row" style={{marginBottom:'20px'}}>
            <label for="inputEmail3" class="col-sm-2 col-form-label">E-MAIL</label>
            <div class="col-sm-3">
            <input type="identity" class="form-control" onChange={e => {setId(e.target.value);}} id="inputIdentity3" placeholder="Identity"/>
            </div>
        </div>
        <div class="form-group row">
            <label for="inputPassword3" class="col-sm-2 col-form-label">PASSWORD</label>
            <div class="col-sm-3">
            <input type="password" class="form-control" onChange={e => {setPw(e.target.value);}} id="inputPassword3" placeholder="Password"/>
            </div>
        </div>
    </form>
    <Button style={{marginTop:'30px', marginRight:'20px'}} variant="secondary" size="lg" 
    onClick={(e) => { 
        if(user[0].id == id){ //redux에 저장된 사용자의 id와 pw가 입력된 값과 일치할 때
            if(user[0].pw == pw){
                e.stopPropagation();
                goToMain(); //홈화면으로 이동 
                localStorage.removeItem('watched')
            }
            else {
                setPopup(true);
            }
        }
        else {
            setPopup(true);
        }
        if(user[0].pw !== pw){
            setPopup(true);
        }
    }}>Login</Button>{' '}
    <Button style={{marginTop:'30px'}} variant="secondary" size="lg" onClick={()=>{navigate('/join')}}>Join</Button>{' '}
    </>
    

   )
}

function Popup() {
    return(
      <Alert variant="danger">
        존재하지 않는 사용자 입니다!
      </Alert>
    )
  }

export default Login;