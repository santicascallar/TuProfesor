import React from 'react';
import MyStack from './src/Navigation/navigation';
import { ContextProvider } from './contextState.js';

export default function App() {
  return (
    <ContextProvider>
      <MyStack/> 
    </ContextProvider>
  );
}