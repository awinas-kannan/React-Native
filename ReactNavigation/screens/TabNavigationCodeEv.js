import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import CourseListTabCodeEv from "./CourseListTabCodeEv"
import ProfileTabCodeEv from "./ProfileTabCodeEv"
import SettingsScreenCodeEv from "./SettingsScreenCodeEv"
import { StackNavigationCodeEv } from "./StackNavigationCodeEv";

const Tab = createBottomTabNavigator();

export const TabNavigationCodeEv = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                //   tabBarShowLabel: false,
                tabBarLabelPosition: "below-icon",
                tabBarActiveTintColor: "red",
                tabBarInactiveTintColor: 'orange'
            }}
        >
            <Tab.Screen name="Course List" component={CourseListTabCodeEv}
                options={{
                    tabBarIcon: () => <Ionicons name={"wifi-sharp"} size={20} />,
                }} />
            <Tab.Screen
                name="Profile"
                component={ProfileTabCodeEv}
                options={{
                    tabBarLabel: "My Profile",
                    tabBarIcon: ({ color }) => <Ionicons name={"person"} size={20} color={color} />,
                    tabBarBadge: 99,
                }}
            />
            <Tab.Screen name="Settings" component={SettingsScreenCodeEv}
                options={{
                    tabBarIcon: () => <Ionicons name={"settings"} size={20} />,
                }} />

            <Tab.Screen name="Stack" component={StackNavigationCodeEv}
                options={{
                    tabBarIcon: () => <Ionicons name={"star"} size={20} />,
                    headerShown: false
                }} />
        </Tab.Navigator>
    )
}