


export default function(state = {loading: false}, action){
   state.dataset = action.response
    console.log(state, action);
    return state;
    
}