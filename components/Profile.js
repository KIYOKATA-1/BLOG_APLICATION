import { StatusBar } from 'expo-status-bar';
import { Text, View, ActivityIndicator,SafeAreaView, Image } from 'react-native';
import { Bstyles } from '../style/styles';
import React, {useEffect, useState} from 'react';
import IMAGES from '../assets/img';


export default function Profile() {
  const userData = {
    username: 'Park Pavel',
    email: 'park.pavel',
    birthDate: '04-11-2004',
    avatarUrl: IMAGES.AVATAR, 
  };

  return (
    <SafeAreaView style={Bstyles.Profilecontainer}>
      <View style={Bstyles.Profile}>
        <Image source={IMAGES.AVATAR} style={Bstyles.ProfileAvatar} />
        <Text style={Bstyles.userProfileName}>{userData.username}</Text>
        <View style={Bstyles.DataProfile}>
        <Text style={Bstyles.userProfileEmail}>EMAIL: {userData.email}@astanait.edu.kz</Text>
        <Text style={Bstyles.userProfileBirth}>BIRTH: {userData.birthDate}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
