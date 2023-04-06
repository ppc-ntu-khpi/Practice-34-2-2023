import React from 'react';
import './App.css';
import { Layout } from './components/layout/Layout';
import { Quiz } from './components/screens/Quiz/Quiz';
import { ColorProvider } from './components/context/ColorContext';

export default App;

function App() {
  return (
    <ColorProvider>
      <Layout>
        <Quiz></Quiz>
      </Layout>
    </ColorProvider>
  );
}
