import { Dimensions, StyleSheet, Text, View, TouchableOpacity, FlatList, Image } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
const NoticeCard = ({ title, text, imageSource }) => {
    return (

        <View style={styles.noticeCard}>
            <View style={styles.noticeLeft}>
                <View style={styles.noticeLine} />
                <View style={styles.noticeContent}>
                    <Text style={styles.noticeTitle}>{title}</Text>
                    <Text style={styles.noticeText}>{text}</Text>
                </View>
            </View>
            <View style={styles.noticeBadge}>
                <Text style={styles.badgeText}>New</Text>
            </View>
            <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', borderTopWidth: 1, borderStyle: 'dotted', position: 'absolute', bottom: 1, paddingHorizontal: 15, height: 40, paddingVertical: 10 }}>
                <Text>Post by : Admin</Text>
                <Text>20 DEC 05 : 30 PM</Text>
            </View>
        </View>

    );
};


const Notice = ({ navigation }) => {
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

    const renderItem = ({ item, index }) => {
        return <NoticeCard title={item.title} text={item.text} imageSource={item.imageSource} />;
    };

    return (
        <View style={{height:windowHeight*1}}>

            <View style={{ paddingVertical: 20, paddingHorizontal: 15, flexDirection: 'row', gap: 20 }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <AntDesign name="arrowleft" size={26} color={'#000'} />
                </TouchableOpacity>

                <Text style={{ color: '#000', fontSize: 20, fontWeight: 'bold' }}>Notice Board</Text>
            </View>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={noticeData}
                renderItem={renderItem}

            />
        </View>

    )
}


const styles = StyleSheet.create({
    container: {
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        marginBottom: 20
    },
    userInfo: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5,
    },
    userImage: {
        width: 80,
        height: 80,
    },
    userName: {
        fontSize: 16,
        color: '#0F1035',
        fontWeight: 'bold',
    },
    userDetails: {
        fontSize: 16,
    },
    notificationIcon: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    noticeCard: {
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        height: windowHeight * 0.2,
        borderRadius: 5,
        flexDirection: 'row',
        marginHorizontal: 20,
        marginVertical: 10,
        width: windowWidth * 0.9
    },
    noticeLeft: {
        flexDirection: 'row',
        gap: 10,
    },
    noticeLine: {
        backgroundColor: '#0F1035',
        height: windowHeight * 0.2,
        borderRadius: 5,
        width: 5,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
    },
    noticeContent: {
        width: 200,
        justifyContent: 'center',
    },
    noticeTitle: {
        fontWeight: 'bold',
        color: '#0F1035',
        textDecorationLine: 'underline',
        marginBottom: 10,
    },
    noticeText: {
        color: '#0F1035',
    },
    noticeBadge: {
        backgroundColor: '#0F1035',
        height: 30,
        borderRadius: 5,
        width: 70,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
    },
    badgeText: {
        color: '#fff',
    },
    noticeImage: {
        width: 160,
        height: 80,
        position: 'absolute',
        bottom: -2,
        right: -2,
    },
    communityTitle: {
        fontWeight: 'bold',
        color: '#0F1035',
        marginHorizontal: 15,
        fontSize: 16,
        marginVertical: 10,
    },
    cardRow: {
        flexDirection: 'row',
        gap: 10,
        marginHorizontal: 15,
        marginTop: 30,
        justifyContent: 'space-between',
    },
    cardContainer: {
        backgroundColor: '#fff',
        height: windowHeight * 0.2,
        width: windowWidth * 0.4,
        marginVertical: 10,
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingTop: 10,
    },
    cardTitle: {
        fontWeight: 'bold',
        color: '#0F1035',
        marginBottom: 10,
    },
    cardDescription: {
        marginBottom: 10,
    },
    cardImage: {
        width: 100,
        height: 100,
        position: 'absolute',
        bottom: 1,
        right: -2,
    },
    paginationDots: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
    },
    paginationDot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        marginHorizontal: 5,
    },
});


export default Notice

