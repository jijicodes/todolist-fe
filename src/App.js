import "./App.css";
import { Header } from "./components/Header/Header";
import { TaskForm } from "./components/TaskForm/TaskForm";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Header />
        <TaskForm />
      </QueryClientProvider>
    </div>
  );
}

export default App;
