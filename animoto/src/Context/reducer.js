
export default  function reducer(state,action){
    switch(action.type){
        case "LOGIN":
            return {
               ...state,
                isAuth: true,
                user:action.payload
            }
        case 'LOGOUT':
            return {...state,isAuth: false,user:"",isPremiumUser:false}
        case "CHECKOUT":
            return {...state,isPremiumUser:true}
        default:
            return state;
        }
}