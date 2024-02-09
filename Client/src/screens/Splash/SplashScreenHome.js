import { Dimensions, Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';
import { name } from '../../redux/action';
import { getData } from '../../Service/api';
import { Society } from '../../constants/Icon';
import { STYLES } from './styles';
import { COLOR_DARK, COLOR_LIGHT } from '../../constants/Color';



const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
const SplashScreenHome = ({ navigation }) => {
  const theme = useSelector(state => state.ThemeReducer);
  const COLOR = theme == 1 ? COLOR_DARK : COLOR_LIGHT;
  const styles = STYLES(theme);
  const [allowUser, setAllowUser] = useState(null);
  const dispatch = useDispatch();

  const userName = useSelector(state => state.dataReducer);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedData = await AsyncStorage.getItem('token');
        const parsedData = JSON.parse(storedData);
        setAllowUser(parsedData);
        // console.log("asyncccccdataaaaaaaa",parsedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

  }, []);

  useEffect(() => {
    const fetchToken = async () => {
      if (allowUser) {
        try {
          let response = await getData(allowUser);
          console.log('responsee------ of user dataaaa', response.data);
          dispatch(name(response?.data?.data));
        } catch (error) {
          console.error('Error fetching user data:', error);

        }
      }
    };

    fetchToken();
  }, [allowUser, dispatch]);

  useEffect(() => {
    // Simulate some loading time
    setTimeout(() => {
      // Navigate to LoginScreen after the splash screen
      navigation.navigate('DrawerNavigation');
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

export default SplashScreenHome

const styles = StyleSheet.create({})