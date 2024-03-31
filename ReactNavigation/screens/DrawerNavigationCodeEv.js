import "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";
import SettingsScreenCodeEv from "./SettingsScreenCodeEv";
import DashboardScreenCodeEv from "./DashBoardCodeEv";


export function DrawerNavigationCodeEv() {
    const Drawer = createDrawerNavigator();

    return (
        <Drawer.Navigator initialRouteName="Dashboard">
            <Drawer.Screen
                name="Dashboard"
                component={DashboardScreenCodeEv}
                options={{
                    title: "My dashboard",
                    drawerLabel: "Dashboard label",
                    drawerActiveTintColor: "#333",
                    drawerActiveBackgroundColor: "lightblue",
                    drawerContentStyle: {
                        backgroundColor: "#c6cbef",
                    },
                }} />
            <Drawer.Screen name="Settings" component={SettingsScreenCodeEv} />
        </Drawer.Navigator>
    )
}
