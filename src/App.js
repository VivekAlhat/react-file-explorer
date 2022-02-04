import React from 'react';
import Explorer from './components/Explorer';
import fileData from './lib/data.json';
import './style.css';

export default function App() {
  return <Explorer data={fileData} />;
}
