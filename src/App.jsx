import Main from "./components/Main/Main"
import SideBar from "./components/sidebar/SideBar"
import Context from "./context/Context"


function App() {
  
  return (
    <> 
     <Context>
           <SideBar></SideBar>
        <Main></Main>
     </Context>
    </>
  )
}

export default App
