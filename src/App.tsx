import { Suspense, lazy } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import FullSpinnerPage from './pages/FullSpinnerPage';

const MainPage = lazy(() => import('./pages/MainPage'));
const RoadMapPage = lazy(() => import('./pages/RoadMapPage'));
const FeedbackPage = lazy(() => import('./pages/FeedbackPage'));
const FeedbackForm = lazy(() => import('./ui/FeedbackForm'));
const FeedbackDetail = lazy(() => import('./ui/FeedbackDetail'));

const router = createBrowserRouter([
  {
    element: <MainPage />,
    path: '/',
    // errorElement,
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
  );
}

export default App;
