import React, { useState } from 'react';
import {View,Text,TextInput, StyleSheet, Button} from 'react-native';
import colors from '../constants/colors';
import { ScrollView } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';
import {addPlaceAction} from '../store/actions';
import ImagePicker from '../components/ImagePicker';
const newPlaceScreen = props => {

    
    const [title,setTitle] = useState('');

    const onChangHandler = (value) => {

        setTitle(value)
    }

    const dispatch = useDispatch();


    const onSaveHandler =()=> {
        dispatch(addPlaceAction(title))
        props.navigation.goBack();
    }
    return (
        <ScrollView>
            <View style={styles.screen}>
            <Text>NewPlaceScreen</Text>
            <Text>add place</Text>
            <TextInput
            value={title}
            style={styles.input}
            onChangeText={onChangHandler}
            />
            <ImagePicker/>
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
        marginVertical: 20
        
    }
})

export default newPlaceScreen;