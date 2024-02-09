import { StyleSheet } from 'react-native';
import { COLOR_DARK, COLOR_LIGHT } from '../../../constants/Color';
import { Screen_Height, Screen_Width } from '../../../constants/Constants';

export const STYLES = theme => {
    const COLOR = theme == 1 ? COLOR_DARK : COLOR_LIGHT;

    const styles = StyleSheet.create({
        MainContainer: { flex: 1, backgroundColor: COLOR.PRIMARYCOLOR },

        ContentContainer: {
            flex: 1,
        },
        backgroundImage: {
            height: '100%',
            width: '100%',
        },
        InnerContainer: {
            height: Screen_Height * 0.5,
            justifyContent: 'center',
            alignItems: 'center',
        },
        header: {
            fontSize: 24,
            fontWeight: 'bold',
            color: COLOR.SECONDARYCOLOR,
        },
        formContainer: {
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
        },
        inputContainer: {
            width: '60%',
            borderRadius: 10,
            paddingHorizontal: 10,
            marginVertical: 10,
            elevation: 1,
            borderWidth:1,
            shadowColor:COLOR.BLACK,
            alignItems: 'center',
            gap: 10,
            backgroundColor: COLOR.WHITE,
            flexDirection: 'row',
        },
        inputIcon: {
            color: COLOR.GRAY,
            fontSize: 20,
        },
        inputSeparator: {
            width: 1,
            height: 15,
            backgroundColor: COLOR.GRAY,
            borderRadius: 5,
        },
        input: {
            width: '60%',
            color: COLOR.GRAY,
        },
        errorText: {
            color: COLOR.RED,
        },
        loginButton: {
            backgroundColor: COLOR.SECONDARYCOLOR,
            width: '60%',
            borderRadius: 10,
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 10,
        },
        loginButtonText: {
            color: COLOR.WHITE,
            fontWeight: 'bold',
            fontSize: 16,
        },
        AlreadyContainer:{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          },
        signUpContainer: {
            color: COLOR.BLACK,
        },
        signUpLink: {
            color: COLOR.SECONDARYCOLOR,
            fontWeight: 'bold',
        },
    });

    return styles;
};
