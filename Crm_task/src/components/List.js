import React from "react"
import Cards from "./Cards"
import {map} from "lodash"
import ActionButton from "./ActionButton";
import {Droppable,Draggable} from "react-beautiful-dnd"

const styles={
    container: {
        backgroundColor: "#ccc",
        borderRadius: 3,
        width: 300,
        padding: 8,
        height: "100%",
        marginRight: '8px'
    }
}
const List =({title,cards,listID,index})=>{
    console.log(`<<<<<<<<<<<<${JSON.stringify(cards)}`)
    return(
        <Draggable draggableId={String(listID)} index={index}>
            {
                provided => (
                    <div {...provided.draggableProps}
                         ref={provided.innerRef}
                         {...provided.dragHandleProps}
                         style={styles.container}>
                        <Droppable droppableId={String(listID)} type="card">
                            {
                                provided => (
                                    <div
                                        {...provided.droppableProps}
                                        ref={provided.innerRef}>
                                        <h4>{title}</h4>
                                        {
                                            map(cards,(card,index)=>(
                                                <Cards text={card.text} index={index} key={card.id} id={card.id}/>
                                            ))
                                        }
                                        {provided.placeholder}
                                        <ActionButton listID={listID} />
                                    </div>
                                )
                            }
                        </Droppable>
                    </div>
                )
            }
        </Draggable>
    );
}

export default List