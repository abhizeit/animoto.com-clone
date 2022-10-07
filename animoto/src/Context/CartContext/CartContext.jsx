
import {createContext, useReducer} from "react"

const initVal={
   price:"",
   type:"",
   subscription:"",
}
const reducer =(state,action)=>{
   switch (action.type){
      case "checkout":
         return {...state,price:action.payload.price,type:action.payload.type,subscription:action.payload.subscription,}
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

