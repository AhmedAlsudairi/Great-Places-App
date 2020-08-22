import * as FileSystem from 'expo-file-system';

export const ADD_PLACE = 'ADD_PLACE';

export const addPlaceAction = (title,uri) => {
    return async dispatch => {

    const name = uri.split('/').pop();
    const newPath = FileSystem.documentDirectory + name;
       
        await FileSystem.moveAsync({
            from: uri,
            to: newPath
        })
        dispatch({type: ADD_PLACE, title: title, uri: newPath})
}
    }
    

