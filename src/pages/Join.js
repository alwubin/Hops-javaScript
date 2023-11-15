/* eslint-disable */

import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { Alert, Button } from "react-bootstrap";
import { adduser } from '../store';
import { useNavigate } from 'react-router-dom';


function Join(){
    let user = useSelector((state) => state.user);
    let dispatch = useDispatch();
    let navigate = useNavigate();
    let [popup1, setPopup1] = useState(false);
    let [popup2, setPopup2] = useState(false);
    let goToMain = () => { navigate('/'); };
    let name, id, pw = '';


    useEffect(()=>{
        setTimeout(()=>{setPopup1(false)}, 5000);
      }, );
    useEffect(()=>{
        setTimeout(()=>{setPopup2(false)}, 5000);
      }, );

    return (
        <>
        { popup1 == true ? <Popup1 /> : null }
        { popup2 == true ? <Popup2 /> : null }
        <form style={{textAlign:'left', marginLeft:'40%', marginTop:'9%',fontSize:'large'}}>
            <div class="form-group" style={{marginBottom:'25px'}}>
                <label for="exampleInputEmail1" style={{marginBottom:'10px'}}>Name</label>
                <div class="col-sm-5" style={{marginBottom:'5px'}}>
                <input type="name" class="form-control" id="Name" onChange={e => {name = e.target.value;}} placeholder="Name"/>
                </div>
            </div>
            <div class="form-group" style={{marginBottom:'25px'}}>
                <label for="exampleInputEmail1" style={{marginBottom:'10px'}}>Email address</label>
                <div class="col-sm-5" style={{marginBottom:'5px'}}>
                <input type="email" class="form-control" id="Email" onChange={e => {id = e.target.value;}} placeholder="Enter email"/>
                </div>
            </div>
            <div class="form-group" style={{marginBottom:'25px'}}>
                <label for="exampleInputPassword1" style={{marginBottom:'10px'}}>Password</label>
                <div class="col-sm-5">
                <input type="password" class="form-control" id="Password" onChange={e => {pw = e.target.value;}}  placeholder="Password"/>
                </div>
            </div>
            
            <Button variant="secondary" size="lg" onClick={(e) => { 
            let newuser = [name, id, pw]
            console.log(user)
            if(user.some(x => x.id == newuser[1])){
                setPopup1(true);
            }
            else if(name==null || id==null || pw==null){
                setPopup2(true);
            }
            else{
                dispatch(adduser(newuser))
                e.stopPropagation();
                goToMain();
            }
            }}>Sign in</Button>{' '}
        </form>
        </>
    )
}

function Popup1() {
    return(
      <Alert variant="danger">
        이미 존재하는 이메일 입니다.
      </Alert>
    )
  }
function Popup2() {
    return(
      <Alert variant="danger">
        이름/이메일/패스워드를 입력해주세요.
      </Alert>
    )
  }

export default Join;