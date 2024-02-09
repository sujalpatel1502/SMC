import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';
import BottomTabView, { TopNavigation } from '../../navigation/TopTab';
import { useSelector } from 'react-redux';
import { COLOR_DARK, COLOR_LIGHT } from '../../constants/Color';
import { STYLES } from './styles';


const SocietyMembers = ({ navigation }) => {
    const theme = useSelector(state => state.ThemeReducer);
    const COLOR = theme == 1 ? COLOR_DARK : COLOR_LIGHT;
    const styles = STYLES(theme);
    return (

        <>
            <View style={styles.container}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <AntDesign name="arrowleft" size={26} color={COLOR.BLACK} />
                </TouchableOpacity>

                <Text style={styles.HeadText}>Members</Text>
            </View>
            <TopNavigation />
        </>
    )
}


export default SocietyMembers

const styles = StyleSheet.create({})