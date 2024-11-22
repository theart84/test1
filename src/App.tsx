import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import Layout from './components/Layout/Layout';
import DriftPage from './pages/DriftPage/DriftPage';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import ForzaPage from './pages/ForzaPage/ForzaPage';
import HomePage from './pages/HomePage/HomePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import TimeAttackPage from './pages/TimeAttackPage/TimeAttackPage';

const App = () => {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
        <Route index element={<HomePage />} />
        <Route path="drift" element={<DriftPage />} />
        <Route path="timeattack" element={<TimeAttackPage />} />
        <Route path="forza" element={<ForzaPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    ),
    {
      // добавляем 'basename', чтобы работала перезагрузка на GitHub Pages без createHashRouter():
      basename: '/test1',
      // избавляет от множества warn в консоли:
      future: {
        v7_relativeSplatPath: true,
        v7_fetcherPersist: true,
        v7_normalizeFormMethod: true,
        v7_partialHydration: true,
        v7_skipActionErrorRevalidation: true,
      },
    }
  );

  return (
    <RouterProvider
      router={routes}
      future={{ v7_startTransition: true }} // избавляет от warn в консоли
    />
  );
};

export default App;
