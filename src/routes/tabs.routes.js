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
                    position: "absolute",
                    height: 110,
                    elevation: 0,
                    borderRadius: 90,
                },
                tabBarIcon: ({}) => {
                    const icons = {
                        Home: PlusCircle,
                    }
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