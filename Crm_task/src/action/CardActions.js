import {CONSTANT} from "./index"

export const addCards=(cardId ,text)=>{
    return {
        type:CONSTANT.ADD_CARD,
        payload: {text,cardId}
    }
}