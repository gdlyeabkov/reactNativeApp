const initialState={
    allPosts:[],
    bookedPosts:[],
    loading:true
}
export const postReducer=(state=initialState,action)=>{
    switch(action.type){
        case LOAD_POSTS:
            return {...state,loading:false,allPosts:action.payload,bookedPosts:action.payload.filter(post=>post.booked)}
        case TOGGLE_POSTS:{
            const allPosts=state.allPosts.map(post=>{
                if(post.id===action.payload){
                    post.booked=!post.booked
                }
                return post
            })
        }
        case     REMOVE_POST:
            
            return {...state,allPosts:state.allPosts.filter(p=>p.id!==action.payload),bookedPosts:state.bookedPosts.filter(p=>p.id!==action.payload)}
        case     ADD_POST:
            
                return {...state,allPosts:[{...action.payload},...state.allPosts],bookedPosts:state.bookedPosts.filter(p=>p.id!==action.payload)}
            
            default:
            return state
    }
    
}