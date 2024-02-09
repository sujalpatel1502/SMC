

// import React from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   Button,
//   StyleSheet,
//   TouchableOpacity,
//   ImageBackground,
//   Dimensions,
//   ScrollView,
//   KeyboardAvoidingView,
//   StatusBar,
//   Platform,
//   Alert,
// } from 'react-native';
// import { Formik } from 'formik';
// import * as yup from 'yup';
// import AntDesign from 'react-native-vector-icons/AntDesign';
// import { useDispatch, useSelector } from 'react-redux';
// import { STYLES } from './styles';
// import { Garden } from '../../../constants/Icon';
// import { COLOR_DARK, COLOR_LIGHT } from '../../../constants/Color';
// import { name } from '';
// import { authenticatesignup } from '../../../Service/api';

// const validationSchema = yup.object().shape({
//   name: yup.string().required('Name is required'),
//   email: yup.string().email('Invalid email').required('Email is required'),
//   password: yup
//     .string()
//     .min(6, 'Password must be at least 6 characters')
//     .required('Password is required'),
// });

// const SignUp = ({ navigation }) => {
//   const theme = useSelector(state => state.ThemeReducer);
//   const COLOR = theme == 1 ? COLOR_DARK : COLOR_LIGHT;
//   const styles = STYLES(theme);

//   const dispatch = useDispatch();
//   const handleSignUp = async(values) => {
   
    
   
//     let response = await authenticatesignup(values);
//        console.log("responsee------",response);
//        if(!response){
//         console.log("responsenottt",response);
//         Alert.alert("Error while signup please try again")
//        }
//        else{
//         //  navigation.navigate('HomeTabs');
//         Alert.alert("Sucessfully created account please log in")
//         navigation.navigate('Login');
//        }
//       //  dispatch(name(values.name))

//   };
  
//     const handleLogin = () => {
//       // Navigate to the login screen
//       navigation.navigate('Login');
//     };
//   return (
//     <KeyboardAvoidingView style={styles.MainContainer} behavior="height">
//       <StatusBar
//         hidden={Platform.OS == 'ios' ? true : false}
//         backgroundColor={COLOR.TRANSPARENT}
//         translucent
//       />
//       <ScrollView
//         contentContainerStyle={styles.ContentContainer}
//         showsVerticalScrollIndicator={false}
//         bounces={false}>
//         <ImageBackground source={Garden} style={styles.backgroundImage}>
//           <View style={styles.InnerContainer}>
//             <Text style={styles.header}>SignUp</Text>
//             <Formik
//               initialValues={{ email: '', password: '' }}
//               onSubmit={handleSignUp}
//               validationSchema={validationSchema}>
//               {({
//                 handleChange,
//                 handleBlur,
//                 handleSubmit,
//                 values,
//                 errors,
//                 touched,
//               }) => (
//                 <View style={styles.formContainer}>
//                   <View style={styles.inputContainer}>
//                     <AntDesign name="user" size={20} color={COLOR.GRAY} />
//                     <View style={styles.inputSeparator} />
//                     <TextInput
//                       style={styles.input}
//                       placeholder="Name"
//                       onChangeText={handleChange('name')}
//                       onBlur={handleBlur('name')}
//                       value={values.name}
//                     />
//                   </View>
//                   {touched.name && errors.name && <Text style={styles.errorText}>{errors.name}</Text>}
//                   <View style={styles.inputContainer}>
//                     <AntDesign name="mail" size={20} color={COLOR.GRAY} />
//                     <View style={styles.inputSeparator} />
//                     <TextInput
//                       style={styles.input}
//                       cursorColor={COLOR.GRAY}
//                       placeholder="Email"
//                       placeholderTextColor={COLOR.GRAY}
//                       onChangeText={handleChange('email')}
//                       onBlur={handleBlur('email')}
//                       value={values.email}
//                     />
//                   </View>
//                   {touched.email && errors.email && (
//                     <Text style={styles.errorText}>{errors.email}</Text>
//                   )}
//                   <View style={styles.inputContainer}>
//                     <AntDesign name="lock" size={20} color={COLOR.GRAY} />
//                     <View style={styles.inputSeparator} />
//                     <TextInput
//                       style={styles.input}
//                       placeholder="Password"
//                       placeholderTextColor={COLOR.GRAY}
//                       cursorColor={COLOR.GRAY}
//                       secureTextEntry
//                       onChangeText={handleChange('password')}
//                       onBlur={handleBlur('password')}
//                       value={values.password}
//                     />
//                   </View>
//                   {touched.password && errors.password && (
//                     <Text style={styles.errorText}>{errors.password}</Text>
//                   )}

//                   <TouchableOpacity
//                     onPress={handleSubmit}
//                     style={styles.signUpButton}>
//                     <Text style={styles.signUpButtonText}>SignUp</Text>
//                   </TouchableOpacity>
//                 </View>
//               )}
//             </Formik>

