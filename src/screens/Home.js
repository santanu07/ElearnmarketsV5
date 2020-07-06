import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';

const Home =({navigation})=>{
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Home Screen</Text>
          <Button onPress={()=>navigation.navigate('Details')}>Hello</Button>
        </View>
      );
}

export default Home;