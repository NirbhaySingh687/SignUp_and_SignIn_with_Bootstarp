import React from "react"
import {Card,Typography,CardContent} from "@material-ui/core"
import {Draggable} from "react-beautiful-dnd"

const styles ={
    cardContainer: {
        margin:8
    }
}
const Cards =({text,id,index})=> {
    return(
        <Draggable draggableId={String(id)} index={index}>
            {
                provided =>(
                    <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                        <Card style={styles.cardContainer}>
                            <CardContent>
                                <Typography gutterBottom>{text}</Typography>
                            </CardContent>
                        </Card>
                    </div>
                )
            }
        </Draggable>
    )
}

export default Cards