import {createDrawerNavigator} from '@react-navigation/drawer';
import Setting from '../Screens/Setting';
import TabNavigator from './TabNavigation';
import AppDrawerItem from '../Components/ui/AppDrawer';
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

        headerTintColor: '#fff',
      }}>
      <Drawer.Screen name="Bizcard" component={TabNavigator} />
      <Drawer.Screen name="setting" component={Setting} />
    </Drawer.Navigator>
  );
}
export default AppDrawer;
