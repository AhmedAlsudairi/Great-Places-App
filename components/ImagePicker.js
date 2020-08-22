import React, { useState } from 'react';
import {View,Text,TouchableOpacity, StyleSheet, Button, Image, Alert} from 'react-native';
import {HeaderButton} from 'react-navigation-header-buttons';
import {Ionicons} from '@expo/vector-icons';
import * as imgPicker from 'expo-image-picker';
import colors from '../constants/colors';
import * as  Permissions from 'expo-permissions';
import { set } from 'react-native-reanimated';
const ImagePicker = props => {
    const [pickedImage,setPickedImage] = useState();
    const getPermissionCamera = async ()=> {
       const {status} = await Permissions.askAsync(Permissions.CAMERA_ROLL,Permissions.CAMERA);

       if(status === 'granted'){  
         const image = await imgPicker.launchCameraAsync({
             allowsEditing: true,
             aspect: [16,9]
         });
         setPickedImage(image.uri);
         props.imageTakenHandler(image.uri);
       return true;
         
       }
        Alert.alert('Permission decline','App can\'t reach the camera! , plase enable permisson fro the app',[{text:'Okey'}])
           return false;
    }

    
    return (
        <View style={styles.ImagePick}>
            <View style={styles.imagePreview}>
               {!pickedImage ?  <Text>There is no image yet!</Text> : <Image style={styles.image} source={{uri: pickedImage}}/>}
            </View>
            <Button title='Take Image' color={colors} onPress={getPermissionCamera} color={colors.primary}/>
        </View>
    );
}
 const styles = StyleSheet.create({
     ImagePick: {
         alignItems: 'center'
     },
     imagePreview: {
         width: 350,
         height: 350,
         marginVertical: 15,
         justifyContent: 'center',
         alignItems: 'center',
         borderColor: '#ccc',
         borderWidth: 1
     },
     image: {
         width: '100%',
         height: '100%'
     }
 })

export default ImagePicker;