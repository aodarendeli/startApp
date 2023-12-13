import ReactDOM from 'react-dom/client'
// import './app/index.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux'
import { store } from './store/configureStore.ts';
import { router } from './router/Routes.tsx';

const forceSlashAfterHash = () => {
  const _hash = window.location.hash;

  console.log("deneme",_hash);

  
  
  if (_hash[1] && _hash[1] != '/') {

      window.location.href = window.location.origin + window.location.pathname + window.location.search + "#/" + _hash.slice(1);

  }

}

forceSlashAfterHash();

window.addEventListener('hashchange', forceSlashAfterHash);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <RouterProvider  router={router} />
  </Provider>
)
