import Header from "./components/Header"
import Main from "./components/Main"

function App() {

  return (
    <div className="h-screen bg-app-bg bg-cover">
     <div className="h-screen flex flex-col absolute inset-0 bg-gradient-to-b from-tiny-orange/30 to-transparent  font-inter">
      <Header />
      <Main />
      </div>
    </div>
  )
}

export default App



