import React from 'react';
import {
  StyleSheet
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import StackNavigation from '../Employees Room/Stack-Navigation';


export default function Navigation() {



  return (

    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({

});

