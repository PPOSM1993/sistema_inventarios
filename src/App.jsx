
import './App.css'
import {} from './index'
import { AuthContextProvider } from './index'
import { MyRoutes } from './routers/routes'
function App() {

  return (
    <>
      <AuthContextProvider>
        <MyRoutes />
      </AuthContextProvider>
    </>
  )
}

export default App
