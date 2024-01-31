import { Button, Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Modal from "react-native-modal";
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
const AdminDetailCard = ({ navigation }) => {
    const AdminList = [

        {
            name: "Vimal",
            position:"Chairman",
            address: "Block A-1",
            society: "Sky Town",
            img: require('../assets/userImage.png')

        },
        {
            name: "Alice",
            position:"Secretary",
            address: "Block B-2",
            society: "Sky Town",
            img: require('../assets/userImage.png')
            
        },
        {
            name: "Bob",
            position:"Treasurer",
            address: "Block C-3",
            society: "Sky Town",
            img: require('../assets/userImage.png')


        },
    ];

    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };


    return (
        <View style={{ paddingHorizontal: 15, paddingVertical: 10 }}>
            <FlatList
                data={AdminList}
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
                                <Text style={{ fontSize: 16 }}>{item.position}</Text>
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

export default AdminDetailCard

const styles = StyleSheet.create({})