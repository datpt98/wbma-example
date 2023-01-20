import React, {useContext} from 'react';
import {StyleSheet, SafeAreaView, Text, Button} from 'react-native';
import {MainContext} from '../contexts/MainContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile = () => {
  const [isLoggedIn, setIsLoggedIn] = useContext(MainContext);
  console.log('profile isLoggedIn', isLoggedIn);

  const logout = async () => {
    try {
      setIsLoggedIn(false);
      await AsyncStorage.clear();
    } catch (e) {
      console.log('Error logging out', e);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text>Profile</Text>
      <Button title={'Logout'} onPress={logout} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
  },
});

export default Profile;
