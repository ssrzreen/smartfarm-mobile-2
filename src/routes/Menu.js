import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'
import HomeIcon from '../assets/icons/homeIcon.png'
import HistoryIcon from '../assets/icons/historyIcon.png'
import ProfileIcon from '../assets/icons/profileIcon.png'
import SettingIcon from '../assets/icons/settingIcon.png'
import QrIcon from '../assets/icons/qrIcon.png'



const Menu = ({ navigation }) => {
  return (
    
    <View style={styles.menuContainer}>

      <TouchableOpacity
        // style={styles.buttonStyle}
        onPress={() => navigation.navigate("HomePage")}>
        <Image
          source={HomeIcon}
          resizeMode="contain"
          style={{
            width: 40,
            height: 40,
            // tintColor: focused ? '#748c94' : '#FFFFFF'
          }}
        />
        <Text style={{ fontSize: 15 }}>Home</Text>

      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate("History")}>
        <Image
          source={HistoryIcon}
          resizeMode="contain"
          style={{
            width: 40,
            height: 40,
            // tintColor: focused ? '#748c94' : '#FFFFFF'
          }}
        />
        <Text>History</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          top: -30,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => navigation.navigate('Scanner')
        }
      >
        <View style={{
          width: 80,
          height: 80,
          borderRadius: 60,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#FFFFFF',
        }}>

          <View style={{
            width: 70,
            height: 70,
            borderRadius: 35,
            backgroundColor: '#008807',
          }}>
            <Image
              source={QrIcon}
              resizeMode="contain"
              style={{
                width: 70,
                height: 45,
                marginHorizontal: 'center',
                marginVertical: 10,
                tintColor: '#FFFFFF'
              }}
            />
          </View>
        </View>

      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate("Profile")}>
        <Image
          source={ProfileIcon}
          resizeMode="contain"
          style={{
            width: 40,
            height: 40,
            // tintColor: focused ? '#748c94' : '#FFFFFF'
          }}
        />
        <Text>Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate("Setting")}>
        <Image
          source={SettingIcon}
          resizeMode="contain"
          style={{
            width: 40,
            height: 40,
            // tintColor: focused ? '#748c94' : '#FFFFFF'
          }}
        />
        <Text>Setting</Text>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  menuContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'green',
    justifyContent: 'space-evenly'
  },
})
export default Menu