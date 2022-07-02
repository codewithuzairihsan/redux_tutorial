import React, { Component } from 'react';
import { addMember } from '../actions/Index';
import {Table} from 'reactstrap'
import {connect} from 'react-redux'

class DataTable extends Component {  
    render() { 
        return (
            <>
            <div>
            {
 this.props.add.list ?
   <div  >
      <Table striped bordered hover>
            <thead>
                <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Address</th>
                </tr>
            </thead>
            <tbody>
                {
            this.props.add.list.map((item,i)=>
                 <tr key={i} >
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
            </div>
            </>
        );
    }
}
function mapStateToProps (state){
    return {
        add: state.addingMember
    }
}


const mapDispatchToProps=()=>
{
    return{
        addMember
    }
}
export default connect(mapStateToProps, mapDispatchToProps())(DataTable);