import { StyleSheet } from 'react-native';
import { COLOR_DARK, COLOR_LIGHT } from '../../constants/Color';
import { Screen_Height } from '../../constants/Constants';


export const STYLES = theme => {
    const COLOR = theme == 1 ? COLOR_DARK : COLOR_LIGHT;

    const styles = StyleSheet.create({
        container: {
            paddingHorizontal: 15,
            paddingVertical: 10,
        },
        cardContainer: {
            backgroundColor: COLOR.WHITE,
            elevation: 1,
            shadowColor: COLOR.BLACK,
            marginVertical: 10,
            height: 80,
            borderRadius: 10,
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
        },
        cardImage: {
            height: 80,
            width: 80,
        },
        cardTextContainer: {
            marginLeft: 10,
        },
        cardName: {
            fontSize: 16,
            color: COLOR.DARKBLUE,
            fontWeight: 'bold',
        },
        cardDetails: {
            fontSize: 16,
            color:COLOR.GRAY
        },
        modalContainer: {
            height: Screen_Height * 0.5,
            backgroundColor: COLOR.WHITE,
            borderRadius: 20,
            elevation: 2,
            paddingHorizontal: 10,
            paddingVertical: 10,
        },
        closeIcon: {
            alignSelf: 'flex-end',
        },
        modalContentContainer: {
            height: Screen_Height * 0.44,
            justifyContent: 'center',
            alignItems: 'center',
        },
        Innercontainer: {
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%',
            justifyContent: 'space-around',
            height: 100,
            marginVertical: 10,
        },
        iconContainer: {
            justifyContent: 'center',
            alignItems: 'center',
        },
        separator: {
            width: 2,
            height: 60,
            backgroundColor:COLOR.GRAY,
        },
        buttonContainer: {
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: COLOR.GREEN,
            width: 150,
            height: 40,
            borderRadius: 10,
            flexDirection: 'row',
            gap: 10,
        },
        buttonText: {
            color: COLOR.WHITE,
            fontWeight: 'bold',
        },
        IconText:{ fontSize: 16, color: COLOR.BLACK, marginVertical: 5 }
    });

    return styles;
};
