import { FaStar } from 'react-icons/fa';
import { useState } from 'react';
// import { useEffect } from 'react';
import { styled } from 'styled-components';

const array = [0,1,2,3,4];

function Rating(){
    let [star, setStar] = useState([false,false,false,false,false])

    let handleClick = index => {
        let clickState = [...star];
        for (let i=0; i<5; i++){
            clickState[i] = i <= index ? true : false;
        }
        setStar(clickState);
    };

    // useEffect(()=>{
    //     sendReview();
    // }, [star]);

    // const sendReview = () => {
    //     let score = star.filter(Boolean).length;
    // };

    return (
        <Stars>
            {
                array.map((a,i) => {
                    return(
                        <FaStar 
                        key={i}
                        size='60'
                        onClick={()=>handleClick(a)}
                        className={star[a]&&'yellowStar'}
                        />
                    );
                })
            }
        </Stars>

    )
}
export default Rating;

const Stars = styled.div`
  display: flex;
  padding-top: 5px;
  margin-top: 20px;
//   margin-left: 120px;

  & svg {
    color: gray;
    cursor: pointer;
  }

  :hover svg {
    color: #fcc419;
  }

  & svg:hover ~ svg {
    color: gray;
  }

  .yellowStar {
    color: #fcc419;
  }`