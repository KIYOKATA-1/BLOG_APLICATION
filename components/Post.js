import React from 'react';
import { Text, View, TouchableOpacity, TextInput , TouchableWithoutFeedback, TouchableHighlight} from 'react-native';
import { Pstyles } from '../style/post';
import { MaterialIcons } from '@expo/vector-icons'; 
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function Post({ navigation, route }) {
  const [title, setTitle] = React.useState('');
  const [text, setText] = React.useState('');
  const [author, setAuthor] = React.useState('');
  const [clearAllHovered, setClearAllHovered] = React.useState(false);
  const [textColor, setTextColor] = React.useState('white');

  const handleAddPost = async () => {
    try {
      const response = await fetch('http://localhost:5120/api/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, text, author }),
      });

      const result = await response.json();
      console.log(result);

      navigation.navigate('Main', {
        message: result.message,
        post: [result.post, ...(route.params?.posts || [])],
      });
    } 
    catch (error) {
      console.error('Error adding post:', error);
    }
  };

  const clearAllFields = () => {
    setTitle('');
    setText('');
    setAuthor('');
  };

  return (
    <View style={Pstyles.PostContainer}>
      <View style={Pstyles.inputContainer}>
        <TextInput
          style={Pstyles.textInput}
          placeholder="Title"
          placeholderTextColor={Colors.white}
          value={title}
          onChangeText={(text) => setTitle(text)}
        />
      </View>

      <View style={Pstyles.inputContainer}>
        <TextInput
          style={Pstyles.textInput}
          placeholder="Text"
          placeholderTextColor={Colors.white}
          value={text}
          onChangeText={(text) => setText(text)}
        />
      </View>

      <View style={Pstyles.inputContainer}>
        <TextInput
          style={Pstyles.textInput}
          placeholder="Author"
          placeholderTextColor={Colors.white}
          value={author}
          onChangeText={(text) => setAuthor(text)}
        />
      </View>

      <TouchableOpacity onPress={() => handleAddPost() && clearAllFields()}>
        <View style={Pstyles.postBtn}>
          <Text style={{ color: '#BAF800', fontSize: 20, fontFamily: 'exo', textAlign: 'center' }}>Add Post</Text>
        </View>
      </TouchableOpacity>
      <TouchableWithoutFeedback
        onPressIn={() => setClearAllHovered(true)}
        onPressOut={() => setClearAllHovered(false)}
        onPress={clearAllFields}
      >
        <View
          style={[
            Pstyles.clearAllBtn,
            { borderColor: clearAllHovered ? 'red' : '#BAF800' },
          ]}
        >
          <Text style={[Pstyles.clearAllBtnText,
          {color: clearAllHovered ? 'red' : '#BAF800'}
          ]}>
            Clear All
          </Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}