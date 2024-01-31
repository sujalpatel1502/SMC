import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';
import BottomTabView, { TopNavigation } from '../../navigation/TopTab';


const SocietyMembers = ({ navigation }) => {
    return (

        <>
            <View style={{ paddingVertical: 20, paddingHorizontal: 15, flexDirection: 'row', gap: 20 }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <AntDesign name="arrowleft" size={26} color={'#000'} />
                </TouchableOpacity>

                <Text style={{ color: '#000', fontSize: 20, fontWeight: 'bold' }}>Members</Text>
            </View>
            <TopNavigation />
        </>
    )
}


export default SocietyMembers

const styles = StyleSheet.create({})