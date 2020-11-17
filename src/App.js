import './App.css';
import User from './User/User';

function App() {
  return (
    <div className="App">
      <h1>This is my webapp</h1>
      <p>It's awesome!</p>
      <User name='Nadiia' email='nadiia@gmail.com' />
      <User name='Max' email='max@gmail.com'>Hobbies: Football</User>
      <User name='Taras' email='taras@gmail.com' />

    </div>
  );
}

export default App;
