import { Button, Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Modal from "react-native-modal";
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
const DetailsCard = ({ navigation }) => {
    const memberlist = [

        {
            name: "Vimal",
            address: "Block A-1",
            society: "Sky Town",
            img: require('../assets/userImage.png')

        },
        {
            name: "Alice",
            address: "Block B-2",
            society: "Sky Town",
            img: require('../assets/userImage.png')
            
        },
        {
            name: "Bob",
            address: "Block C-3",
            society: "Sky Town",
            img: require('../assets/userImage.png')


        },
        {
            name: "Charlie",
            address: "Block D-4",
            society: "Sky Town",
            img: require('../assets/userImage.png')
        },
        {
            name: "David",
            address: "Block E-5",
            society: "Sky Town",
            img: require('../assets/userImage.png')

        },
        {
            name: "Eva",
            address: "Block F-6",
            society: "Sky Town",
            img: require('../assets/userImage.png')


        },
        {
            name: "Frank",
            address: "Block G-7",
            society: "Sky Town",
            img: require('../assets/userImage.png')


        },
        {
            name: "Grace",
            address: "Block H-8",
            society: "Sky Town",
            img: require('../assets/userImage.png')

        },
        {
            name: "Harry",
            address: "Block I-9",
            society: "Sky Town",
            img: require('../assets/userImage.png')

        },
        {
            name: "Ivy",
            address: "Block J-10",
            society: "Sky Town",
            img: require('../assets/userImage.png')

        },
        {
            name: "Jack",
            address: "Block K-11",
            society: "Sky Town",
            img: require('../assets/userImage.png')

        },
        {
            name: "Kim",
            address: "Block L-12",
            society: "Sky Town",
            img: require('../assets/userImage.png')

        },
        {
            name: "Leo",
            address: "Block M-13",
            society: "Sky Town",
            img: require('../assets/userImage.png')

        },
        // {
        //     name: "Mia",
        //     address: "Block N-14",
        //     society: "Sky Town"
        // },
        // {
        //     name: "Nathan",
        //     address: "Block O-15",
        //     society: "Sky Town"
        // },
        // {
        //     name: "Olivia",
        //     address: "Block P-16",
        //     society: "Sky Town"
        // },
        // {
        //     name: "Peter",
        //     address: "Block Q-17",
        //     society: "Sky Town"
        // },
        // {
        //     name: "Quinn",
        //     address: "Block R-18",
        //     society: "Sky Town"
        // },
        // {
        //     name: "Ryan",
        //     address: "Block S-19",
        //     society: "Sky Town"
        // },
        // {
        //     name: "Sara",
        //     address: "Block T-20",
        //     society: "Sky Town"
        // }
    ];

    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };


    return (
        <View style={{ paddingHorizontal: 15, paddingVertical: 10 }}>
            <FlatList
                data={memberlist}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={toggleModal} style={{ backgroundColor: '#fff', elevation: 1, shadowColor: '#000', marginVertical: 10, height: 80, borderRadius: 10, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                            <View>
                                <Image source={item.img} style={{ height: 80, width: 80 }} />
                            </View>
                            <View>
                                <Text style={{
                                    fontSize: 16,
                                    color: '#0F1035',
                                    fontWeight: 'bold',
                                }}>{item.name}</Text>
                                <Text style={{ fontSize: 16 }}>{item.address} | {item.society}</Text>
                            </View>

                        </TouchableOpacity>
                    )
                }}
            />
            <Modal isVisible={isModalVisible}>
                <View style={{ height: windowHeight * 0.5, backgroundColor: '#fff', borderRadius: 20, elevation: 2, paddingHorizontal: 10, paddingVertical: 10 }}>
                    <AntDesign name="close" style={{ alignSelf: 'flex-end' }} size={26} color={'#000'} onPress={toggleModal} />
                    <View style={{ height: windowHeight * 0.44, justifyContent: 'center', alignItems: 'center' }}>
                        <Image source={require('../assets/userImage.png')} style={{ height: 100, width: 100 }} />
                        <Text style={{
                            fontSize: 16,
                            color: '#0F1035',
                            fontWeight: 'bold'
                        }}>Manav Shah</Text>
                        <Text>+91 1234567890</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', justifyContent: 'space-around', height: 100,marginVertical:10 }}>

                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <FontAwesome name="building" size={26} color={'#000'} />
                                <Text style={{
                                    fontSize: 16,
                                    color: '#000',
                                    marginVertical: 5
                                }}>Sky Town</Text>
                            </View>

                            <View style={{ width: 2, height: 60, backgroundColor: 'gray' }} />

                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <AntDesign name="home" size={26} color={'#000'} />
                                <Text style={{
                                    fontSize: 16,
                                    color: '#000',
                                    marginVertical: 5
                                }}>Flat no: 512 </Text>
                            </View>

                            <View style={{ width: 2, height: 60, backgroundColor: 'gray' }} />

                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <FontAwesome5 name="laptop-house" size={26} color={'#000'} />
                                <Text style={{
                                    fontSize: 16,
                                    color: '#000',
                                    marginVertical: 5
                                }}>Block no: A</Text>
                            </View>

                        </View>
                        <TouchableOpacity style={{justifyContent:'center',alignItems:'center',backgroundColor:'#16FF00',width:150,height:40,borderRadius:10,flexDirection:'row',gap:10}} >
                        <Ionicons name="chatbox-ellipses-outline" size={20} color={'#fff'} />
                                <Text style={{color:'#fff',fontWeight:'bold'}}>Chat</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>

    )
}

export default DetailsCard

const styles = StyleSheet.create({})