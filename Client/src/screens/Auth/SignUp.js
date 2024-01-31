import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Dimensions, ImageBackground, Alert } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useDispatch } from 'react-redux';
import { name } from '../../redux/action';
import { authenticatesignup } from '../../Service/api';


const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
const validationSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  
});

const SignUp = ({ navigation }) =>{
  const dispatch = useDispatch();
  const handleSignUp = async(values) => {
   
    
   
    let response = await authenticatesignup(values);
       console.log("responsee------",response);
       if(!response){
        console.log("responsenottt",response);
        Alert.alert("Error while signup please try again")
       }
       else{
         navigation.navigate('HomeTabs');
       }
       dispatch(name(values.name))

  };

  const handleLogin = () => {
    // Navigate to the login screen
    navigation.navigate('Login');
  };

  return (

    <View style={styles.container}>
      <ImageBackground source={require('../../assets/Garden.jpg')} style={{ height: '100%', width: '100%' }}>
        <View style={{ height: windowHeight * 0.5, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={styles.header}>Sign Up</Text>
          <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={handleSignUp}
            validationSchema={validationSchema}
          >
            {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
              <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                 <View style={{ width: '60%', borderRadius: 10, paddingHorizontal: 10, marginVertical: 10, elevation: 1, alignItems: 'center', gap: 10, backgroundColor: '#fff', flexDirection: 'row' }}>
                  <AntDesign name="user" size={20} color={'gray'} />
                  <View style={{ width: 1, height: 15, backgroundColor: 'gray', borderRadius: 5 }} />
                  <TextInput
                    style={{ width: '60%' }}
                    placeholder="Name"
                    onChangeText={handleChange('name')}
                    onBlur={handleBlur('name')}
                    value={values.name}
                  />
                </View>
                {touched.name && errors.name && <Text style={styles.errorText}>{errors.name}</Text>}
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
                  <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 16 }}>Sign Up</Text>
                </TouchableOpacity>

              </View>
            )}
          </Formik>

          <View style={{ flexDirection: 'row' }}>
            <Text style={{ marginTop: 16, color: '#000' }}>Already have an account?</Text>
            <TouchableOpacity onPress={handleLogin} >
              <Text style={styles.loginLink}>Login</Text>
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
    color: '#000',
    fontWeight: 'bold'
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
  loginLink: {
    marginTop: 16,
    color: 'blue',
  },
});

export default SignUp;
