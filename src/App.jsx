import { useState } from 'react';

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

function App() {
  const [folderName, setFolderName] = useState(generateFolderName());

  return (
    <main className="app-shell">
      <div className="card">
        <h1>RegnRate Static Site</h1>
        <p>React static frontend for generating a folder-style name.</p>

        <div className="folder-box">
          <span className="folder-label">Current folder name</span>
          <strong>{folderName}</strong>
        </div>

        <button onClick={() => setFolderName(generateFolderName())}>
          Regenerate folder name
        </button>
      </div>
    </main>
  );
}

export default App;
