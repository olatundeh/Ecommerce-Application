import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { store, persistor } from './Redux/Store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import App from './App'


createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
)
