import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, ImageBackground, Dimensions, ScrollView, KeyboardAvoidingView, Alert } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { authenticatelogin } from '../../Service/api';
import { name } from '../../redux/action';
import { useDispatch } from 'react-redux';
// import {AsyncStorage} from '@react-native-async-storage/async-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';



const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const validationSchema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

const Login = ({ navigation }) => {
  const dispatch = useDispatch();
  const handleLogin = async(values) => {
    console.log('Logging in with:', values);
    let response = await authenticatelogin(values);
       console.log("responsee------",response);
       if(response.status != 200){
        // console.log("responsenottt",response);
        Alert.alert("Error while login please try again")
       }
       else{
        try {
          const data=true
          await AsyncStorage.setItem(
            'USER',
            JSON.stringify(data),
          );
        } catch (error) {
          console.log("error in asynchstorageeee",error);
        }
         navigation.navigate('HomeTabs');

       }
       dispatch(name(values.email))
  };

  const handleSignUp = () => {
    navigation.navigate('SignUp');
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../assets/Garden.jpg')} style={{ height: '100%', width: '100%' }}>
        <View style={{ height: windowHeight * 0.5, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={styles.header}>Login</Text>
          <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={handleLogin}
            validationSchema={validationSchema}
          >
            {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
              <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ width: '60%', borderRadius: 10, paddingHorizontal: 10, marginVertical: 10, elevation: 1, alignItems: 'center', gap: 10, backgroundColor: '#fff', flexDirection: 'row' }}>
                  <AntDesign name="mail" size={20} color={'gray'} />
                  <View style={{ width: 1, height: 15, backgroundColor: 'gray', borderRadius: 5 }} />
                  <TextInput
                    style={{ width: '60%' }}
                    placeholder="Email"
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                  />
                </View>
                {touched.email && errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
                <View style={{ width: '60%', borderRadius: 10, paddingHorizontal: 10, marginVertical: 10, elevation: 1, alignItems: 'center', gap: 10, backgroundColor: '#fff', flexDirection: 'row' }}>
                  <AntDesign name="lock" size={20} color={'gray'} />
                  <View style={{ width: 1, height: 15, backgroundColor: 'gray', borderRadius: 5 }} />
                  <TextInput
                    style={{ width: '60%' }}
                    placeholder="Password"
                    secureTextEntry
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                  />
                </View>
                {touched.password && errors.password && <Text style={styles.errorText}>{errors.password}</Text>}


                <TouchableOpacity onPress={handleSubmit} style={{ backgroundColor: '#0D344C', width: '60%', borderRadius: 10, height: 50, justifyContent: 'center', alignItems: 'center', marginVertical: 10 }}>
                  <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 16 }}>Login</Text>
                </TouchableOpacity>

              </View>
            )}
          </Formik>

          <View style={{ flexDirection: 'row' }}>
            <Text style={{ marginTop: 16, color: '#000' }}>Don't have an account?</Text>
            <TouchableOpacity onPress={handleSignUp} >
              <Text style={styles.signUpLink}> Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    marginBottom: 16,
    fontWeight: 'bold',
    color: '#000'
  },
  input: {
    height: 40,
    width: '60%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 8,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
  },
  signUpLink: {
    marginTop: 16,
    color: 'blue',
  },
});

export default Login;
