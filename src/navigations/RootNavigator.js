import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
// import { Home } from "../screens";
import { DrawerContent } from "../components";
import { MainStack } from "./MainStack";

const Drawer = createDrawerNavigator();

export const RootNavigator = ({toggleTheme}) => {
  return (
    <Drawer.Navigator  drawerContent={(props) => <DrawerContent {...props} toggleTheme={toggleTheme}/>}>
      <Drawer.Screen name="Home" component={MainStack} />
    </Drawer.Navigator>
  );
};