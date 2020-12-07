import {CONSTANT} from "../action"

let listId =2
let cardId = 9
const initialState= [
    {
        title: "Task" ,
        id: `list-${0}`,
        cards: [
            {
                id: `card-${0}`,
                text: "We created a static list and Static Card"
            },
            {
                id: `card-${1}`,
                text: "we use a mix between material UI React and styled Components"
            },
            {
                id: `card-${3}`,
                text: "we will also make some little MOre changes"
            }
        ]
    },
    {
        title: "Doing" ,
        id: `list-${1}`,
        cards: [
            {
                id: `card-${4}`,
                text: "Client Meeting"
            },
            {
                id: `card-${5}`,
                text: "Plain Webinar"
            },
            {
                id: `card-${6}`,
                text: "Email newsletter"
            }
        ]
    },
    {
        title: "Done" ,
        id: `list-${2}`,
        cards: [
            {
                id: `card-${7}`,
                text: "Publish Podcast"
            },
            {
                id: `card-${8}`,
                text: "Launch Website"
            }
        ]
    }
]

const listsReducer =(state = initialState, action)=>{
    switch (action.type) {
        case CONSTANT.ADD_LIST:
            const newList = {
                title: action.payload,
                cards: [],
                id: `list-${listId}`
            }
            listId +=1
            return [...state,newList]

        case CONSTANT.ADD_CARD :{
            const newCard ={
                text: action.payload.text,
                id: `card-${cardId}`
            }
            cardId +=1
            const newState =state.map(list=> {
                if(list.id === action.payload.cardId){
                    return {
                        ...list,cards : [...list.cards,newCard]
                    }
                }else {
                    return list
                }
            })
            return newState
        }


        case CONSTANT.DRAG_HAPPENED:
            const {
                droppableIdStart,
                droppableIdEnd,
                droppableIndexStart,
                droppableIndexEnd,
                type
            }= action.payload
            const newState= [...state]

            // dragging list around
            if(type === 'list'){
                const list = newState.splice(droppableIndexStart,1)
                newState.splice(droppableIndexEnd,0,...list)
                return newState
            }

            //DRAG and DROP ACTION In The Same List
            if(droppableIdStart === droppableIdEnd){
                const list = state.find(list=> droppableIdStart === list.id)
                const card = list.cards.splice(droppableIndexStart,1)
                list.cards.splice(droppableIndexEnd,0,...card)
            }

            //Move other list
            if(droppableIdStart !== droppableIdEnd){
                //find the list where drag happened
                const listStart = state.find(list => droppableIdStart === list.id)

                //pull out the card from there list
                const cards= listStart.cards.splice(droppableIndexStart,1)

                //find the list where drag ended
                const listEnd = state.find(list=>  droppableIdEnd === list.id)

                //put the card in the new list
                listEnd.cards.splice(droppableIndexEnd,0,...cards)
            }
            return newState
        default:
            return state;
    }
}

export default listsReducer