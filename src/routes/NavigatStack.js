import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Home from '../screens/home/Home'
import Login from '../screens/login/Login'
import Register from '../screens/register/Register'
import Welcome from '../screens/welcome/Welcome'
// import Scanner from '../screens/scanner/Scanner'
import testScanner from '../screens/scanner/testScanner'

const Stack = createStackNavigator()

const NavigatStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Welcome' component={Welcome} options={{headerShown: false}}/>
                <Stack.Screen name='Login' component={Login} options={{headerShown: false}}/>
                <Stack.Screen name='Home' component={Home} options={{headerShown: false}}/>
                <Stack.Screen name='Scanner' component={testScanner} options={{headerShown: false}}/>
                {/* <Stack.Screen name='Register' component={Register} /> */}
            </Stack.Navigator>

        </NavigationContainer>
    )
}

export default NavigatStack
