import './App.css';
import AppRoutes from './routes/routes';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ToastContainer } from 'react-toastify';
import { persistor, store } from './store';



function App() {

  return (
    <>
      <ToastContainer />
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <AppRoutes />
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
