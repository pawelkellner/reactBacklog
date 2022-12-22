const filteredGamesReducer = (state = [], action) =>{
    if(action.type === "FILTEREDGAMES"){
        return action.payload
    }
    return state
}

export default filteredGamesReducer;