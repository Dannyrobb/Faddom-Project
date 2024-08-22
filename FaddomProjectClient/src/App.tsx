import Main from "./views/Main";
import "./App.css";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Main />;
    </QueryClientProvider>
  );
}

export default App;
