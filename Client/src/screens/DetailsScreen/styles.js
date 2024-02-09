import { StyleSheet } from 'react-native';
import { COLOR_DARK, COLOR_LIGHT } from '../../constants/Color';
import { Screen_Height } from '../../constants/Constants';

export const STYLES = theme => {
    const COLOR = theme == 1 ? COLOR_DARK : COLOR_LIGHT;

    const styles = StyleSheet.create({
        header: {
            marginTop: 30,
            flexDirection: 'row',
            paddingHorizontal: 20,
            gap: 20,
          },
          headerText: {
            color: COLOR.DARKBLUE,
            fontSize: 24,
            fontWeight: 'bold',
          },
          container: {
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
          },
          input: {
            width: '80%',
            marginVertical: 10,
          },
          dropdown: {
            height: 50,
            width: '80%',
            borderColor: 'gray',
            borderWidth: 0.5,
            borderRadius: 8,
            paddingHorizontal: 8,
            marginVertical: 10,
          },
          dropdownFocus: {
            borderColor:COLOR.DARKBLUE,
          },
          icon: {
            marginRight: 5,
            color: COLOR.DARKBLUE,

          },
          placeholderStyle: {
            fontSize: 16,
          },
          selectedTextStyle: {
            fontSize: 16,
            color: COLOR.DARKBLUE,

          },
          iconStyle: {
            width: 20,
            height: 20,

          },
          button: {
            width: '80%',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
            backgroundColor: COLOR.DARKBLUE,
            height: 50,
            marginVertical: 10,
          },
          buttonText: {
            color: COLOR.WHITE,
            fontSize: 20,
            fontWeight: 'bold',
          },
          errorText:{
            color:COLOR.RED
          }
    });

    return styles;
};
