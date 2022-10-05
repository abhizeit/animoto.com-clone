
import {createContext, useReducer} from "react"

const initVal={
   price:"",
   message:""
}
const reducer =(state,action)=>{
   switch (action.type){
      case "checkout":
         return {...state,price:action.payload.price,message:action.payload.message}
      default:
         return state;
   }
}

export const CartContext  = createContext();
const CartContextProvider=({ children})=>{
   const [state,dispatch]= useReducer(reducer,initVal)
 return  <CartContext.Provider value={{state,dispatch}}>
      {children}
   </CartContext.Provider>
}
export default CartContextProvider

