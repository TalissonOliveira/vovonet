import React from 'react';
import Routes from './src/routes/routes'
//import Tab from './src/routes/tabLevelChoice'
import { StatusBar } from 'expo-status-bar';


export default function App() {
  return (
    <>
      <Routes/>
      <StatusBar style='light' backgroundColor='#51206A' translucent={false}/>
    </>
  );
}