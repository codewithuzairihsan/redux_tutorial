const initialState ={
    list: []
}
const addingMember =(state=initialState , action)=>
{
    switch (action.type) {
        case "ADD":
        
        const {id,name,email,countries,cities,address}=action.payload;

        return{
            
            ...state,
            list:
        [   
             
                ...state.list,
                {   
                    id:id,
                    name:name,
                    email:email,
                    countries:countries,
                    cities:cities,
                    address:address,
            }
        ]
     }
    case "CLEAR":
     const newList= state.list.filter((item)=> item.id !== action.id);
    return{
       
            ...state,
            list:newList,
            
        }


        default: return state;
           
    }
}


export default addingMember;