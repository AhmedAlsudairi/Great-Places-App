import React, { useState } from 'react';
import {View,Text,TextInput, StyleSheet, Button} from 'react-native';
import colors from '../constants/colors';
import { ScrollView } from 'react-native-gesture-handler';

const newPlaceScreen = props => {

    const [text,setText] = useState('');

    const onChangHandler = (value) => {

        setText(value)
    }

    const onSaveHandler =()=> {

        props.navigation.goBack();
    }
    return (
        <ScrollView>
            <View style={styles.screen}>
            <Text>NewPlaceScreen</Text>
            <Text>add place</Text>
            <TextInput
            value={text}
            style={styles.input}
            onChangeText={onChangHandler}
            />
            <Button title='Add Place' color={colors.primary} onPress={onSaveHandler}/>
        </View>
        </ScrollView>
        
    )
}

newPlaceScreen.navigationOptions = {
    headerTitle: 'Add New Place'
}
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,

    },
    input:{
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        width: 200,
        
    }
})

export default newPlaceScreen;