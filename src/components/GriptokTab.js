/* eslint-disable */
import Nav from 'react-bootstrap/Nav';
import { useState, useEffect } from 'react';
import GriptokReview from './GriptokReview';
import Questions from './Questions';

function GriptokTab({product}) {
    let [tab, setTab] = useState(0);
    return(
        <>
        <Nav style={{marginTop:'50px', marginLeft: "78px", marginBottom:'20px', marginRight:'85px', fontSize: "20px"}} variant="tabs" defaultActiveKey="link0">
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
          <h6 style={{textAlign:'left', paddingLeft:'50px',  marginLeft: "78px", marginTop:'20px'}}>모든 휴대폰의 스마트톡은 동일하며, 미세한 사이즈 차이가 있을 수 있습니다. </h6>
          <img style={{height:'400px', marginTop:'30px'}} src={'/img/gtdt'+(product+1)+'.png'}/>
        </div>, 
        <div>
          <hr className='line'/>
          <h1 style={{textAlign:'left', paddingLeft:'50px',  marginLeft: "78px"}}>상품후기</h1>
          <h6 style={{textAlign:'left', paddingLeft:'53px', marginLeft: "78px", marginTop:'20px'}}>스마트톡 상품에 대해 작성된 상품평입니다.</h6>
          {/* <Rating/> */}
          <div style={{marginTop:'50px'}}></div>
          <GriptokReview/>
        </div>, 
        <div>
          <div className='ask-box'>
            <h1 style={{textAlign:'left', paddingLeft:'50px', marginTop:'50px'}}>상품문의</h1>
            {/* <button style={{width:'90px', height:'50px', position:'absolute', right: '170px', bottom:'486px'}}type="button" class="btn btn-outline-primary">문의하기</button> */}
            <hr style={{marginLeft:'40px', marginTop:'40px', marginBottom:'40px', marginRight:'40px', border:'solid 1px'}}/>
            <Questions/>
          </div>
        </div>
      ]
      [tab]
    }
    </div>
  }

export default GriptokTab;