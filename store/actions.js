import * as FileSystem from 'expo-file-system';

export const ADD_PLACE = 'ADD_PLACE';
export const FETCH_PLACES = 'FETCH_PLACES';
import {insertPlace,fetchPlaces} from '../helper/DB';

export const fetchPlacesAction = () => {
    return async dispatch => {
        const places = await fetchPlaces();
        console.log(places);
        dispatch({type: FETCH_PLACES, places: places.rows._array})
}
    }

export const addPlaceAction = (title,uri) => {
    return async dispatch => {

    const name = uri.split('/').pop();
    const newPath = FileSystem.documentDirectory + name;
       
        await FileSystem.moveAsync({
            from: uri,
            to: newPath
        })
        const place = await insertPlace(title, newPath, 'address', 15.2, 20.7);
        dispatch({type: ADD_PLACE, id: place.insertId.toString(), title: title, uri: newPath})
}
    }
    

