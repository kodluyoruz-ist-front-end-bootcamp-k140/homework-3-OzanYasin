import React, { useState } from 'react';
import { TodoFn, PostCls } from './Components/data-grid';
import { Button } from './Components/button/Button';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('todo');
  return (
    <div className="App">
      <div className="btn-group tabs" role="group" aria-label="Basic example">
        <Button
          onClick={() => setActiveTab('post')}
          className={
            activeTab === 'post' ? 'btn btn-primary' : 'btn btn-default'
          }
        >
          Post
        </Button>
        <Button
          onClick={() => setActiveTab('todo')}
          className={
            activeTab === 'todo' ? 'btn btn-primary' : 'btn btn-default'
          }
        >
          Todo
        </Button>
      </div>
      {activeTab === 'todo' ? <TodoFn /> : <PostCls />}
    </div>
  );
}

export default App;
