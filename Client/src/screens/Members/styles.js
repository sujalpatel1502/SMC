import { StyleSheet } from 'react-native';
import { COLOR_DARK, COLOR_LIGHT } from '../../constants/Color';

export const STYLES = theme => {
    const COLOR = theme == 1 ? COLOR_DARK : COLOR_LIGHT;

    const styles = StyleSheet.create({
        container: { paddingTop:20, paddingHorizontal: 15, flexDirection: 'row', gap: 20 },
        HeadText:{ color:COLOR.BLACK, fontSize: 20, fontWeight: 'bold' }
       
    });

    return styles;
};
