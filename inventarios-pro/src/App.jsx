import "./App.css";
import { AuthContextProvider } from "./index";
import { MyRoutes } from "./index";

function App() {
  return (
    <>
      <AuthContextProvider>
        <MyRoutes />
      </AuthContextProvider>
    </>
  );
}

export default App;
