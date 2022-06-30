export const addMember =(name,email,address)=>
{
    return{
        type: 'ADD',
        payload: {
            id: new Date().getTime().toString(),
            name:name,
            email:email,
            address:address
        }
    }
}

export const showData =()=>
{
    return{
        type:'SHOW',
        
    }
}
