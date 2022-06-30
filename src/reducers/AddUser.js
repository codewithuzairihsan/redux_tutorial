const initialState ={
    list: []
}
const addingMember =( state=initialState , action)=>
{
    switch (action.type) {
        case "ADD":
        
        const {id, name,email,address}=action.payload;
        
        if(name,email, address)
    {
        return{
            ...state,
            list:
        [
                ...state.list,
                { 
                    id:id,
                    name:name,
                    email:email,
                    address:address
            }
        ]
     }
        
    }break;
            
    
        default: return state;
           
    }
}
export default addingMember;