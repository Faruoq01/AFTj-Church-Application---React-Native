

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
} from 'react-native';
import {PasswordInput,TextArea,TextInputBorder,TextInputLine,TextInputBorderRadius} from './source/components/TextInput/TextInput'
import YouTubeBanner from './source/components/YouTubeBanner/YouTubeBanner';


const App =() => {
  const [data,setData]=React.useState()
  const txt =(txt)=>{
setData(txt)
  }

  React.useEffect(()=>{
    console.log(data);
  },[data])
  return (
    <>
      <StatusBar barStyle='light-content' />
      <SafeAreaView style={styles.scrollView}>
       <TextInputLine onChangeText={(text)=>console.log(text)} marginBottom={10} placeholder={'Enter name1'}/>
       <TextInputBorderRadius marginBottom={8} onChangeText={(text)=>console.log(text)} placeholder='Enter name2'/>
       <TextInputBorder marginBottom={8} onChangeText={(text)=>console.log(text)} placeholder={'Enter name3'}/>
       <TextArea marginBottom={8}  onChangeText={(text)=>console.log(text)} placeholder={'Text Area'}/>
      <PasswordInput marginBottom={10} onChangeText={(text)=>console.log(text)} placeholder='Password'/>

      <YouTubeBanner marginTop={10} videoId="P6nz52nZq_8"/>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor:'#FFF',
    justifyContent:'center',
    alignItems:'center',
    height:Dimensions.get('window').height
  },
 
});

export default App;
