// This is Action
export const addMember=(id,name,email,countries,cities,address)=>
{ 
    return{
        
        type: 'ADD',
        payload: {
            id:id,
            name:name,
            email:email,
            address:address,
            cities:cities,
            countries:countries
        }
    }
}
export const clear=(id)=>
{
    return{
        type:'CLEAR',
        payload:{
            id
        }
      
    }
}
