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
import './main.scss'
import { ThemeContextProvider } from './theme/ThemeContextProvider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <ThemeContextProvider>
      <RouterProvider router={router} />
    </ThemeContextProvider>
  </Provider>
)
