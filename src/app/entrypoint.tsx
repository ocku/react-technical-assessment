// vendors
import { RouterProvider } from 'react-router-dom';
// components
import { NavigationComponent } from './components/navigation/navigation.component';
// contexts
import { LocaleContextProvider } from './contexts/locale/locale.context';
// routes
import { router } from './routes';

export const Entrypoint = () => {
  return (
    <LocaleContextProvider>
      <NavigationComponent />
      <RouterProvider router={router} />
    </LocaleContextProvider>
  );
};
