import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { TextInput } from 'react-native-paper';
import { COLOR_DARK, COLOR_LIGHT } from '../../constants/Color';
import { useSelector } from 'react-redux';
import { STYLES } from './styles';
import { Formik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  blockWing: Yup.string()
  .matches(/^[a-zA-Z]$/, 'Should be a single alphabet')
  .required('Block/Wing is required'),

  blockWingNo: Yup.string()
  .matches(/^[0-9]{1,4}$/, 'Should be a valid digit up to 4 characters')
  .required('Block No./Wing No. is required'),

vehicleType: Yup.string().required('Vehicle Type is required'),
});

const data = [
  { label: '2 Wheeler', value: 'TwoWheeler' },
  { label: '4 Wheeler', value: 'FourWheeler' },
  { label: 'No Vehicle', value: 'No' },
];

const Details = ({ navigation }) => {
  const [isFocus, setIsFocus] = useState(false);
  const theme = useSelector((state) => state.ThemeReducer);
  const COLOR = theme == 1 ? COLOR_DARK : COLOR_LIGHT;
  const styles = STYLES(theme);

  return (
    <Formik
      initialValues={{ blockWing: '', blockWingNo: '', vehicleType: null }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
        navigation.navigate('HomeTabs');
      }}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
      }) => (
        <View>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <AntDesign name="arrowleft" size={26} color={COLOR.BLACK} />
            </TouchableOpacity>
            <Text style={styles.headerText}>Fill required details</Text>
          </View>

          <View style={styles.container}>
            <TextInput
              style={styles.input}
              outlineStyle={{ borderColor: COLOR.DARKBLUE }}
              textColor={COLOR.DARKBLUE}
              cursorColor={COLOR.DARKBLUE}
              placeholderTextColor={COLOR.DARKBLUE}
              mode="outlined"
              label="Block / Wing"
              onChangeText={handleChange('blockWing')}
              onBlur={handleBlur('blockWing')}
              value={values.blockWing}
            />
            {touched.blockWing && errors.blockWing && (
              <Text style={styles.errorText}>{errors.blockWing}</Text>
            )}

            <TextInput
              style={styles.input}
              mode="outlined"
              label="Block no. / Wing no."
              onChangeText={handleChange('blockWingNo')}
              onBlur={handleBlur('blockWingNo')}
              value={values.blockWingNo}
            />
            {touched.blockWingNo && errors.blockWingNo && (
              <Text style={styles.errorText}>{errors.blockWingNo}</Text>
            )}

            <Dropdown
              style={[
                styles.dropdown,
                isFocus && styles.dropdownFocus,
              ]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              iconStyle={styles.iconStyle}
              data={data}
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={!isFocus ? 'Select Vehicle' : '...'}
              value={values.vehicleType}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              onChange={(item) => {
                handleChange('vehicleType')(item.value);
                setIsFocus(false);
              }}
              renderLeftIcon={() => (
                <AntDesign
                  style={styles.icon}
                  color={isFocus ? 'blue' : 'black'}
                  name="Safety"
                  size={20}
                />
              )}
            />
            {touched.vehicleType && errors.vehicleType && (
              <Text style={styles.errorText}>{errors.vehicleType}</Text>
            )}

            <TouchableOpacity
              style={styles.button}
              onPress={handleSubmit}
            >
              <Text style={styles.buttonText}>Okay</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </Formik>
  );
};

export default Details;
