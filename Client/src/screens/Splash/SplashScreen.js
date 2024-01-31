import { Dimensions, Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
const SplashScreen = ({ navigation }) => {
    useEffect(() => {
        // Simulate some loading time
    setTimeout(() => {
            // Navigate to LoginScreen after the splash screen
            navigation.navigate('AuthStack');
        }, 2000);

        // Clear the timer when the component unmounts
    }, [navigation]);

    return (
        <View>
            <ImageBackground source={require('../../assets/Society.jpg')} style={{ height: '100%', width: '100%' }}>
                <View style={{ height: windowHeight * 0.45, justifyContent: 'center', alignItems: 'center' }}>
                    <MaterialCommunityIcons name="home-city" size={30} color={'#2D404E'} />

                    <Text style={{ color: '#2D404E', fontSize: 26 }}>SKY TOWN</Text>
                    <View style={{ flexDirection: 'row', gap: 10, justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ width: 50, backgroundColor: '#2D404E', height: 2, borderRadius: 5 }} />
                        <Text style={{ color: '#2D404E', fontSize: 18 }}>Society</Text>
                        <View style={{ width: 50, backgroundColor: '#2D404E', height: 2, borderRadius: 5 }} />
                    </View>

                </View>
            </ImageBackground>
        </View>
    );
};

export default SplashScreen

const styles = StyleSheet.create({})