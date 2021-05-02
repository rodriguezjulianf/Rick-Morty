const GET_CHARACTERS = 'GET_CHARACTERS'
const CHARACTER_DETAIL = 'CHARACTER_DETAIL'

const initialState = {
    pageList: [],
    characterDetail: {}
}

export default function mainReducer(state = initialState, action){
    switch (action.type){
        case GET_CHARACTERS:
            return{
                ...state,
                pageList: action.payload
            }
        case CHARACTER_DETAIL:
            return{
                ...state,
                characterDetail: action.payload
            }
        default:
            return state
    }
}