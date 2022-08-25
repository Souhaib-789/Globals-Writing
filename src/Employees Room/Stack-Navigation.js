import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen1 from './Screens/Screen1'
import Registration from './Registration/Register';
import ClientsOrder from '../Clients Room/Clients-Order';
import ClientsRoom from '../Clients Room/Clients-Room';
import Profile from './Screens/Profile';
import ManagerRoom from '../Manager Room/Manager-Room';
import ReceivedDocs from '../Manager Room/Received-Docs';
import GupShupRoom from '../Gup Shup Room/Gup-Shup-Room';
import SetCredentials from '../Manager Room/Set-Credentials';
import MenuScreen from '../Navigation/Menu-Screen';
import CEORoom from '../CEO Room/CEO-Room';
import Details from '../Manager Room/Sub-Rooms/Details';
import ReceivedProjects from '../CEO Room/Subrooms/Received-Projects';
import CustomerFeedback from '../CEO Room/Subrooms/Cus-Feedback';
import ComplaintBox from '../CEO Room/Subrooms/Complain-box';
import EmployeesData from '../CEO Room/Subrooms/Emp-Data';
import Thankyou from '../Clients Room/Thankyou';

const Stack = createNativeStackNavigator();

export default function StackNavigation() {

  return (
    <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName={'ClientsRoom'}>
    <Stack.Screen name="Registration" component={Registration} />
    <Stack.Screen name="Screen1" component={Screen1} />
    <Stack.Screen name="Profile" component={Profile} />
    

    <Stack.Screen name="ClientsOrder" component={ClientsOrder} />
    <Stack.Screen name="ClientsRoom" component={ClientsRoom} />
    <Stack.Screen name="Thank you" component={Thankyou} />



    <Stack.Screen name="Manager Room" component={ManagerRoom} />
    <Stack.Screen name="Received Docs" component={ReceivedDocs} />
    <Stack.Screen name="Set Credentials" component={SetCredentials} />
    <Stack.Screen name="Details" component={Details} />


    <Stack.Screen name="Gup Shup Room" component={GupShupRoom} />

    <Stack.Screen name="Menu Screen" component={MenuScreen} />

    <Stack.Screen name="CEO Room" component={CEORoom} />
    <Stack.Screen name="Employees Data" component={EmployeesData} />
    <Stack.Screen name="Received Projects" component={ReceivedProjects} />
    <Stack.Screen name="Customer Feedback" component={CustomerFeedback} />
    <Stack.Screen name="Complaint Box" component={ComplaintBox} />




  </Stack.Navigator>
  );
};



