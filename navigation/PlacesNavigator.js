import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import PlacesListScreen from '../screens/PlacesListScreen';
import PlaceDetailsScreen from '../screens/PlaceDetailsScreen';
import MapScreen from '../screens/MapScreen';
import NewPlaceScreen from '../screens/NewPlaceScreen';
import colors from '../constants/colors';

const placesNavigator = createStackNavigator({
    placesList: PlacesListScreen,
    placeDetails: PlaceDetailsScreen,
    map: MapScreen,
    NewPlace: NewPlaceScreen
},{
    defaultNavigationOptions:{
        headerStyle:{
            
        },
        headerTintColor: colors.primary
    }
})


export default createAppContainer(placesNavigator);