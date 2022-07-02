export const addMember=(name,email,address)=>
{
    return{
        type: 'ADD',
        payload: {
            
            name:name,
            email:email,
            address:address
        }
    }
}
