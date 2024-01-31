import React, { useRef, useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet, Dimensions, FlatList } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { useSelector } from 'react-redux';

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
            <Image resizeMode='cover' source={imageSource} style={styles.noticeImage} />
        </View>

    );
};

const Home = ({ navigation }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const flatListRef = useRef(null);
    const userName = useSelector(state=>state.dataReducer)
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
        // Add more notice cards here
    ];

    const renderItem = ({ item, index }) => {
        return <NoticeCard title={item.title} text={item.text} imageSource={item.imageSource} />;
    };

    const handleDotPress = (index) => {
        flatListRef.current.scrollToIndex({ index, animated: true });
        setActiveIndex(index);
    };
    return (
        <ScrollView>
            <View style={styles.container}>
                {/* Header */}
                <View style={styles.header}>
                    <View style={styles.userInfo}>
                        <Image source={require('../../assets/userImage.png')} style={styles.userImage} />
                        <View>
                            <Text style={styles.userName}>Hi {userName?.name}</Text>
                            <Text style={styles.userDetails}>A - 420 | Sky Society</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.notificationIcon}>
                        <Feather name="bell" size={26} color={'#000'} />
                    </TouchableOpacity>
                </View>

                {/* Notice Card */}
                <FlatList
                    ref={flatListRef}
                    data={noticeData}
                    renderItem={renderItem}
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    onMomentumScrollEnd={(event) => {
                        const newIndex = Math.round(event.nativeEvent.contentOffset.x / windowWidth);
                        setActiveIndex(newIndex);
                    }}
                />

                {/* Pagination Dots */}
                <View style={styles.paginationDots}>
                    {noticeData.map((_, index) => (
                        <TouchableOpacity
                            key={index}
                            onPress={() => handleDotPress(index)}
                            style={[
                                styles.paginationDot,
                                { backgroundColor: index === activeIndex ? '#0F1035' : '#D0D0D0' },
                            ]}
                        />
                    ))}
                </View>
                {/* Community Title */}
                <Text style={styles.communityTitle}>Community</Text>

                {/* Cards */}
                <View style={styles.cardRow}>

                    <TouchableOpacity style={styles.cardContainer} onPress={() => navigation.navigate('MembersStack')}>
                        <Text style={styles.cardTitle}>Members</Text>
                        <Text style={styles.cardDescription}>Connect society member</Text>
                        <Image resizeMode="contain" source={require('../../assets/family.png')} style={styles.cardImage} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cardContainer} onPress={() => navigation.navigate('VisitorStack')}>
                        <Text style={styles.cardTitle}>Visitors</Text>
                        <Text style={styles.cardDescription}>Manage visitors entry</Text>
                        <Image resizeMode="contain" source={require('../../assets/family.png')} style={styles.cardImage} />
                    </TouchableOpacity>


                </View>

                <View style={styles.cardRow}>
                    <TouchableOpacity style={styles.cardContainer} onPress={() => navigation.navigate('NoticeStack')}>
                        <Text style={styles.cardTitle}>Notice Board</Text>
                        <Text style={styles.cardDescription}>Society announcement & event notice</Text>
                        <Image resizeMode="contain" source={require('../../assets/announcement.png')} style={styles.cardImage} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cardContainer} onPress={() => navigation.navigate('PaymentStack')}>
                        <Text style={styles.cardTitle}>Payment</Text>
                        <Text style={styles.cardDescription}>Direct payment of society due</Text>
                        <Image resizeMode="contain" source={require('../../assets/credit.png')} style={styles.cardImage} />
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
};

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
        backgroundColor: '#7FC7D9',
        justifyContent: 'space-between',
        height: windowHeight * 0.2,
        borderRadius: 5,
        flexDirection: 'row',
        marginHorizontal: 20,
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

export default Home;
