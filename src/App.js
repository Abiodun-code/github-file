import './index.css';
import FileList from './components/FileList';

function App() {
  const testFiles = [
    {
        id: 1,
        name: 'src',
        type: 'folder',
        updated_at: "2016-07-11 21:24:00",
        latestCommit: {
        message: 'Initial commit'
        }
    },

    {
        id: 2,
        name: 'test',
        type: 'folder',
        updated_at: "2016-07-11 21:24:00",
        latestCommit: {
        message: 'Initial commit'
        }
    },

    {
        id: 3,
        name: 'README',
        type: 'file',
        updated_at: "2016-07-11 21:24:00",
        latestCommit: {
        message: 'Added a readme'
        }
    },
];

  return (
    <div className="App">
      <FileList files={testFiles}/>
    </div>
  );
}

export default App;
