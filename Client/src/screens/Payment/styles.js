import { StyleSheet } from 'react-native';
import { COLOR_DARK, COLOR_LIGHT } from '../../constants/Color';
import { Screen_Height, Screen_Width } from '../../constants/Constants';


export const STYLES = theme => {
    const COLOR = theme == 1 ? COLOR_DARK : COLOR_LIGHT;

    const styles = StyleSheet.create({
        container:{
            height: Screen_Height, 
            paddingBottom: 40 
        },
        header: {
            paddingVertical: 10,
            paddingHorizontal: 15,
            flexDirection: 'row',
            gap: 20,
          },
          headerText: {
            color: '#000',
            fontSize: 20,
            fontWeight: 'bold',
          },
          paymentContainer: {
            backgroundColor: COLOR.WHITE,
            justifyContent: 'space-between',
            height: Screen_Height * 0.2,
            borderRadius: 5,
            marginHorizontal: 20,
            marginVertical: 10,
            width: Screen_Width * 0.9,
            elevation: 3,
            shadowColor: COLOR.BLACK,
          },
          paymentHeader: {
            flexDirection: 'row',
            width: '100%',
            paddingHorizontal: 15,
            height: 40,
            paddingVertical: 10,
            borderStyle: 'dotted',
            borderBottomWidth: 1,
          },
          paymentHeaderText: {
            fontWeight: 'bold',
            color: COLOR.DARKBLUE,
          },
          paymentDetails: {
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
            paddingHorizontal: 15,
          },
          priceText: {
            fontWeight: 'bold',
            color: COLOR.DARKBLUE,
            marginBottom: 10,
          },
          dateText: {
            color: COLOR.DARKBLUE,
          },
          PayButton:{justifyContent:'center',alignItems:'center'},
          payNowText: {
            color: COLOR.DARKBLUE,
            fontWeight: '600',
          },
          newLabel: {
            backgroundColor: COLOR.DARKBLUE,
            height: 30,
            borderRadius: 5,
            width: 70,
            justifyContent: 'center',
            alignItems: 'center',
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
            position: 'absolute',
            right: 0,
          },
          newLabelText: {
            color: COLOR.WHITE,
          },
          paidLabel: {
            flexDirection: 'row',
            backgroundColor: COLOR.GREEN,
            width: '100%',
            justifyContent: 'center',
            paddingHorizontal: 15,
            height: 40,
            paddingVertical: 10,
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
            borderBottomLeftRadius: 5,
            borderBottomRightRadius: 5,
          },
          paidLabelText: {
            fontWeight: 'bold',
            color: COLOR.WHITE,
          },
    });

    return styles;
};
