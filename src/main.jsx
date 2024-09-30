import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { DataProvider } from './Components/Context/Context.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DataProvider>
    <App />
    </DataProvider>
    <ToastContainer/>
  </StrictMode>,
)
