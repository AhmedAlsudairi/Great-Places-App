export const ADD_PLACE = 'ADD_PLACE';

export const addPlaceAction = (newPlace) => {

    return {
        type: ADD_PLACE, title: newPlace
    }
}

