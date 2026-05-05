import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

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

function Home({ folderName, refreshName }) {
  return (
    <section>
      <h1>Home Page</h1>
      <p>Welcome to the homepage.</p>
      <p>
        Your generated folder name is: <strong>{folderName}</strong>
      </p>
      <button onClick={refreshName}>Generate new folder name</button>
    </section>
  );
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
      <div className="app-shell">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home folderName={folderName} refreshName={refreshName} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
