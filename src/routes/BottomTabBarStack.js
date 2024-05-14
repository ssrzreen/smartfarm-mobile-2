import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import IconHome from '../assets/icons/homeIcon.png'
import BottomTab from './BottomTab';
import Home from '../screens/home/Home';
import Scanner from '../screens/scanner/Scanner';
import HomePage from '../screens/home/HomePage';

const Tab = createBottomTabNavigator();

const BottomTabBarStack = () => {
    
    const tabs = [
        {
            id: 0,
            activeIcon: IconHome,
            inactiveIcon: IconHome,
            name: 'HomePage',
            component: HomePage
        },
        {
            id: 1,
            activeIcon: IconHome,
            inactiveIcon: IconHome,
            name: 'Details',
            component: ''
        },
        {
            id: 2,
            activeIcon: IconHome,
            inactiveIcon: IconHome,
            name: 'Setting',
            component: ''
        },
        {
            id: 3,
            activeIcon: IconHome,
            inactiveIcon: IconHome,
            name: 'History',
            component: ''
        },
        {
            id: 4,
            activeIcon: IconHome,
            inactiveIcon: IconHome,
            name: 'Scanner',
            component: Scanner
        },
        
    ]
    return (
        <Tab.Navigator tabBar={props => <BottomTab {...props} />}
            screenOptions={{
                headerShown: false,
            }}>
            {
                tabs.map((item, index) => (
                    <Tab.Screen 
                    key={index}
                    initialParams={{
                        activeIcon: item.activeIcon,
                        inactiveIcon: item.inactiveIcon,
                    }}
                    name={item.name}
                    component={item.component}
                    />
                ))
            }

        </Tab.Navigator>
    )
}

export default BottomTabBarStack