import React, { createContext, useState } from 'react';
import { TodoFn, PostCls } from './Components/data-grid';
import { Button } from './Components/button/Button';
import './App.css';

export const ThemeContext = createContext('null');

function App() {
  // Active Tab Statement
  const [activeTab, setActiveTab] = useState('todo');
  // Theme Statement (light & dark)
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
  };
  return (
    // ThemeContext.Provider is the way of accessing data through all of the components
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
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
    </ThemeContext.Provider>
  );
}

export default App;
