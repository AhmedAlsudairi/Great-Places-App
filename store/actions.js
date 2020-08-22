export const ADD_PLACE = 'ADD_PLACE';

export const addPlaceAction = (title,uri) => {
    return {
        type: ADD_PLACE, title: title, uri: uri
    }
}

