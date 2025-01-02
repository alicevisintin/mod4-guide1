import React from 'react';
import HamburgerMenu from './HamburgerMenu';

const App = () => {
  return (
    <div className="App">
      <header>
        <HamburgerMenu />
      </header>
      <main>
        <h1>Welcome to My Website</h1>
        <p>This is an example of a hamburger menu with React and Vite.</p>
      </main>
    </div>
  );
};

export default App;