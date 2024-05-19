import {createDrawerNavigator} from '@react-navigation/drawer';
import Setting from '../Screens/Setting';
import TabNavigator from './TabNavigation';
import AppDrawerItem from '../Components/ui/AppDrawer';
import Backups from '../Screens/Backups';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TermsAndConditions from '../Screens/TermsAndConditions';
const Drawer = createDrawerNavigator();
function AppDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={props => <AppDrawerItem {...props} />}
      screenOptions={{
        headerStyle: {
          backgroundColor: '#103550',
          elevation: 0,
        },
        drawerActiveTintColor: '#FF7377',
        drawerInactiveTintColor: 'black',
        headerTintColor: '#fff',
      }}>
      <Drawer.Screen
        name="Bizcard"
        component={TabNavigator}
        options={{
          title: 'Buzzcard',
          drawerIcon: ({focused, color}) => (
            <FontAwesome
              name="home"
              size={24}
              color={focused ? '#FF7377' : 'black'}
            />
          ),
        }}
      />

      <Drawer.Screen
        name="Backup"
        component={Backups}
        options={{
          title: 'Backup',
          drawerIcon: ({focused, color}) => (
            <FontAwesome
              name="cloud-upload"
              size={24}
              color={focused ? '#FF7377' : 'black'}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="setting"
        component={Setting}
        options={{
          title: 'Settings',
          drawerIcon: ({focused, color}) => (
            <Ionicons
              name="settings-sharp"
              size={24}
              color={focused ? '#FF7377' : 'black'}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Terms"
        component={TermsAndConditions}
        options={{
          title: 'Terms and conditions',
          drawerIcon: ({focused, color}) => (
            <Ionicons
              name="document-text"
              size={24}
              color={focused ? '#FF7377' : 'black'}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
export default AppDrawer;
