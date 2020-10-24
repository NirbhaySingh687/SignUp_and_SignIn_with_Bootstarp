import React, { Component } from "react"

class Home extends Component{
    state={
        data:''
    }
    componentDidMount =async()=>{
        await this.fetchData()
    }

    fetchData =async ()=>{
        await fetch('http://localhost:5000/user/data',{
            method : 'GET',
            headers : {"Content-Type": "application/json"},
        }).then(response => response.json())
            .then(data => {
                this.setState({data})
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
    deleteData=async ()=>{
        await fetch('http://localhost:5000/user/delete',{
            method : 'DELETE',
            headers : {"Content-Type": "application/json"},
        }).then(response => response.json())
            .then(data => {
                this.setState({data})
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });

        await this.fetchData()
    }
    render(){
        return(
            <div>
                <table class="table">
      <thead>
        <tr>
          <th scope="col">S.No</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">email</th>
          <th scope="col">Departments</th>
          <th scope="col">Designation</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>{this.state.data.first_name}</td>
          <td>{this.state.data.last_name}</td>
          <td>{this.state.data.email}</td>
          <td>{this.state.data.departments}</td>
          <td>{this.state.data.designation}</td>
          <td>{this.state.data ? <button className="btn btn-danger btn-block" onClick={this.deleteData}>Delete</button> : ''}</td>
        </tr>
      </tbody>
    </table>
            </div>
        )
    }
}

export default Home