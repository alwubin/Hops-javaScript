/* eslint-disable */
import { useNavigate } from "react-router-dom";

function Earpodcase(props) {
  let navigate = useNavigate();
  return (
    <div className="container">
      {props.earpod.map(function(a,i){
        return (
          <div className="product" >
            <div className="col-md-4" style={{width:'100%'}}>
              <div className="product_img_div">
                <img className = "product_img" src={a.img} style={{ cursor: "pointer" }} onClick={() => {navigate("/detailep/" + i);}}/>
              </div>
              <h4 className="product_title">{ a.title }</h4>
              <p className="product_price">{ a.price }</p>
            </div>
          </div>
        )
      })}
    </div>
  );
}

export default Earpodcase;