import { Dimensions, Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Society } from '../../constants/Icon';
import { STYLES } from './styles';
import { COLOR_DARK, COLOR_LIGHT } from '../../constants/Color';
import { useSelector } from 'react-redux';



const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
const SplashScreen = ({ navigation }) => {
    const theme = useSelector(state => state.ThemeReducer);
    const COLOR = theme == 1 ? COLOR_DARK : COLOR_LIGHT;
    const styles = STYLES(theme);
    useEffect(() => {
        // Simulate some loading time
        setTimeout(() => {
            // Navigate to LoginScreen after the splash screen
            navigation.navigate('AuthStack');
        }, 2000);

        // Clear the timer when the component unmounts
    }, [navigation]);

    return (
        <View style={styles.container}>
            <ImageBackground source={Society} style={styles.backgroundImage}>
                <View style={styles.contentContainer}>
                    <MaterialCommunityIcons name="home-city" size={30} color={COLOR.BLUE_SHADE} />
                    <Text style={styles.title}>SKY TOWN</Text>
                    <View style={styles.divider}>
                        <View style={styles.dividerLine} />
                        <Text style={styles.subtitle}>Society</Text>
                        <View style={styles.dividerLine} />
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
};

export default SplashScreen

const styles = StyleSheet.create({})