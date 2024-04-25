import { View, Text } from 'react-native'
import React from 'react'
import Navigator from './src/routes/NavigatStack'
import { NavigationContainer } from '@react-navigation/native';

// import DataTables from './src/screens/tables/DataTables'
import TablesTracking from './src/screens/tables/TablesTracking'
import DataTreeInsert from './src/screens/datainsert/DataTreeInsert'
import TestTables from './src/screens/tables/TestTables'
import Scanner from './src/screens/scanner/Scanner'
import DataTree from './src/screens/datainsert/DataTree'
import Tabs from './src/routes/Tabs'

const App = () => {
    return (
        // <TestTables />
        // <Scanner />
        // <DataTree />
        <NavigationContainer>
            <Navigator >
                {/* <Tabs /> */}
            </Navigator>
        </NavigationContainer>

        // <DataTables />
        // <TablesTracking />
        // <View>
        //     <Text>app</Text>
        // </View>
    )
}

export default App