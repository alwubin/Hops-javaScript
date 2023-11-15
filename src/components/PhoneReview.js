import { styled } from 'styled-components';
import { FaStar } from 'react-icons/fa';
import { IoLogoOctocat} from 'react-icons/io';
import Rating from './Rating';

function PhoneReview(){
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
                        <p style={{fontSize:'10px', color:'grey', marginTop:'5px'}}>상품명: 연하남의 정석</p>
                        </div>
                    </div>
                    <div style={{marginBottom:'10px', marginLeft:'22px'}}>
                        <blockquote class="blockquote mb-0">
                        <p style={{fontSize:'15px'}}> 폰케이스 이름부터 취향저격이라 바로 구매했는데 넘 맘에 들어요.</p>
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
                        <p style={{fontSize:'10px', color:'grey', marginTop:'5px'}}>상품명: 애기자께여</p>
                        </div>
                    </div>
                    <div style={{marginBottom:'10px', marginLeft:'22px'}}>
                        <blockquote class="blockquote mb-0">
                        <p style={{fontSize:'15px'}}>친구들이 보더니 어디서 샀냐고 물어봤어욯ㅎ 이런 귀여운 걸 만들어줘서 감사합니다.</p>
                        </blockquote>
                    </div>
                    <hr style={{border:'0.5px solid gray',  marginBottom:'20px', marginTop:'40px'}}/>
                </div>
            </Review>
            <div className='writeReview' style={{marginLeft:'125px', marginRight:'250px', textAlign:'left'}}>
                <Rating/>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label" style={{marginTop:'20px'}}></label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='리뷰를 남겨주세요!'></textarea>
                    <button class="btn btn-outline-secondary" type="button" id="button-addon2" style={{marginTop:'20px', marginBottom:'30px'}}>저장하기</button>
                </div>
            </div>
        </div>
    )
}

export default PhoneReview;

const Review = styled.div`
    margin-left:130px;
    margin-right:140px;
    text-Align: left;
    margin-bottom:30px; 
    width:70%;

`