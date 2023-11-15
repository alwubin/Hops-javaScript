/* eslint-disable */
import { configureStore, createSlice, combineReducers } from '@reduxjs/toolkit'


let user = createSlice({
    name :'user',
    initialState : 
    [
        {name:'서유빈', id:'dbqls6365@naver.com', pw:'hehe001031'}
    ],
    reducers : {
        adduser(state, action){
            state.push({name: action.payload[0], id: action.payload[1], pw: action.payload[2]})
        }
    }
})


let cart = createSlice({
    name :'cart',
    initialState : 
    [

    ]
    // cartItem //localStorage에서 데이터 불러오기 
    , 
    reducers : {
        increase(state, action){
            //버튼을 누르면 버튼 칸에 위치한 상품의 id와 같은 id를 가진 상품의 count를 1 더해줌
            let item = state.find((x)=>x.id == action.payload)
            item.count ++
        },
        decrease(state, action){
            //버튼을 누르면 버튼 칸에 위치한 상품의 id와 같은 id를 가진 상품의 count를 1 빼줌
            let item = state.find((x)=>x.id == action.payload)
            if(item.count>=1){
                item.count --
            }
            if(item.count==0) {
                // 빼기 버튼 옆에 위치한 상품의 id와 상품 배열에 있는 id가 일치한 상품의 인덱스를 저장
                let deleteIndex = state.findIndex(x => x.id == item.id)
                // splice()를 통해 해당 인덱스에 위치한 상품 object 제거
                state.splice(deleteIndex,1)
            }
        },
        total(state, action) {
            let total = 0 
            total += action.payload
        },
        addcart(state, action){
            if(state.some(x => x.name == action.payload.title)){
                //만약 상품이 이미 장바구니 목록에 존재한다면, 수량만 +1 증가 
                state[state.findIndex(x => x.name == action.payload.title)].count += 1}
            else {
                //만약 상품이 장바구니 목록에 없다면, 상품 object를 장바구니 배열에 추가
                //새로 추가된 상품의 id는 장바구니 배열의 차례로 부여되므로, 기존 상품 id와 상관없음
                state.push({id : state.length, img : action.payload.dtimg, name : action.payload.title, count : 1})}
            }
        }
    }
)

export let { increase, decrease, total, addcart } = cart.actions
export let { adduser } = user.actions

export default configureStore({
  reducer: { 
    user : user.reducer,
    cart : cart.reducer
  }
}) 