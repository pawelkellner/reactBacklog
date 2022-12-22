// filter voor game naam

export const filterGamesByTitle = (nameToBeSearched, toBeSearchedArray) =>{
    return toBeSearchedArray.filter(game => {
        if(game.title.toUpperCase().indexOf(nameToBeSearched.toUpperCase()) !== -1){
            return game
        }
        return;
    })
}

// filter voor platform

export const filterGamesByPlatform = (platformToBeSearched, toBeSearchedArray) =>{
    return toBeSearchedArray.filter(game =>{
        let found = false;
        game.platforms.forEach(platform =>{
            if(platform.toUpperCase() === platformToBeSearched.toUpperCase()){
                found = true;
            }
        })
        if(found){
            return game;
        }
    })
}


// Filter voor type


export const filterGamesByType = (typeToBeSearched, toBeSearchedArray) =>{
    return toBeSearchedArray.filter(game =>{
        let found = false
        game.type.forEach(type =>{
            if(type.toUpperCase() === typeToBeSearched.toUpperCase()){
                found = true
            }
        })
        if(found){
            return game;
        }
    })
}