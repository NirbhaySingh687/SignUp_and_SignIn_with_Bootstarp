import React, { Component } from "react"
import {get,map} from "lodash"


class StudentData extends Component{
    constructor(props) {
        super(props);
        this.state={
            data : []
        }
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
    render() {
        let i=1
        return(
            <div>
                <table className="table">
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
                    {
                        map(this.state.data,(staff,)=>{
                            return <tbody>
                            <tr>
                                <th scope="row">{i++}</th>
                                <td>{get(staff,'data.first_name','Nirbhay')}</td>
                                <td>{get(staff,'data.last_name','Singh')}</td>
                                <td>{get(staff,'data.email','nirbhays058@gmail.com')}</td>
                                <td>{get(staff,'data.departments','Technology Team')}</td>
                                <td>{get(staff,'data.designation','Software Developer')}</td>
                                <td>{<button className="btn btn-danger btn-block"
                                             onClick={()=> this.deleteData}>Delete</button>}</td>
                            </tr>
                            </tbody>
                        })
                    }
                </table>
            </div>
        )
    }
}

export default StudentData
