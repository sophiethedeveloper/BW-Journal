import React from 'react';
import './App.css';
import PostList from './components/PostList';
import { PostProvider } from "./contexts/PostContext"

function App() {
  return (
    <div className="App">
      <PostProvider>
        <h1>Hello</h1>
        <PostList />
      </PostProvider>
   
    </div>
  );
}

export default App;
