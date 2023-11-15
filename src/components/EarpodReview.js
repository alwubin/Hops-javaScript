import { styled } from 'styled-components';
import { FaStar } from 'react-icons/fa';
import { IoLogoOctocat} from 'react-icons/io';
import Rating from './Rating';

function EarpodReview(){
    const array = [0,1,2,3,4];

    return (
        <div>
            <Review>
                <div>
                    <div style={{fontSize:'20px', padding:'0', backgroundColor:'white'}}>
                        <span className='userimg' style={{ marginLeft: '18px', marginRight:'15px', position:'relative', top:'27px'}}> 
                            <IoLogoOctocat size='50' color='gray'/>
                        </span>
                        <div style={{marginLeft:'80px', position:'relative', bottom:'20px', fontSize:'15px'}}>
                        서유빈
                        <br/>
                        {
                            array.map((a,i)=>{
                                return(
                                    <FaStar size='15' color='#fcc419'/>
                                )
                            })
                        }
                        <br/>
                        <p style={{fontSize:'10px', color:'grey', marginTop:'5px'}}>상품명: 맑눈괭 - 에어팟 프로</p>
                        </div>
                    </div>
                    <div style={{marginBottom:'10px', marginLeft:'22px'}}>
                        <blockquote class="blockquote mb-0">
                        <p style={{fontSize:'15px'}}> 케이스 너무 이쁘고 편해서 좋은데, 가격도 저렴해서 무조건 맘에 듭니다.</p>
                        </blockquote>
                    </div>
                    <hr style={{border:'0.5px solid gray', marginBottom:'20px', marginTop:'40px'}}/>
                </div>
                <div>
                    <div style={{fontSize:'20px', padding:'0', backgroundColor:'white'}}>
                        <span className='userimg' style={{ marginLeft: '18px', marginRight:'15px', position:'relative', top:'27px'}}> 
                            <IoLogoOctocat size='50' color='gray'/>
                        </span>
                        <div style={{marginLeft:'80px', position:'relative', bottom:'20px', fontSize:'15px'}}>
                        노정완
                        <br/>
                        {
                            array.map((a,i)=>{
                                return(
                                    <FaStar size='15' color='#fcc419'/>
                                )
                            })
                        }
                        <br/>
                        <p style={{fontSize:'10px', color:'grey', marginTop:'5px'}}>상품명: 맑눈괭 - 에어팟 1&2</p>
                        </div>
                    </div>
                    <div style={{marginBottom:'10px', marginLeft:'22px'}}>
                        <blockquote class="blockquote mb-0">
                        <p style={{fontSize:'15px'}}> 너무 귀엽고 사랑스럽고 다 하십니다.</p>
                        </blockquote>
                    </div>
                    <hr style={{border:'0.5px solid gray', marginBottom:'20px', marginTop:'40px'}}/>
                </div>
            </Review>
            {/* <h6 style={{marginLeft:'130px', marginRight:'140px', textAlign:'left', color:'grey'}}>리뷰 작성하기</h6> */}
            <div className='writeReview' style={{marginLeft:'125px', marginRight:'250px', textAlign:'left'}}>
                <Rating/>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label" style={{marginTop:'20px'}}></label>
                    <input class="form-control" rows="3" placeholder='리뷰를 남겨주세요!'/>
                    <button class="btn btn-outline-secondary" type="button" style={{marginTop:'20px', marginBottom:'30px'}}>저장하기</button>
                </div>
            </div>
        </div>
    )
}

export default EarpodReview;

const Review = styled.div`
    margin-left:130px;
    margin-right:140px;
    text-Align: left;
    margin-bottom:30px; 
    width:70%;
`