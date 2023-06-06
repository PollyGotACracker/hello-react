import Parent from "./components/Parent";
import { DataContextProvider } from "./contexts/DataContext";

const App = () => {
  return (
    <DataContextProvider>
      <Parent />
    </DataContextProvider>
  );
};

export default App;
