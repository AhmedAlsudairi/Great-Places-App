import React from 'react';
import {View,Text,TouchableOpacity, StyleSheet} from 'react-native';
import {HeaderButton} from 'react-navigation-header-buttons';
import {Ionicons} from '@expo/vector-icons';
const PlacesListScreen = props => {

    return <HeaderButton {...props} IconComponent={Ionicons} color={props.color} iconSize={25} ></HeaderButton>;
}


export default PlacesListScreen;