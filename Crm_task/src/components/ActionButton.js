import React,{Component} from "react"
import {Button, Card, Icon} from "@material-ui/core"
import Textarea from "react-textarea-autosize"
import {connect} from "react-redux"
import {addList,addCards} from "../action"


const styles = {
    openFormButtonGroup: {
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
        borderRadius: 3,
        height: 36,
        width: 272,
        paddingLeft:10
    },
    textAreaFocus: {
        resize: "none",
        width: "100%",
        outline: "none",
        border: "none",
        overflow: "hidden"
    },
    cardResizing: {
        overflow: "hidden",
        minHeight: 80,
        minWidth: 272,
        padding: "6px 0px 2px"
    },
    formButtonGroup:{
        marginTop:8,
        display: "flex",
        alignItems: "center"
    }
}
class ActionButton extends Component{
    state={
        formOpen: false,
        text: ""
    }

    openForm =() =>{
        this.setState({
            formOpen: true
        })
    }

    handleInputChange=(key,e)=>{
        this.setState({
            [key]: e.target.value
        })
    }

    renderForm= ()=>{
        const {list} = this.props;
        const placeholder = list ?  "Enter List Title..." : "Enter a title for card..."
        const buttonTitle = list ? "Add List" : "Add Card"


       return (
           <div>
               <Card style={styles.cardResizing}>
                   <Textarea
                       placeholder={placeholder}
                       autoFocus
                       onBlur={()=> this.setState({formOpen: false})}
                       value={this.state.text}
                       onChange={(e)=> this.handleInputChange('text',e)}
                       style={styles.textAreaFocus}
                   />
               </Card>
               <div style={styles.formButtonGroup}>
                   <Button onMouseDown={list ? this.handleAddList : this.handleAddCard} variant="contained" style={{color:"white",backgroundColor: "#5aac44"}}>{buttonTitle}</Button>
                   <Icon style={{marginLeft: 8,cursor:"pointer"}}>close</Icon>
               </div>
           </div>
       )
    }

    renderAddButton= ()=> {
        const {list} = this.props
        const buttonText = list ? "Add another list" : "Add another card"
        const buttonTextOpacity= list? 1 : 0.5
        const buttonTextColor = list ? "white" : "inherit"
        const buttonTextBackground = list ? "rgba(0,0,0,.15)" : "inherit"

        return (
            <div
                onClick={this.openForm}
                style={{...styles.openFormButtonGroup,opacity: buttonTextOpacity ,color: buttonTextColor ,backgroundColor: buttonTextBackground}}>
                <Icon>add</Icon>
                <p>{buttonText}</p>
            </div>
        )
    }

    handleAddList=()=>{
        const {dispatch} = this.props
        const {text} = this.state
        if(text){
            this.setState({
                text: ""
            })
            dispatch(addList(text))
        }
        return
    }
    handleAddCard = ()=>{
        const {dispatch,listID} = this.props
        const {text} = this.state
        if(text){
            this.setState({
                text: ""
            })
            dispatch(addCards(listID,text))
        }
    }

    render(){
        return this.state.formOpen ? this.renderForm() : this.renderAddButton()
    }
}

export default connect()(ActionButton)