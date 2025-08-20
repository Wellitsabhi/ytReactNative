import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const Profile = ({ navigation }) => {
    return (
        <View>
            <Text>Profile</Text>
            <Button title='Profile' onPress={() => navigation.navigate('Profile')} />

        </View>
    )
}

export default Profile

const styles = StyleSheet.create({})