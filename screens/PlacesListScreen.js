import React from 'react';
import {View,Text, StyleSheet,FlatList} from 'react-native';
import {HeaderButtons,Item} from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import colors from '../constants/colors';
import { useSelector } from 'react-redux';
import PlaceItem from '../components/PlaceItem';

const placesListScreen = props => {

    const places = useSelector((state)=>state.places.places);

    const renderPlaces = (place) => {
        return <PlaceItem title={place.item.title} image={place.item.imageURI} address={null} onPress={()=>{
            props.navigation.navigate('placeDetails',{
                title: place.item.title,
                id: place.item.id
            })
        }
        }/>
    }
    return (
        <View style={styles.screen}>
            <FlatList
            data={places}
            keyExtractor={(place)=>place.id}
            renderItem={renderPlaces}
            />
        </View>
    )
}

placesListScreen.navigationOptions = props => {

  return{
      headerTitle: 'My Places',
    headerRight: ()=> <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item 
        iconName='ios-add'
        iconSize={25}
        color={colors.primary}
        title='add'
        onPress={()=>{
        props.navigation.navigate('NewPlace')}}/>
    </HeaderButtons>
  }  
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default placesListScreen;