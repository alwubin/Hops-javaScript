/* eslint-disable */
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";

function RecentWatchted({getWatched}) {
  let navigate = useNavigate();
  let cart = useSelector((state) => state.cart);
  return (
    <div className="recent-box" style={{zIndex:'10'}}>
        <div className="cart-box" style={{color:'white', cursor: "pointer"}} 
        onClick={()=>{navigate("/cart");}}>CART<span className="cart-amount" style={{color:'black'}}>{cart.length}</span></div>
        <div style={{ marginTop: '10px', marginBottom:'0', fontSize:'15px'}}>최근 본 상품</div>
        <div className="product-box">
          {
            localStorage.getItem('watched') !== null ? 
            Array(2).fill(0).map(function(a,i){
            return (<div><img src={getWatched[i]} style={{height:'70px', marginTop:'10px', cursor: "pointer"}} /></div>);
            }) : null
          }
        </div>
        <div className="top-box" style={{color:'white', cursor: "pointer"}} onClick={()=>{window.scrollTo({top:0, behavior:'smooth'})}}>TOP ▲</div>
    </div>
  )
}

export default RecentWatchted;