//             <View
//               style={{
//                 flexDirection: 'row',
//                 justifyContent: 'center',
//                 alignItems: 'center',
//               }}>
//               <Text style={styles.loginContainer}>Already have an account ? </Text>
//               <TouchableOpacity onPress={handleLogin} >
//                <Text style={styles.loginLink}>Login</Text>
//              </TouchableOpacity>
//             </View>
//           </View>
//         </ImageBackground>
//       </ScrollView>
//     </KeyboardAvoidingView>
//   );
// };

// export default SignUp;


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
import { Formik } from 'formik';
import * as yup from 'yup';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useDispatch, useSelector } from 'react-redux';
import { STYLES } from './styles';
import { Garden, Garden2 } from '../../../constants/Icon';
import { COLOR_DARK, COLOR_LIGHT } from '../../../constants/Color';
import { authenticatesignup } from '../../../Service/api';

const validationSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
  phoneNumber: yup.string().matches(/^[0-9]{1,13}$/, 'Invalid phone number upto 13 digit').required('Phone Number is required'),
  wing: yup.string().matches(/^[A-Z]$/, 'Invalid wing, only single capital alphabet').required('Wing is required'),
  flatNumber: yup.string().matches(/^[0-9]{1,5}$/, 'Invalid flat number upto 5 digit').required('Flat Number is required'),
});

const SignUp = ({ navigation }) => {
  const theme = useSelector(state => state.ThemeReducer);
  const COLOR = theme == 1 ? COLOR_DARK : COLOR_LIGHT;
  const styles = STYLES(theme);

  const dispatch = useDispatch();
  const handleSignUp = async(values) => {
    let response = await authenticatesignup(values);
    console.log("responsee------",response);
    if(!response){
      console.log("responsenottt",response);
      Alert.alert("Error while signup please try again")
    }
    else{
      Alert.alert("Successfully created account please log in")
      navigation.navigate('Login');
    }
  };
  
  const handleLogin = () => {
    // Navigate to the login screen
    navigation.navigate('Login');
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
        <ImageBackground source={Garden2} style={styles.backgroundImage}>
          <View style={styles.InnerContainer}>
            <Text style={styles.header}>SignUp</Text>
            <Formik
              initialValues={{ name: '', email: '', password: '', phoneNumber: '', wing: '', flatNumber: '' }}
              onSubmit={handleSignUp}
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
                    <AntDesign name="user" size={20} color={COLOR.GRAY} />
                    <View style={styles.inputSeparator} />
                    <TextInput
                      style={styles.input}
                      placeholder="Name"
                      onChangeText={handleChange('name')}
                      onBlur={handleBlur('name')}
                      value={values.name}
                    />
                  </View>
                  {touched.name && errors.name && <Text style={styles.errorText}>{errors.name}</Text>}
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
                  <View style={styles.inputContainer}>
                    <AntDesign name="phone" size={20} color={COLOR.GRAY} />
                    <View style={styles.inputSeparator} />
                    <TextInput
                      style={styles.input}
                      placeholder="Phone Number"
                      placeholderTextColor={COLOR.GRAY}
                      keyboardType='number-pad'
                      cursorColor={COLOR.GRAY}
                      onChangeText={handleChange('phoneNumber')}
                      onBlur={handleBlur('phoneNumber')}
                      value={values.phoneNumber}
                    />
                  </View>
                  {touched.phoneNumber && errors.phoneNumber && (
                    <Text style={styles.errorText}>{errors.phoneNumber}</Text>
                  )}
                  <View style={styles.inputContainer}>
                    <AntDesign name="home" size={20} color={COLOR.GRAY} />
                    <View style={styles.inputSeparator} />
                    <TextInput
                      style={styles.input}
                      placeholder="Wing"
                      placeholderTextColor={COLOR.GRAY}
                      cursorColor={COLOR.GRAY}
                      onChangeText={handleChange('wing')}
                      onBlur={handleBlur('wing')}
                      value={values.wing}
                    />
                  </View>
                  {touched.wing && errors.wing && (
                    <Text style={styles.errorText}>{errors.wing}</Text>
                  )}
                  <View style={styles.inputContainer}>
                    <AntDesign name="home" size={20} color={COLOR.GRAY} />
                    <View style={styles.inputSeparator} />
                    <TextInput
                      style={styles.input}
                      placeholder="Flat Number"
                      placeholderTextColor={COLOR.GRAY}
                      keyboardType='number-pad'
                      cursorColor={COLOR.GRAY}
                      onChangeText={handleChange('flatNumber')}
                      onBlur={handleBlur('flatNumber')}
                      value={values.flatNumber}
                    />
                  </View>
                  {touched.flatNumber && errors.flatNumber && (
                    <Text style={styles.errorText}>{errors.flatNumber}</Text>
                  )}

                  <TouchableOpacity
                    onPress={handleSubmit}
                    style={styles.signUpButton}>
                    <Text style={styles.signUpButtonText}>SignUp</Text>
                  </TouchableOpacity>
                </View>
              )}
            </Formik>

            <View
              style={styles.AlreadyContainer}>
              <Text style={styles.loginContainer}>Already have an account ? </Text>
              <TouchableOpacity onPress={handleLogin} >
               <Text style={styles.loginLink}>Login</Text>
             </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignUp;
