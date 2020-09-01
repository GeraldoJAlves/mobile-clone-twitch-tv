import React from 'react';
import { NavigationContainer, TabActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Following from './pages/Following';
import ComingSoon from './pages/ComingSoon';
import Ionicons  from 'react-native-vector-icons/Ionicons';
import colors from './styles/color';

const { Navigator, Screen } = createBottomTabNavigator();

const Routes: React.FC = () => (
  <NavigationContainer>
    <Navigator>
      <Screen name="Following" component={Following} options={{
        tabBarIcon: ({size,focused}) => {
          return (
            <Ionicons 
              name="md-heart"
              size={size}
              color={ focused ? colors.purple: colors.black } />
          );
        }
      }} />
      <Screen name="Discover" component={ComingSoon} />
      <Screen name="Browse" component={ComingSoon} />
      <Screen name="Esports" component={ComingSoon} />
    </Navigator>
  </NavigationContainer>
);

export default Routes;