import { Dimensions, Platform } from "react-native";
import DeviceInfo from 'react-native-device-info';

export const Screen_Width = Dimensions.get('window').width;
export const Screen_Height = Platform.OS == 'ios' ? Dimensions.get('window').height : Dimensions.get('window').height + 45;

const Static = { width: 1042, height: 1366 }
const Ratio = (Screen_Width) / (Static.width);
export const Scale = DeviceInfo.isTablet() ? 2 * Ratio : 1;
export const BottomTabHeight = Platform.OS == 'ios' ? 95 * Scale : 90 * Scale;