/* eslint-disable */
import { Table, Button} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { increase, decrease, total } from '../store'
import { useState, useEffect } from 'react';

function Cart() {
    let cart = useSelector((state) => state.cart);
    let user = useSelector((state) => state.user);
    let total = 0;
    {cart.map((b,i) => total+=b.count)}
    let dispatch = useDispatch();
    let [button, setButton] = useState(0);
    useEffect(()=>{ //최근 본 상품 및 장바구니 상품 
        if(!localStorage.getItem('cartstorage')){ //'cart'라는 배열을 가져왔을 때 이미 있으면 true 없으면 false인데, 없는게 true일 때 생성
          localStorage.setItem('cartstorage', JSON.stringify([]))
        }
      }, [])

    useEffect(() => { //장바구니 데이터 storage에 저장 
        console.log(cart)
        if(cart!==null){
            let cartItem = localStorage.getItem('cartstorage');
            cartItem = JSON.parse(cartItem);
            cartItem.splice(0); //이전의 모든 인덱스 값 제거(배열초기화)
            let x = JSON.parse(JSON.stringify(cart)); //반복문으로 cart array의 객체 넣어주기
            x.map((a,i)=> cartItem.push(a));  
            localStorage.setItem('cartstorage', JSON.stringify(cartItem));
        }
      }, []);


    return (
        <div>
            <div style={{marginLeft:'100px', marginRight:'160px', marginBottom:'140px', position:'static'}}>
                <h6 style={{margin:'30px', fontSize:'larger'}}>
                    {user[0].name} 님의 장바구니
                </h6>
                <Table style={{tableLayout:'fixed'}}>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>상품</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>수량변경</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((a,i) =>
                                <tr key={i}>
                                <td style={{paddingTop:'55px'}}>{i+1}</td>
                                <td><img src={a.img} style={{height:'3cm'}}/></td>
                                <td style={{paddingTop:'55px'}}>{a.name}</td>
                                <td style={{paddingTop:'55px'}}>{a.count}</td>
                                <td> 
                                    <Button variant="outline-secondary" 
                                    style={{marginRight:'10px', marginLeft:'13px', marginTop:'45px', borderRadius:'50%', padding:'0px 8px 0px 8px'}}
                                    onClick={()=>{dispatch(increase(a.id)); setButton(button+1)}}>+</Button>{' '}
                                    <Button variant="outline-secondary" 
                                    style={{marginRight:'10px', marginTop:'45px', borderRadius:'50%', padding:'0px 8px 0px 8px'}}
                                    onClick={()=>{dispatch(decrease(a.id)); setButton(button+1)}}>-</Button>{' '}
                                </td>
                                </tr>
                            )
                        }
                        <tr>
                        <td colSpan={5} style={{fontSize:'20px'}}>총 금액은 {total*=5900}냥 입니다.</td>
                        </tr>
                    </tbody>
                </Table> 
            </div>
        </div>
    )
}

export default Cart