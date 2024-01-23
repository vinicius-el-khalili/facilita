import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import '../sass/globals/globals.scss'
import AppContextProvider from './contexts/AppContextProvider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <AppContextProvider>
    <App />
  </AppContextProvider>
  ,
)
