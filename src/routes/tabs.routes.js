import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeView }  from "../screens/Home/homeView";

const Tab = createBottomTabNavigator();

export function TabsRoutes(){
    return(
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 25, 
                    left: 20,
                    right: 20,
                    elevation: 0,
                    borderRadius: 30,

                }
            }}
        >
            <Tab.Screen 
                name="Home" 
                component={HomeView}
                options={{
                    tabBarLabel: 'Home',
                }}
            />
        </Tab.Navigator>
    )
};