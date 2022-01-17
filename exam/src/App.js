import Users from './components/Users';
import './App.css';
import Card from './card/Card';

function App() {
  let users=[
    {
      "userId": 1,
      "id": 1,
      "title": "delectus aut autem",
      "completed": 'false'
    },
    {
      "userId": 1,
      "id": 2,
      "title": "quis ut nam facilis et officia qui",
      "completed": 'false'
    },
    {
      "userId": 1,
      "id": 3,
      "title": "fugiat veniam minus",
      "completed": 'false'
    },
    {
      "userId": 1,
      "id": 4,
      "title": "et porro tempora",
      "completed": 'true'
    }
  ]
  return (
    <Card className="App">
      <Users data={users}/>
    </Card>
  );
}

export default App;
