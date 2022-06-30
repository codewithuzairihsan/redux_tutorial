import React from 'react'
import {Table } from 'react-bootstrap'
import {useSelector} from 'react-redux'



const Data=()=> {
    const list = useSelector((state)=>state.addingMember.list)

  return (
   <> 
   {
    list ?
   <div  >
      <Table striped bordered hover>
            <thead>
                <tr>
                <th>S.NO</th>
                <th>Name</th>
                <th>Email</th>
                <th>Address</th>
                </tr>
            </thead>
            <tbody>
                {
                    list.map((item,i)=>
                 <tr key={i} >
                    <td> {i}</td>
                    <td>{item.email}</td>
                    <td >{item.name}</td>
                    <td>{item.address}</td>
                
                </tr> 
                )}
            </tbody>
            </Table>
           
    </div>
    :
    null
    }
    {/* <div className="container">{props.data}</div> */}
    </>
  )
}

export default Data;