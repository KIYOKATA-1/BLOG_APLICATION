import React, { useState } from 'react';
import { Text, View, ScrollView, TouchableOpacity, Button, Modal, TextInput, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Bstyles } from '../style/styles';

export default function Main({ navigation, route }) {
  const [posts, setPosts] = useState([]);
  const [updatePostData, setUpdatePostData] = useState({});
  const [isUpdateModalVisible, setUpdateModalVisible] = useState(false);

  React.useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:5120/api/posts');
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  const deletePost = async (postId) => {
    try {
      const response = await fetch(`http://localhost:5120/api/posts/${postId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setPosts((prevPosts) => prevPosts.filter((post) => post._id !== postId));
      } else {
        const errorData = await response.text();
        console.log('Error', `Failed to delete post. Please try again. ${errorData}`);
      }
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  const openUpdateModal = (post) => {
    setUpdatePostData(post);
    setUpdateModalVisible(true);
  };

  const updatePost = async () => {
    try {
      const response = await fetch(`http://localhost:5120/api/posts/${updatePostData._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatePostData),
      });

      if (response.ok) {
        setUpdateModalVisible(false);
        fetchData();
      } else {
        const errorData = await response.text();
        console.log('Error', `Failed to update post. Please try again. ${errorData}`);
      }
    } catch (error) {
      console.error('Error updating post:', error);
    }
  };

  return (
    <SafeAreaView style={Bstyles.container}>
      <ScrollView contentContainerStyle={Bstyles.Maincontainer}>
      <StatusBar style='light'/>
      {posts.map((post) => (
        <View key={post._id} style={Bstyles.postContainer}>
          <Text style={Bstyles.postText}>ID: {post._id}</Text>
          <Text style={Bstyles.postText}>Author: {post.author}</Text>
          <Text style={Bstyles.postText}>Title: {post.title}</Text>
          <Text style={Bstyles.postText}>Text: {post.text}</Text>

          <View style={Bstyles.btnContainer}>
          <TouchableOpacity onPress={() => deletePost(post._id)} style={Bstyles.deleteBtn}>
            <Text style={Bstyles.btnText}>DELETE POST</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => openUpdateModal(post)} style={Bstyles.updateBtn}>
            <Text style={Bstyles.btnText}>UPDATE POST</Text>
          </TouchableOpacity>
          </View>
        </View>
      ))}

      <Modal animationType="slide" setT transparent={true} visible={isUpdateModalVisible}   animationInTiming={9000} animationOutTiming={9000}>
        <View style={Bstyles.modalContainer}>
          <View style={Bstyles.modalContent}>
            <Text style={Bstyles.modalTitle}>Update Post</Text>
            <TextInput
              style={Bstyles.modalInput}
              placeholder="New Title"
              value={updatePostData.title}
              onChangeText={(text) => setUpdatePostData({ ...updatePostData, title: text })}
            />
            <TextInput
              style={Bstyles.modalInput}
              placeholder="New Text"
              value={updatePostData.text}
              onChangeText={(text) => setUpdatePostData({ ...updatePostData, text: text })}
            />
            <TextInput
              style={Bstyles.modalInput}
              placeholder="New Author"
              value={updatePostData.author}
              onChangeText={(text) => setUpdatePostData({ ...updatePostData, author: text })}
            />

            <View style={Bstyles.modalBtnContainer}>
            <TouchableOpacity onPress={updatePost} style={Bstyles.modalUpdateBtn}>
              <Text style={Bstyles.modalBtnText}>UPDATE</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setUpdateModalVisible(false)} style={Bstyles.modalCancelBtn}>
              <Text style={Bstyles.modalBtnText}>CANCEL</Text>
            </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </ScrollView>
    </SafeAreaView>
  );
}
