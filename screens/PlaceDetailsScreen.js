import React from 'react';
import {View,Text, StyleSheet} from 'react-native';

const placeDetailsScreen = props => {

    return (
        <View style={styles.screen}>
            <Text>PlaceDetailsScreen</Text>
        </View>
    )
}

placeDetailsScreen.navigationOptions = props => {
    return{
        headerTitle: props.navigation.getParam('title')
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default placeDetailsScreen;