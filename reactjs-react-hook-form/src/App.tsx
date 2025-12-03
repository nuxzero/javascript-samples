import './App.css'
import AddressForm from './components/AddressForm'

function App() {
  return (<div className="app">
    <header className='app-header'>
      <h1>React Address Form Demo</h1>
      <p>A demonstration of form handling with validation in React</p>
    </header>
    <main><AddressForm /></main>
  </div>)
}

export default App
