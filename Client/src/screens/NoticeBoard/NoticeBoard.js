import { Dimensions, StyleSheet, Text, View, TouchableOpacity, FlatList, Image } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { STYLES } from './styles';
import { COLOR_DARK, COLOR_LIGHT } from '../../constants/Color';
import { useSelector } from 'react-redux';
import { Screen_Height } from '../../constants/Constants';

const Notice = ({ navigation }) => {
    const theme = useSelector(state => state.ThemeReducer);
    const COLOR = theme == 1 ? COLOR_DARK : COLOR_LIGHT;
    const styles = STYLES(theme);
    const noticeData = [
        {
            title: 'NOTICE 1',
            text: 'New year gathering in Sky society\'s hall on 6th December',
            imageSource: require('../../assets/family.png'),
        },
        {
            title: 'NOTICE 1',
            text: 'New year gathering in Sky society\'s hall on 6th December',
            imageSource: require('../../assets/family.png'),
        },
        {
            title: 'NOTICE 1',
            text: 'New year gathering in Sky society\'s hall on 6th December',
            imageSource: require('../../assets/family.png'),
        },
        {
            title: 'NOTICE 1',
            text: 'New year gathering in Sky society\'s hall on 6th December',
            imageSource: require('../../assets/family.png'),
        },
        {
            title: 'NOTICE 1',
            text: 'New year gathering in Sky society\'s hall on 6th December',
            imageSource: require('../../assets/family.png'),
        },
        {
            title: 'NOTICE 1',
            text: 'New year gathering in Sky society\'s hall on 6th December',
            imageSource: require('../../assets/family.png'),
        },
        {
            title: 'NOTICE 1',
            text: 'New year gathering in Sky society\'s hall on 6th December',
            imageSource: require('../../assets/family.png'),
        },
        {
            title: 'NOTICE 1',
            text: 'New year gathering in Sky society\'s hall on 6th December',
            imageSource: require('../../assets/family.png'),
        },
        {
            title: 'NOTICE 1',
            text: 'New year gathering in Sky society\'s hall on 6th December',
            imageSource: require('../../assets/family.png'),
        },
        {
            title: 'NOTICE 1',
            text: 'New year gathering in Sky society\'s hall on 6th December',
            imageSource: require('../../assets/family.png'),
        },
        {
            title: 'NOTICE 1',
            text: 'New year gathering in Sky society\'s hall on 6th December',
            imageSource: require('../../assets/family.png'),
        },
        {
            title: 'NOTICE 1',
            text: 'New year gathering in Sky society\'s hall on 6th December',
            imageSource: require('../../assets/family.png'),
        },
        // Add more notice cards here
    ];

    

    return (
        <View style={styles.container}>

            <View style={styles.BackButton}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <AntDesign name="arrowleft" size={26} color={COLOR.BLACK} />
                </TouchableOpacity>

                <Text style={styles.title}>Notice Board</Text>
            </View>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={noticeData}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.noticeCard}>
                            <View style={styles.noticeLeft}>
                                <View style={styles.noticeLine} />
                                <View style={styles.noticeContent}>
                                    <Text style={styles.noticeTitle}>{item.title}</Text>
                                    <Text style={styles.noticeText}>{item.text}</Text>
                                </View>
                            </View>
                            <View style={styles.noticeBadge}>
                                <Text style={styles.badgeText}>New</Text>
                            </View>
                            <View style={styles.DateArea}>
                                <Text>Post by : Admin</Text>
                                <Text>20 DEC 05 : 30 PM</Text>
                            </View>
                        </View>
                    )
                }}

            />
        </View>

    )
}

export default Notice

