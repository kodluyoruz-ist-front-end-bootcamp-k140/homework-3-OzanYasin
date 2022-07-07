import React, { useState } from 'react';
import { TodoFn, PostCls } from './Components/data-grid';
import { Button } from './Components/button/Button';
import ReactSwitch from 'react-switch';
import { ThemeContext } from './Components/Helpers/Context';
import './App.css';

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
        <div className="buttons container">
          <div className="btn-group">
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
          <h1>K140 Homework 3</h1>
          <div className="switch">
            <label>{theme === 'light' ? 'Light Mode' : 'Dark Mode'}</label>
            <ReactSwitch onChange={toggleTheme} checked={theme === 'dark'} />
          </div>
        </div>

        {activeTab === 'todo' ? <TodoFn /> : <PostCls />}
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
