/* eslint-disable */
import Nav from 'react-bootstrap/Nav';
import { useEffect, useState } from 'react';
import PhoneReview from './PhoneReview';
import Questions from './Questions';


function PhoneTab({product}) {
    let [tab, setTab] = useState(0);
    return(
        <>
        <Nav style={{marginTop:'50px', marginLeft: "78px", marginBottom:'20px', marginRight:'85px', fontSize: "20px"}} variant="tabs" defaultActiveKey="link0">
          <Nav.Item>
            <Nav.Link onClick={() => {setTab(0);}} eventKey="link0">
              상품상세
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={() => {setTab(1);}} eventKey="link1">
              상품후기
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={() => {setTab(2);}} eventKey="link2">
              상품문의
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <TabContent tab={tab} product={product.id}/>
      </>
    )
}

function TabContent({tab, product}){
  let [fade, setFade] = useState('')
  useEffect(() => {
    setTimeout(()=>{ setFade('end') }, 100)
    return() => { setFade('') }
  }, [tab])

  return <div className={'start ' + fade}>
    {
      [
        <div>
          <hr className='line'/>
          <h1 style={{textAlign:'left', paddingLeft:'50px', marginLeft: "78px"}}>상세정보</h1>
          <h6 style={{textAlign:'left', paddingLeft:'53px', marginLeft: "78px", marginTop:'20px'}}>핸드폰 기종에 따라 사진 크기가 약간의 차이가 있을 수 있습니다. </h6>
          <img style={{height:'500px', marginTop:'50px', marginBottom:'50px'}} src={'/img/pcdt'+(product+1)+'.png'}/>
        </div>, 
        <div>
          <hr className='line'/>
          <h1 style={{textAlign:'left', paddingLeft:'50px', marginLeft: "78px"}}>상품후기</h1>
          <h6 style={{textAlign:'left', paddingLeft:'53px', marginLeft: "78px", marginTop:'20px'}}>핸드폰 케이스 상품에 대해 작성된 상품평으로, 핸드폰 종류는 상이할 수 있습니다. </h6>
          {/* <Rating/> */}
          <div style={{marginTop:'50px'}}></div>
          <PhoneReview/>
        </div>, 
        <div>
          <div className='ask-box'>
            <h1 style={{textAlign:'left', paddingLeft:'50px', marginTop:'50px'}}>상품문의</h1>
            {/* <button style={{width:'90px', height:'50px', position:'absolute', right: '170px', bottom:'5px'}}type="button" class="btn btn-outline-primary">문의하기</button> */}
            <hr style={{marginLeft:'40px', marginTop:'40px', marginBottom:'40px', marginRight:'40px', border:'solid 1px'}}/>
            <Questions/>
          </div>
        </div>
      ]
      [tab]
    }
    </div>
  }

export default PhoneTab;