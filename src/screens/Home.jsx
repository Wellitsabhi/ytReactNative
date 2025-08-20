import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import Profile from './Profile'
const Home = ({navigation}) => {
  return (
    <View style={{width: '100%', justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{ fontSize: 30, fontWeight: 'bold', marginBottom: 20, color: 'black' }}>Home</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})