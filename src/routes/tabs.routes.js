import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeView }  from "../screens/Home/homeView";
import { AntDesign } from '@expo/vector-icons'; 

const Tab = createBottomTabNavigator();

export function TabsRoutes(){
    return(
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: "absolute",
                    height: 110,
                    elevation: 0,
                    borderTopEndRadius: 60,
                    borderTopStartRadius: 60,
                }
            }}
        >
            <Tab.Screen 
                name="Home" 
                component={HomeView}
                options={{
                    tabBarIcon: () => {
                        return(
                            <AntDesign name="pluscircle" size={48} color="#6146C6" />
                        )
                    },
                    tabBarLabel: 'Home',
                }}
            />
        </Tab.Navigator>
    )
};