import React, { useState } from 'react';
import {View,Text,TouchableOpacity, StyleSheet, Button, Image, Alert, ActivityIndicator} from 'react-native';
import colors from '../constants/colors';

const MapPreview = props => {
    let mapImageUrl;
    if(props.location){
        mapImageUrl= `https://maps.googleapis.com/maps/api/staticmap?center=${props.location.lat},${props.location.lng}&zoom=15&size=350x350&maptype=roadmap&markers=color:blue%7Clabel:S%7C${props.location.lat},${props.location.lng}&markers=color:blue%7Clabel:S%7C40.702147,-74.015794&markers=color:green%7Clabel:G%7C40.711614,-74.012318&markers=color:red%7Clabel:C%7C40.718217,-73.998284&key=AIzaSyD-ZPcMh4YKvZJSo-H2C7ESf2PEDJWlcEc`;
    }
    return (
        <View style={styles.locationPreview}>
            {props.location? <Image style={styles.image} source={{uri: mapImageUrl}}/>:props.children}
        </View>
    );
}
 const styles = StyleSheet.create({
   
    locationPreview: {
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

export default MapPreview;