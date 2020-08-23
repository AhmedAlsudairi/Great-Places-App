import { ADD_PLACE, FETCH_PLACES } from "./actions";
import Place from '../models/Place';

const initialStete = {
    places: []
}

const placesReducer = (state = initialStete, action) => {
    
    switch(action.type){
        case ADD_PLACE:
            const newPlace = new Place(action.id,action.title,action.uri)
            const updatedPlaces = state.places.concat(newPlace);
            return {...state,places: updatedPlaces};
        
        case FETCH_PLACES: 
            const places = action.places;
            return {...state,places: places? places.map((pla)=>{
                return new Place(pla.id,pla.title,pla.image);
            }):state.places}
        default:
            return state;
    }
}

export default placesReducer;