import React from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  ScrollView,
  KeyboardAvoidingView,
  StatusBar,
  Platform,
  Alert,
} from 'react-native';
import {Formik} from 'formik';
import * as yup from 'yup';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useSelector} from 'react-redux';
import {COLOR_DARK, COLOR_LIGHT} from '../../../constants/Color';
import {STYLES} from './styles';
import {Garden} from '../../../constants/Icon';
import {authenticatelogin} from '../../../Service/api';
import {name} from '../../../redux/action';
import {useDispatch} from 'react-redux';
// import {AsyncStorage} from '@react-native-async-storage/async-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';

const validationSchema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

const Login = ({navigation}) => {
  const theme = useSelector(state => state.ThemeReducer);
  const COLOR = theme == 1 ? COLOR_DARK : COLOR_LIGHT;
  const styles = STYLES(theme);
  const dispatch = useDispatch();

  const handleLogin = async values => {
    console.log('Logging in with:', values);
    let response = await authenticatelogin(values);
    console.log('responsee------', response.data);
    if (response.status != 201) {
      // console.log("responsenottt",response);
      Alert.alert('Error while login please try again');
    } else {
      dispatch(name(values.email));
      try {
        const data = response.data.data;
        await AsyncStorage.setItem('token', JSON.stringify(data));
      } catch (error) {
        console.log('error in asynchstorageeee', error);
      }
      //  navigation.navigate('HomeTabs');
    }
  };

  const handleSignUp = () => {
    navigation.navigate('SignUp');
  };

  return (
    <KeyboardAvoidingView style={styles.MainContainer} behavior="height">
      <StatusBar
        hidden={Platform.OS == 'ios' ? true : false}
        backgroundColor={COLOR.TRANSPARENT}
        translucent
      />
      <ScrollView
        contentContainerStyle={styles.ContentContainer}
        showsVerticalScrollIndicator={false}
        bounces={false}>
        <ImageBackground source={Garden} style={styles.backgroundImage}>
          <View style={styles.InnerContainer}>
            <Text style={styles.header}>Login</Text>
            <Formik
              initialValues={{email: '', password: ''}}
              onSubmit={handleLogin}
              validationSchema={validationSchema}>
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                errors,
                touched,
              }) => (
                <View style={styles.formContainer}>
                  <View style={styles.inputContainer}>
                    <AntDesign name="mail" size={20} color={COLOR.GRAY} />
                    <View style={styles.inputSeparator} />
                    <TextInput
                      style={styles.input}
                      cursorColor={COLOR.GRAY}
                      placeholder="Email"
                      placeholderTextColor={COLOR.GRAY}
                      onChangeText={handleChange('email')}
                      onBlur={handleBlur('email')}
                      value={values.email}
                    />
                  </View>
                  {touched.email && errors.email && (
                    <Text style={styles.errorText}>{errors.email}</Text>
                  )}
                  <View style={styles.inputContainer}>
                    <AntDesign name="lock" size={20} color={COLOR.GRAY} />
                    <View style={styles.inputSeparator} />
                    <TextInput
                      style={styles.input}
                      placeholder="Password"
                      placeholderTextColor={COLOR.GRAY}
                      cursorColor={COLOR.GRAY}
                      secureTextEntry
                      onChangeText={handleChange('password')}
                      onBlur={handleBlur('password')}
                      value={values.password}
                    />
                  </View>
                  {touched.password && errors.password && (
                    <Text style={styles.errorText}>{errors.password}</Text>
                  )}

                  <TouchableOpacity
                    onPress={handleSubmit}
                    style={styles.loginButton}>
                    <Text style={styles.loginButtonText}>Login</Text>
                  </TouchableOpacity>
                </View>
              )}
            </Formik>

            <View
              style={styles.AlreadyContainer}>
              <Text style={styles.signUpContainer}>
                Don't have an account ?
              </Text>
              <TouchableOpacity onPress={handleSignUp}>
                <Text style={styles.signUpLink}> Sign Up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Login;
