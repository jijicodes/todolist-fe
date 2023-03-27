import "./App.css";
import { Header } from "./components/Header/Header";
import { TaskForm } from "./components/TaskForm/TaskForm";

function App() {
  return (
    <div className="App">
      <Header />
      <TaskForm />
    </div>
  );
}

export default App;
