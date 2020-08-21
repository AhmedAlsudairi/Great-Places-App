import { ADD_PLACE } from "./actions";
import Place from '../models/Place';
const initialStete = {
    places: []
}

export default placesReducer = (state = initialStete, action) => {
    switch(action.type){
        case ADD_PLACE:
            const newPlace = new Place(new Date().toString(),action.title)
            const updatedPlaces = state.places.concat(newPlace);
            return {...state,places: updatedPlaces}
        default:
            return state;
    }
}