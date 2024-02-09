import React, {useState} from 'react';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import MainStack from './navigate';

const fonts = () => Font.loadAsync({
  'italic': require('./assets/fonts/Montserrat-Italic-VariableFont_wght.ttf'),
  'variable': require('./assets/fonts/Montserrat-VariableFont_wght.ttf'),
  'exo': require('./assets/fonts/Exo2-VariableFont_wght.ttf'),
  'bebas': require('./assets/fonts/BebasNeue-Regular.ttf'),
})
export default function App() {
  const [font, setFont] = useState(false);

  if(font) {
    return (
      <MainStack />
    );
  }else{
    return(
      <AppLoading   startAsync={fonts}
      onFinish={() => setFont(true)}
      onError={console.warn()} />
    );
  }
}
