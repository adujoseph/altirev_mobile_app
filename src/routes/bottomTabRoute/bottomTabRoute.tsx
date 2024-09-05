import { StyleSheet, Text, View } from 'react-native'
import React , {useContext} from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { user_agent, user_regular } from './bottomTabData';
import { colors } from '../../utils/theme';
import Dashboard from '../../screens/dashboard';
import Livefeed from '../../screens/livefeed';
import NotificationScreen from '../../screens/notifications';
import ProfileScreen from '../../screens/profile';
import HomeIcon from '../../assets/svg/HomeIcon';
import LiveFeedIcon from '../../assets/svg/LiveFeedIcon';
import NotificationIcon from '../../assets/svg/NotificationIcon';
import PersonIcon from '../../assets/svg/PersonIcon';
import UploadResult from '../../screens/uploadResult';
import UploadReport from '../../screens/uploadReport';
import UploadIcon from '../../assets/svg/UploadIcon';
import ReportIcon from '../../assets/svg/ReportIcon';
import Authcontext from '../../context/Authcontext';
import UserDashboard from '../../screens/dashboard/UserDashboard';
import CustomText from '../../components/CustomText';

const Tab = createBottomTabNavigator();

const BottomTabRoute = () => {
   const {myRole} = useContext(Authcontext);
    if (myRole === "user") {
        return (
            <Tab.Navigator screenOptions={{
                headerShown: false,
                tabBarStyle: styles.container,
                tabBarItemStyle: styles.tabItem
            }}>
                <Tab.Screen name={'home'} component={UserDashboard} options={{
                    title: 'Home',
                    tabBarIcon: ({ focused }) => <HomeIcon color={focused ? colors.primary : colors.dark_bg} />
                }} />
                <Tab.Screen name={'livefeed'} component={Livefeed} options={{
                    title: 'Livefeed',
                    tabBarIcon: ({ focused }) => <LiveFeedIcon color={focused ? colors.primary : colors.dark_bg} />
                }} />
                <Tab.Screen name={'notification'} component={NotificationScreen} options={{
                    title: 'Notification',
                    tabBarIcon: ({ focused }) => <NotificationIcon color={focused ? colors.primary : colors.dark_bg} />
                }} />
                <Tab.Screen name={'profile'} component={ProfileScreen} options={{
                    title: 'Profile',
                    tabBarIcon: ({ focused }) => <PersonIcon color={focused ? colors.primary : colors.dark_bg} />
                }} />
            </Tab.Navigator>
        )
    }
    return (
        <Tab.Navigator screenOptions={{
            //
            tabBarStyle: styles.container,
            tabBarItemStyle: styles.tabItem,
            headerTitleStyle: { textAlign: 'center', paddingLeft: '40%'},
            headerStyle: {backgroundColor: 'transparent'}
        }}>
               <Tab.Screen name={'home'} component={Dashboard} options={{
                    title: 'Home',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => <HomeIcon color={focused ? colors.primary : colors.dark_bg} />
                }} />
                <Tab.Screen 
                name={'result'} component={UploadResult} options={{
                    title: 'Results',
                    tabBarIcon: ({ focused }) => <UploadIcon color={focused ? colors.primary : colors.dark_bg} />
                }} />
                <Tab.Screen 
                name={'report'} 
                component={UploadReport} 
                options={{
                    title: 'Reports',
                    headerTitle: 'Reports',
                   // header: () => <CustomText>Reports</CustomText>,
                    tabBarIcon: ({ focused }) => <ReportIcon color={focused ? colors.primary : colors.dark_bg} />
                }} />
                <Tab.Screen name={'profile'} component={ProfileScreen} options={{
                    title: 'Profile',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => <PersonIcon color={focused ? colors.primary : colors.dark_bg} />
                }} />
        </Tab.Navigator>
    )
}

export default BottomTabRoute

const styles = StyleSheet.create({
    container: {
        height: 80,
        // borderRadius: 50,
        // position:'absolute',
        // bottom: 20,
        // left: 10,
        // right: 10,
        // zIndex: 999
    },
    tabItem: {
        paddingTop: 10,
        paddingBottom: 20
    }

})