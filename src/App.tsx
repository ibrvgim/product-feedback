import { Suspense, lazy } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import FullSpinnerPage from './pages/FullSpinnerPage';
import { DarkModeProvider } from './context/DarkModeContext';
import PageNotFound from './pages/PageNotFound';
import IntroductionPage from './pages/IntroductionPage';

const MainPage = lazy(() => import('./pages/MainPage'));
const RoadMapPage = lazy(() => import('./pages/RoadMapPage'));
const FeedbackPage = lazy(() => import('./pages/FeedbackPage'));
const FeedbackForm = lazy(() => import('./ui/FeedbackForm'));
const FeedbackDetail = lazy(() => import('./ui/FeedbackDetail'));

const router = createBrowserRouter([
  {
    element: <IntroductionPage />,
    path: '/',
    errorElement: <PageNotFound />,
  },

  {
    element: <MainPage />,
    path: '/:id',
  },

  {
    element: <RoadMapPage />,
    path: 'road-map',
  },

  {
    element: <FeedbackPage />,
    path: 'feedback',

    children: [
      {
        element: <FeedbackForm />,
        path: '/feedback/form',
      },

      {
        element: <FeedbackDetail />,
        path: '/feedback/:id',
      },
    ],
  },
]);

function App() {
  return (
    <DarkModeProvider>
      <Suspense fallback={<FullSpinnerPage />}>
        <RouterProvider router={router} />
        {/* <Toaster
        position='top-center'
        gutter={12}
        containerStyle={{ margin: '8px' }}
        toastOptions={{
          success: {
            duration: 4000,
          },
          
          error: {
            duration: 5000,
          },
          
          style: {
            fontSize: '16px',
            maxWidth: '500px',
            padding: '16px 24px',
            backgroundColor: 'var(--color-grey-0)',
            color: 'var(--color-grey-700)',
          },
        }}
      /> */}
      </Suspense>
    </DarkModeProvider>
  );
}

export default App;
