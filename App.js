import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import  { Tabs }  from './NavTabs.js';
import { ColorProvider} from './CounterProvider.js';

export default function App() {
  return (
    <NavigationContainer>    
      <ColorProvider>
        <Tabs/>
      </ColorProvider>
    </NavigationContainer>
  );
}
