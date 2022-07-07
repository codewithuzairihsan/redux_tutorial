import React, { Component } from "react";
import { addMember } from "../actions/Index";
import { Table } from "reactstrap";
import { connect } from "react-redux";

class DataTable extends Component {
    render() {  
    return (
      <>
      
      {this.props.showData===true ?
        <div >
          {this.props.add.list ? (
            
            <div>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Country</th>
                    <th>City</th>
                    <th>Address</th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.add.list.map((item, i) => (
                    <tr key={i}>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item.countries}</td>
                      <td>{item.cities}</td>
                      <td>{item.address}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
           ) : 
          null}
        </div>
        :
        null}
      </>
    );
  }
}
function mapStateToProps(state) {
  return {
    add: state.addingMember,
  };
}

const mapDispatchToProps = () => {
  return {
    addMember,
  };
};
export default connect(mapStateToProps, mapDispatchToProps())(DataTable);
