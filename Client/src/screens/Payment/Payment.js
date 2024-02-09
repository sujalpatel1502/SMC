import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {STYLES} from './styles';
import {COLOR_DARK, COLOR_LIGHT} from '../../constants/Color';
import {useSelector} from 'react-redux';
import {Screen_Height, Screen_Width} from '../../constants/Constants';
import RNFetchBlob from 'rn-fetch-blob';
import {Platform, PermissionsAndroid} from 'react-native';
import { PDFDocument, rgb } from 'react-native-pdf-lib';


const Payment = ({navigation}) => {
  const generatePDF = async () => {
    const pdfDoc = await PDFDocument.create();
    // Add a page to the PDF
    const page = pdfDoc.addPage([300, 400]);
    // Draw text on the page
    page.drawText('Hello, React Native PDF!', {
      x: 50,
      y: 350,
      size: 30,
      color: rgb(0, 0, 0),
    });
    // Save the PDF to a file or return it as a base64 string
    const pdfBytes = await pdfDoc.save();
    
    // For example, save the PDF to a file
    const pdfPath = `${RNFS.DocumentDirectoryPath}/example.pdf`;
    await RNFS.writeFile(pdfPath, pdfBytes, 'base64');
    console.log(`PDF saved to: ${pdfPath}`);
  };
   const getDownloadPermissionAndroid = async () => {
    console.log("inside permission");
    try {
      console.log("inside permission 2");
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'File Download Permission',
          message: 'Your permission is required to save Files to your device',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      console.log("inside permission 3",granted);
      if (granted === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) return true;
      console.log("inside permission 4");
    } catch (err) {
      console.log("denied permission 3");
      console.log('err', err);
    }
  }
   const downloadFile = async url => {
    console.log("inside the download   of fileeee");
    // Get the app's cache directory
    const {config, fs} = RNFetchBlob;
    const cacheDir = fs.dirs.DownloadDir;
  
    // Generate a unique filename for the downloaded image
    const filename = url.split('/').pop();
    const imagePath = `${cacheDir}/${filename}`;
  
    try {
      // Download the file and save it to the cache directory
      const configOptions = Platform.select({
        ios: {
          fileCache: true,
          path: imagePath,
          appendExt: filename.split('.').pop(),
        },
        android: {
          fileCache: true,
          path: imagePath,
          appendExt: filename.split('.').pop(),
          addAndroidDownloads: {
            // Related to the Android only
            useDownloadManager: true,
            notification: true,
            path: imagePath,
            description: 'File',
          },
        },
      });
  
      const response = await RNFetchBlob.config(configOptions).fetch('GET', url);
  
      // Return the path to the downloaded file
      return response;
    } catch (error) {
      console.error("error in downloading fileee",error);
      return null;
    }
  };
  const theme = useSelector(state => state.ThemeReducer);
  const COLOR = theme == 1 ? COLOR_DARK : COLOR_LIGHT;
  const styles = STYLES(theme);
  const PaymentData = [
    {
      Price: '$15.00',
      Date: '2 December, 06:30pm',
    },
    {
      Price: '$50.00',
      Date: '6 December, 06:30pm',
    },
    {
      Price: '$150.00',
      Date: '9 December, 06:30pm',
    },
    {
      Price: '$155.00',
      Date: '5 December, 06:30pm',
    },
    {
      Price: '$150.00',
      Date: '9 December, 06:30pm',
    },
    {
      Price: '$155.00',
      Date: '5 December, 06:30pm',
    },

    // Add more notice cards here
  ];
  const fileUrl = 'https://www.pdf995.com/samples/pdf.pdf';
  var watercharge=200;
  var maintenace=500;
  var parkingcharge=800;
  var total=watercharge+maintenace+parkingcharge;
  const downloadPdf=async()=>{

    if (Platform.OS === 'android') {
      console.log("insideeeee");
      getDownloadPermissionAndroid().then(granted => {
        console.log("inside the download grant",granted);
        if (granted) {
          console.log("granttt",granted);
          downloadFile(fileUrl);
        }
      });
    } else {
      console.log("not granted");
      downloadFile(fileUrl).then(res => {
          RNFetchBlob.ios.previewDocument(res.path());
      });
    }
  }
  

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={26} color={COLOR.BLACK} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Payment</Text>
      </View>
      <TouchableOpacity onPress={()=>downloadPdf()}>
                  <Text style={styles.paymentHeaderText}>
                    Download
                  </Text>
                </TouchableOpacity>

                
                
      <FlatList
        showsVerticalScrollIndicator={false}
        data={PaymentData}
        renderItem={({ item }) => {
          return (
            <View style={styles.paymentContainer}>
              <View style={styles.paymentHeader}>
                
                <Text style={styles.paymentHeaderText}>
                  Maintenance charge June 2022
                </Text>
              </View>
              <View style={styles.paymentDetails}>
                <View>
                  <Text style={styles.priceText}>{item.Price}</Text>
                  <Text style={styles.dateText}>{item.Date}</Text>
                </View>
                <TouchableOpacity style={styles.PayButton}>
                  <FontAwesome name="money" size={20} color={COLOR.BLACK} />
                  <Text style={styles.payNowText}>Pay now</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.newLabel}>
                <Text style={styles.newLabelText}>New</Text>
              </View>
              <View style={styles.paidLabel}>
                <Text style={styles.paidLabelText}>Paid</Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default Payment;
