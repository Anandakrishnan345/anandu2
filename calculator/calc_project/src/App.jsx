
import Calculator from './Components/Demoo'

import { ThemeProvider } from './Components/ThemeContext'



function App() {
  

  return (
    <>
       <ThemeProvider>
      <Calculator/>
    </ThemeProvider>
    </>
  )
}

export default App
