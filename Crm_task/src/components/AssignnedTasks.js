import React, { Component } from 'react';
import {map} from "lodash"
import List from "./List"
import {connect} from "react-redux"
import ActionButton from "./ActionButton";
import {DragDropContext,Droppable} from "react-beautiful-dnd"
import {sort} from "../action"

const styles= {
    listContainer: {
        display: 'flex',
        flexDirection: 'row'
    }
}
class AssignnedTasks extends Component {
    onDragEnd=(result)=>{
        //Reordering logic
        const {destination,source,draggableId,type} = result
        if(!destination){
            return
        }
        this.props.dispatch(sort(
            source.droppableId,
            destination.droppableId,
            source.index,
            destination.index,
            draggableId,
            type
        ))
    }
    render() {
        const {lists} = this.props
        return (
            <DragDropContext onDragEnd={this.onDragEnd}>
                <div className="App">
                    <h2>Task</h2>
                    <Droppable droppableId="all-lists" direction="horizontal" type="list">
                        {
                            provided => (
                                <div {...provided.droppableProps} ref={provided.innerRef} style={styles.listContainer}>
                                    {
                                        map(lists, (list, index) => (
                                            <List listID={list.id} title={list.title} index={index} key={index} cards={list.cards}/>
                                        ))
                                    }
                                    {provided.placeholder}
                                    <ActionButton list/>
                                </div>
                            )
                        }
                    </Droppable>
                </div>
            </DragDropContext>
        );
    }
}

const mapStateToProps=(state)=>({
    lists: state.lists
})

export default connect(mapStateToProps)(AssignnedTasks);