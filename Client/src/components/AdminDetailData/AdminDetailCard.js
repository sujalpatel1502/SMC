import { Button, Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Modal from "react-native-modal";
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { UserImage } from '../../constants/Icon';
import { STYLES } from './styles';
import { useSelector } from 'react-redux';
import { COLOR_DARK, COLOR_LIGHT } from '../../constants/Color';

const AdminDetailCard = ({ navigation }) => {
    const theme = useSelector(state => state.ThemeReducer);
    const COLOR = theme == 1 ? COLOR_DARK : COLOR_LIGHT;
    const styles = STYLES(theme);

    const AdminList = [

        {
            name: "Vimal",
            position:"Chairman",
            address: "Block A-1",
            society: "Sky Town",
            img: UserImage

        },
        {
            name: "Alice",
            position:"Secretary",
            address: "Block B-2",
            society: "Sky Town",
            img: UserImage
            
        },
        {
            name: "Bob",
            position:"Treasurer",
            address: "Block C-3",
            society: "Sky Town",
            img: UserImage


        },
    ];

    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };


    return (
        <View style={styles.container}>
            <FlatList
                data={AdminList}
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
            </Modal>
        </View>

    )
}

export default AdminDetailCard

const styles = StyleSheet.create({})