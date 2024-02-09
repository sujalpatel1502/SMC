import { StyleSheet } from 'react-native';
import { COLOR_DARK, COLOR_LIGHT } from '../../constants/Color';
import { Screen_Height, Screen_Width } from '../../constants/Constants';


export const STYLES = theme => {
    const COLOR = theme == 1 ? COLOR_DARK : COLOR_LIGHT;

    const styles = StyleSheet.create({
        container: {
            flex: 1,
          },
          backgroundImage: {
            height: '100%',
            width: '100%',
          },
          contentContainer: {
            height: Screen_Height * 0.45,
            justifyContent: 'center',
            alignItems: 'center',
          },
          title: {
            color:COLOR.BLUE_SHADE,
            fontSize: 26,
            marginTop: 10,
          },
          divider: {
            flexDirection: 'row',
            gap: 10,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 5,
          },
          dividerLine: {
            width: 50,
            backgroundColor:COLOR.BLUE_SHADE,
            height: 2,
            borderRadius: 5,
          },
          subtitle: {
            color:COLOR.BLUE_SHADE,
            fontSize: 18,
          },
    }
       );

    return styles;
};
