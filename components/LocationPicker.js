import React, { useState } from 'react';
import {View,Text,TouchableOpacity, StyleSheet, Button, Image, Alert, ActivityIndicator} from 'react-native';
import colors from '../constants/colors';
import * as  Permissions from 'expo-permissions';
import * as Loaction from 'expo-location'
import { set } from 'react-native-reanimated';
import MapPreview from './MapPreview';
const LoactionPicker = props => {
   const [currentLocation,setCurrentLocation] = useState();
   const [isLoading,setIsLoading] = useState(false);
    const getLocationHandler = async () => {


            const {status} = await Permissions.askAsync(Permissions.LOCATION);
     
            if(status === 'granted'){  
                setIsLoading(true);
              const loca = await Loaction.getCurrentPositionAsync({timeout: 5000});
              setCurrentLocation({lat: loca.coords.latitude,lng: loca.coords.longitude})
              setIsLoading(false);
            return true;
              
            }
             Alert.alert('Permission decline','App can\'t reach the location! , plase enable permisson fro the app',[{text:'Okey'}]);
             setIsLoading(false);
                return false;
         }
    
    return (
        <View style={styles.locationPick}>
            <MapPreview location={currentLocation}>
                {isLoading? <ActivityIndicator /> : <Text>No location chosen yet!</Text>}  
            </MapPreview>
             
            <Button title='Choose location' color={colors.primary} onPress={getLocationHandler} color={colors.primary}/>
        </View>
    );
}
 const styles = StyleSheet.create({
     locationPick: {
         alignItems: 'center',
         marginBottom: 15,
         flex: 1
     },
     location: {
         width: '100%',
         height: '100%'
     }
 })

export default LoactionPicker;