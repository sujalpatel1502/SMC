import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { UserImage } from '../constants/Icon';
import { COLOR_DARK, COLOR_LIGHT } from '../constants/Color';
import { useSelector } from 'react-redux';

const CustomDrawer = props => {
  const theme = useSelector(state => state.ThemeReducer);
  const COLOR = theme == 1 ? COLOR_DARK : COLOR_LIGHT;
  const userName = useSelector(state => state.dataReducer);

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props} contentContainerStyle={{ backgroundColor: COLOR.DARKBLUE }}>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Image source={UserImage} style={{ height: 80, width: 80, borderRadius: 40 }} />
          <Text style={{ color: COLOR.WHITE, fontSize: 18, marginVertical: 10 }}>{userName?.userData?.name}</Text>
        </View>
        <View style={{ flex: 1, backgroundColor: COLOR.WHITE, paddingTop: 10 }}>
          <DrawerItemList {...props} />
          <View style={{ marginLeft: 16 }}>
            <Text style={{ color: COLOR.GRAY, fontSize: 16 }}>Profile</Text>
            <DrawerItem
              label="Edit Profile"
              onPress={() => props.navigation.navigate('EditProfile')}
            />
            <DrawerItem
              label="User Profile"
              onPress={() => props.navigation.navigate('UserProfile')}
            />
          </View>
        </View>
      </DrawerContentScrollView>
      <View style={{ padding: 20, borderTopWidth: 1, borderTopColor: COLOR.LIGHTGRAY }}>
        <TouchableOpacity onPress={() => { }} style={{ paddingVertical: 15 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Ionicons name="share-social-outline" size={22} />
            <Text style={{ fontSize: 15, fontFamily: 'Roboto-Medium', marginLeft: 5 }}>Tell a Friend</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { }} style={{ paddingVertical: 15 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Ionicons name="exit-outline" size={22} />
            <Text style={{ fontSize: 15, fontFamily: 'Roboto-Medium', marginLeft: 5 }}>Sign Out</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;
