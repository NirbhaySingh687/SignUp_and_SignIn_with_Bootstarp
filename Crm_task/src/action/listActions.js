import {CONSTANT} from "./index"

export const addList=(title)=>{
    return {
        type:CONSTANT.ADD_LIST,
        payload: title
    }
}

export const sort =(
    droppableIdStart,
    droppableIdEnd,
    droppableIndexStart,
    droppableIndexEnd,
    draggableId,
    type
)=>{
    return{
        type : CONSTANT.DRAG_HAPPENED,
        payload: {
            droppableIdStart,
            droppableIdEnd,
            droppableIndexStart,
            droppableIndexEnd,
            draggableId,
            type
        }
    }
}