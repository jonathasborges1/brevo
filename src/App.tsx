import './App.css'
import { useState } from 'react'
import { SnackbarProvider } from 'notistack'
import { CssBaseline, Typography } from '@mui/material'

import viteLogo from './assets/vite.svg';
import reactLogo from './assets/react.svg'

import RouterProvider from './../src/components/RouterProvider'
import ThemeProvider from './../src/components/Theme/themeProvider'

// import ThemeProvider from '@components/Theme/themeProvider'

function App() {
  const [count, setCount] = useState(0)

  const HomeVite: React.FC = () => {
    return(
      <>
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <Typography variant={"h1"}>Vite + React</Typography>
        {/* <Typography variant={"h2"}>Vite + React</Typography>
        <Typography variant={"h3"}>Vite + React</Typography>
        <Typography variant={"body1"}>Vite + React</Typography>
        <Typography variant={"caption"}>Vite + React</Typography> */}

        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </>
    )
  }

  return (
    <>
      <ThemeProvider>
        <SnackbarProvider
          autoHideDuration={5000}
          maxSnack={3}
          preventDuplicate
          anchorOrigin={{
            vertical: 'bottom', // Posição vertical inferior
            horizontal: 'right', // Posição horizontal direita
          }}
        >
          <CssBaseline/> 
          <HomeVite></HomeVite>

          <RouterProvider/>
        {/* App running... */}
        </SnackbarProvider>
      </ThemeProvider>
    </>
  )
}

export default App
