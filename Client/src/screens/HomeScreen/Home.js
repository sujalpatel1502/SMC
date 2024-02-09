import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Dimensions,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {useDispatch, useSelector} from 'react-redux';
import {COLOR_DARK, COLOR_LIGHT} from '../../constants/Color';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {STYLES} from './styles';
import {Announcement, Credit, Family, UserImage} from '../../constants/Icon';
import {Screen_Width} from '../../constants/Constants';
import {getData} from '../../Service/api';
import {name} from '../../redux/action';
const Home = ({navigation}) => {
  const theme = useSelector(state => state.ThemeReducer);
  const COLOR = theme == 1 ? COLOR_DARK : COLOR_LIGHT;
  const styles = STYLES(theme);

  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef(null);
  const dispatch = useDispatch();

  const userName = useSelector(state => state.dataReducer);

  const noticeData = [
    {
      title: 'NOTICE 1',
      text: "New year gathering in Sky society's hall on 6th December",
      imageSource: Family,
    },
    {
      title: 'NOTICE 1',
      text: "New year gathering in Sky society's hall on 6th December",
      imageSource: Family,
    },
    {
      title: 'NOTICE 1',
      text: "New year gathering in Sky society's hall on 6th December",
      imageSource: Family,
    },
    {
      title: 'NOTICE 1',
      text: "New year gathering in Sky society's hall on 6th December",
      imageSource: Family,
    },
    // Add more notice cards here
  ];



  const handleDotPress = index => {
    flatListRef.current.scrollToIndex({index, animated: true});
    setActiveIndex(index);
  };
  return (
    <ScrollView>
      {
        !userName?.userData ? <ActivityIndicator/>:
        <View>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.userInfo}>
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Image source={UserImage} style={styles.userImage} />
            </TouchableOpacity>
            <View>
              <Text style={styles.userName}>Hi {userName?.userData?.name}</Text>
              <Text style={styles.userDetails}>{ userName?.userData?.wing?.toUpperCase()} - {userName?.userData?.flatNumber} | Sky Society</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.notificationIcon}>
            <Feather name="bell" size={26} color={COLOR.BLACK} />
          </TouchableOpacity>
        </View>

        {/* Notice Card */}
        <FlatList
          ref={flatListRef}
          data={noticeData}
          horizontal
          pagingEnabled
          bounces
          alwaysBounceHorizontal
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={event => {
            const newIndex = Math.round(
              event.nativeEvent.contentOffset.x / Screen_Width,
            );
            setActiveIndex(newIndex);
          }}
          renderItem={({item}) => {
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
                <Image
                  resizeMode="cover"
                  source={item.imageSource}
                  style={styles.noticeImage}
                />
              </View>
            );
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
                {
                  backgroundColor:
                    index === activeIndex ? COLOR.DARKBLUE : COLOR.OFF_WHITE,
                },
              ]}
            />
          ))}
        </View>
        {/* Community Title */}
        <Text style={styles.communityTitle}>Community</Text>

        {/* Cards */}
        <View style={styles.cardRow}>
          <TouchableOpacity
            style={styles.cardContainer}
            onPress={() => navigation.navigate('MembersStack')}>
            <Text style={styles.cardTitle}>Members</Text>
            <Text style={styles.cardDescription}>Connect society member</Text>
            <Image
              resizeMode="contain"
              source={Family}
              style={styles.cardImage}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.cardContainer}
            onPress={() => navigation.navigate('VisitorStack')}>
            <Text style={styles.cardTitle}>Visitors</Text>
            <Text style={styles.cardDescription}>Manage visitors entry</Text>
            <Image
              resizeMode="contain"
              source={Family}
              style={styles.cardImage}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.cardRow}>
          <TouchableOpacity
            style={styles.cardContainer}
            onPress={() => navigation.navigate('NoticeStack')}>
            <Text style={styles.cardTitle}>Notice Board</Text>
            <Text style={styles.cardDescription}>
              Society announcement & event notice
            </Text>
            <Image
              resizeMode="contain"
              source={Announcement}
              style={styles.cardImage}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.cardContainer}
            onPress={() => navigation.navigate('PaymentStack')}>
            <Text style={styles.cardTitle}>Payment</Text>
            <Text style={styles.cardDescription}>
              Direct payment of society due
            </Text>
            <Image
              resizeMode="contain"
              source={Credit}
              style={styles.cardImage}
            />
          </TouchableOpacity>
        </View>
      </View>
      }
  
    </ScrollView>
  );
};

export default Home;
