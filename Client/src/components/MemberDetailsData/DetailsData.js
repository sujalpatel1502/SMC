import {
    Button,
    Dimensions,
    FlatList,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import React, { useState } from 'react';
import Modal from 'react-native-modal';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLOR_DARK, COLOR_LIGHT } from '../../constants/Color';
import { useSelector } from 'react-redux';
import { Screen_Height } from '../../constants/Constants';
import { STYLES } from './styles';
import { UserImage } from '../../constants/Icon';
import call from 'react-native-phone-call'

const DetailsCard = ({ navigation }) => {
    const theme = useSelector(state => state.ThemeReducer);
    const COLOR = theme == 1 ? COLOR_DARK : COLOR_LIGHT;
    const styles = STYLES(theme);
    const triggerCall = ()=>{
        const args = {
            number: '8788338061', // String value with the number to call
            prompt: true, // Optional boolean property. Determines if the user should be prompted prior to the call 
            skipCanOpen: true // Skip the canOpenURL check
          }
          
          call(args).catch(console.error)
    }
    
    const memberlist = [
        {
            name: 'Vimal',
            address: 'Block A-1',
            society: 'Sky Town',
            img: UserImage,
        },
        {
            name: 'Alice',
            address: 'Block B-2',
            society: 'Sky Town',
            img: UserImage,
        },
        {
            name: 'Bob',
            address: 'Block C-3',
            society: 'Sky Town',
            img: UserImage,
        },
        {
            name: 'Charlie',
            address: 'Block D-4',
            society: 'Sky Town',
            img: UserImage,
        },
        {
            name: 'David',
            address: 'Block E-5',
            society: 'Sky Town',
            img: UserImage,
        },
        {
            name: 'Eva',
            address: 'Block F-6',
            society: 'Sky Town',
            img: UserImage,
        },
        {
            name: 'Frank',
            address: 'Block G-7',
            society: 'Sky Town',
            img: UserImage,
        },
        {
            name: 'Grace',
            address: 'Block H-8',
            society: 'Sky Town',
            img: UserImage,
        },
        {
            name: 'Harry',
            address: 'Block I-9',
            society: 'Sky Town',
            img: UserImage,
        },
        {
            name: 'Ivy',
            address: 'Block J-10',
            society: 'Sky Town',
            img: UserImage,
        },
        {
            name: 'Jack',
            address: 'Block K-11',
            society: 'Sky Town',
            img: UserImage,
        },
        {
            name: 'Kim',
            address: 'Block L-12',
            society: 'Sky Town',
            img: UserImage,
        },
        {
            name: 'Leo',
            address: 'Block M-13',
            society: 'Sky Town',
            img: UserImage,
        },
    ];

    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={memberlist}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                            onPress={toggleModal}
                            style={styles.cardContainer}>
                            <View>
                                <Image source={item.img} style={styles.cardImage} />
                            </View>
                            <View>
                                <Text style={styles.cardName}>{item.name}</Text>
                                <Text style={styles.cardDetails}>
                                    {item.address} | {item.society}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    );
                }}
            />
            <Modal isVisible={isModalVisible}>
                <View style={styles.modalContainer}>
                    <AntDesign
                        name="close"
                        style={styles.closeIcon}
                        size={26}
                        color={COLOR.BLACK}
                        onPress={toggleModal}
                    />
                    <View style={styles.modalContentContainer}>
                        <Image
                            source={UserImage}
                            style={styles.cardImage}
                        />
                        <Text style={styles.cardName}>Manav Shah</Text>
                        <Text>+91 1234567890</Text>
                        <View style={styles.Innercontainer}>
                            <View style={styles.iconContainer}>
            
                                <FontAwesome name="building" size={26} color={COLOR.BLACK} />
                                <Text style={styles.IconText}>
                                    Sky Town
                                </Text>
                            </View>

                            <View style={styles.separator} />

                            <View style={styles.iconContainer}>
                                <AntDesign name="home" size={26} color={COLOR.BLACK} />
                                <Text style={styles.IconText}>
                                    Flat no: 512{' '}
                                </Text>
                            </View>

                            <View style={styles.separator} />

                            <View style={styles.iconContainer}>
                                <FontAwesome5 name="laptop-house" size={26} color={COLOR.BLACK} />
                                <Text style={styles.IconText}>
                                    Block no: A
                                </Text>
                            </View>

                        </View>
                        <View style={styles.ButtonMainContainer}>
                        <TouchableOpacity style={styles.CallbuttonContainer} onPress={triggerCall}>
                            <Ionicons
                                name="call-outline"
                                size={20}
                                color={COLOR.WHITE}
                            />
                            <Text style={styles.buttonText}>Call</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonContainer}>
                            <Ionicons
                                name="chatbox-ellipses-outline"
                                size={20}
                                color={COLOR.WHITE}
                            />
                            <Text style={styles.buttonText}>Chat</Text>
                        </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default DetailsCard;
