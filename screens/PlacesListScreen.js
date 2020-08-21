import React from 'react';
import {View,Text, StyleSheet} from 'react-native';
import {HeaderButtons,Item} from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import colors from '../constants/colors';

const placesListScreen = props => {

    return (
        <View style={styles.screen}>
            <Text>PlacesListScreen</Text>
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