import React, { Component } from "react"
import {Button} from "@material-ui/core"
import StudentData from "./StudentData";
import AssignnedTasks from "./AssignnedTasks";
import CreateStaff from "./CreateStaff";

class Home extends Component{
    state={
        viewTask: false,
        createStaff: false
    }

    render(){
        return(
            <div>
                <StudentData />
                <Button variant="contained" color="primary" type="submit" style={{justifyContent: "space-between"}} onClick={()=>this.setState({viewTask: true,createStaff: false})}>TASK</Button>
                <Button variant="contained" color="primary" type="submit" style={{justifyContent: "space-between"}} onClick={()=>this.setState({createStaff: true,viewTask : false})}>New Staff</Button>
                {
                    this.state.viewTask && <AssignnedTasks />
                }
                {
                    this.state.createStaff &&<CreateStaff />
                }

            </div>
        )
    }
}

export default Home