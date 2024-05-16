import {createDrawerNavigator} from '@react-navigation/drawer';
import Setting from '../Screens/Setting';
import TabNavigator from './TabNavigation';
import AppDrawerItem from '../Components/ui/AppDrawer';
import Backups from '../Screens/Backups';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Drawer = createDrawerNavigator();
//'#636EAB'
function AppDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={props => <AppDrawerItem {...props} />}
      screenOptions={{
        headerStyle: {
          backgroundColor: '#103550',
          elevation: 0,
        },
        drawerActiveTintColor: '#636EAB',
        drawerInactiveTintColor: 'black',
        headerTintColor: '#fff',
      }}>
      <Drawer.Screen
        name="Bizcard"
        component={TabNavigator}
        options={{
          title: 'Bizcard',
          drawerIcon: () => <FontAwesome name="home" size={24} color="black" />,
        }}
      />

      <Drawer.Screen
        name="Backup"
        component={Backups}
        options={{
          title: 'Backup',
          drawerIcon: () => (
            <FontAwesome name="cloud-upload" size={24} color="black" />
          ),
        }}
      />
      <Drawer.Screen
        name="setting"
        component={Setting}
        options={{
          title: 'Settings',
          drawerIcon: () => (
            <Ionicons name="settings-sharp" size={24} color="black" />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
export default AppDrawer;
