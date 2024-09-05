import {createBrowserRouter,createRoutesFromElements,RouterProvider,Route} from 'react-router-dom'
import HomePage from './Pages/HomePage'
import Issue from './Pages/Issue'
import VIew from './Pages/VIew'
import MainLayout from './Layouts/MainLayout'
import FormSubmitted from './Components/FormSubmitted'

function App() {

  const router = createBrowserRouter(createRoutesFromElements(

    <>
    <Route path='/' element={<MainLayout/>}>  


    <Route path='/' element={<HomePage/>}/>
    <Route path = '/issue' element = {<Issue/>}/>
    <Route path = '/view/:id' element = {<VIew/>}/>
    <Route path = '/submitted' element = {<FormSubmitted/>}/>


    
    
    
    </Route>

    <Route path = '/view' element = {<VIew/>}/>
    
    

    </>
  ))

  return (
    <>
    
    <RouterProvider router={router}/>
    

    </>
  )
}

export default App
