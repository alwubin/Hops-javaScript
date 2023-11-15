/* eslint-disable */
import Nav from 'react-bootstrap/Nav';
import { useState, useEffect } from 'react';
import Questions from './Questions';
import EarpodReview from './EarpodReview';

function EarpodTab({product}) {
    let [tab, setTab] = useState(0);
    return(
        <>
        <Nav style={{ marginTop:'50px', marginLeft: "78px", marginBottom:'20px', marginRight:'85px',fontSize: "20px" }} variant="tabs" defaultActiveKey="link0">
          <Nav.Item>
            <Nav.Link onClick={() => {setTab(0);}} eventKey="link0">
              상세정보
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
    setTimeout(() => { setFade('end') }, 100)
    return () => {setFade('')}
  }, [tab])
    
  return <div className={'start ' + fade}>
    {
      [
        <div>
          <hr className='line'/>
          <h1 style={{textAlign:'left', paddingLeft:'50px',  marginLeft: "78px"}}>상세정보</h1>
          <h4 style={{marginTop:'70px'}}>에어팟 프로 상세사진 입니다.</h4>
          <img style={{height:'400px', marginTop:'30px'}} src={'/img/epdt'+(product+1)+'.png'}/>
          <div style={{marginTop:'200px'}}/>
          <h4 style={{marginTop:'30px'}}>에어팟 1&2 상세사진 입니다.</h4>
          <img style={{height:'400px', marginTop:'30px'}} src={'/img/epdt'+(product+3)+'.png'}/>
        </div>, 
        <div>
          <hr className='line'/>
          <h1 style={{textAlign:'left', paddingLeft:'50px', marginLeft: "78px"}}>상품후기</h1>
          <h6 style={{textAlign:'left', paddingLeft:'53px',  marginLeft: "78px", marginTop:'20px'}}>동일 상품에 대해 작성된 상품평입니다. </h6>
          <div style={{marginTop:'50px'}}></div>
          <EarpodReview />
        </div>, 
        <div>
          <div className='ask-box'>
            <h1 style={{textAlign:'left', paddingLeft:'50px', marginTop:'50px'}}>상품문의</h1>
            {/* <button style={{width:'90px', height:'50px', position:'fixed'}}type="button" class="btn btn-outline-primary">문의하기</button> */}
            <hr style={{marginLeft:'40px', marginTop:'40px', marginBottom:'40px', marginRight:'40px', border:'solid 1px'}}/>
            <Questions/>
          </div>
        </div>
      ]
      [tab]
    }
    </div>
  }

export default EarpodTab;