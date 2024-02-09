import React, { useState } from 'react';
import { Modal, View, Text, TextInput, Button } from 'react-native';
import Main from './Main'; // Assuming 'Main' component is in the same directory

export default function MainScreen() {
  const [isUpdateModalVisible, setUpdateModalVisible] = useState(false);
  const [updatePostData, setUpdatePostData] = useState({});

  const openUpdateModal = (post) => {
    setUpdatePostData(post);
    setUpdateModalVisible(true);
  };

  const closeUpdateModal = () => {
    setUpdateModalVisible(false);
  };

  return (
    <View style={{ flex: 1 }}>
      <Main openUpdateModal={openUpdateModal} />
    
    </View>
  );
}
