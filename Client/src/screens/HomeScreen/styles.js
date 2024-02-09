import { StyleSheet } from 'react-native';
import { COLOR_DARK, COLOR_LIGHT } from '../../constants/Color';
import { Screen_Height, Screen_Width } from '../../constants/Constants';

export const STYLES = theme => {
    const COLOR = theme == 1 ? COLOR_DARK : COLOR_LIGHT;

    const styles = StyleSheet.create({
        container: {

        },
        header: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 10,
            marginVertical:10,            
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
            color:COLOR.DARKBLUE ,
            fontWeight: 'bold',
        },
        userDetails: {
            fontSize: 16,
            color:COLOR.GRAY
        },
        notificationIcon: {
            justifyContent: 'center',
            alignItems: 'center',
        },
        noticeCard: {
            backgroundColor: COLOR.LIGHT_BLUE,
            justifyContent: 'space-between',
            height: Screen_Height * 0.2,
            borderRadius: 5,
            flexDirection: 'row',
            marginHorizontal: 20,
            width: Screen_Width * 0.9
        },
        noticeLeft: {
            flexDirection: 'row',
            gap: 10,
        },
        noticeLine: {
            backgroundColor: COLOR.DARKBLUE,
            height: Screen_Height * 0.2,
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
            color: COLOR.DARKBLUE,
            textDecorationLine: 'underline',
            marginBottom: 10,
        },
        noticeText: {
            color: COLOR.DARKBLUE,
        },
        noticeBadge: {
            backgroundColor: COLOR.DARKBLUE,
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
            color: COLOR.WHITE,
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
            color: COLOR.DARKBLUE,
            marginHorizontal: 15,
            fontSize: 16,
            marginVertical: 10,
        },
        cardRow: {
            flexDirection: 'row',
            gap: 10,
            marginHorizontal: 15,
            marginTop: 20,
            justifyContent: 'space-between',
        },
        cardContainer: {
            backgroundColor: COLOR.WHITE,
            height: Screen_Height * 0.2,
            width: Screen_Width * 0.4,
            marginVertical: 10,
            borderRadius: 10,
            paddingHorizontal: 10,
            paddingTop: 10,
        },
        cardTitle: {
            fontWeight: 'bold',
            color: COLOR.DARKBLUE,
            marginBottom: 10,
        },
        cardDescription: {
            marginBottom: 10,
            color:COLOR.GRAY
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

    return styles;
};
