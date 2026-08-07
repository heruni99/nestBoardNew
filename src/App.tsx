import './App.css'
import { Button } from './components/ui/button'

function App() {
  

  return (
    <>
     <h1>Welcome to React</h1> 
     <Button onClick={() => alert('Button clicked!')}>Click me</Button>
    </>
  )
}

export default App
