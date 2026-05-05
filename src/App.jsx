import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home';

const adjectives = [
  'bright',
  'quick',
  'silent',
  'bold',
  'fresh',
  'prime',
  'smart',
  'rapid',
  'neon',
  'calm'
];

const nouns = [
  'folder',
  'folderz',
  'zone',
  'stack',
  'space',
  'realm',
  'cloud',
  'vault',
  'nest',
  'path'
];

function randomItem(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function generateFolderName() {
  const adjective = randomItem(adjectives);
  const noun = randomItem(nouns);
  const suffix = Math.floor(100 + Math.random() * 900);
  return `${adjective}-${noun}-${suffix}`;
}

function About() {
  return (
    <section>
      <h1>About Page</h1>
      <p>This page shows information about the app.</p>
    </section>
  );
}

function Contact() {
  return (
    <section>
      <h1>Contact Page</h1>
      <p>Get in touch with us using this example route.</p>
    </section>
  );
}

function App() {
  const [folderName, setFolderName] = useState(generateFolderName());

  const refreshName = () => setFolderName(generateFolderName());

  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home folderName={folderName} refreshName={refreshName} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
     
    </Router>
  );
}

export default App;
