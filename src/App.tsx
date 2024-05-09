import { Suspense, lazy } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import FullSpinnerPage from './pages/FullSpinnerPage';
import { DarkModeProvider } from './context/DarkModeContext';
import PageNotFound from './pages/PageNotFound';
import IntroductionPage from './pages/IntroductionPage';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'react-hot-toast';

const MainPage = lazy(() => import('./pages/MainPage'));
const RoadMapPage = lazy(() => import('./pages/RoadMapPage'));
const FeedbackPage = lazy(() => import('./pages/FeedbackPage'));
const FeedbackForm = lazy(() => import('./ui/FeedbackForm'));
const FeedbackDetail = lazy(() => import('./ui/FeedbackDetail'));

const queryClient = new QueryClient();

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
    path: 'road-map/:roadID',
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
        path: '/feedback/:feedbackID',
      },
    ],
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <DarkModeProvider>
        <Suspense fallback={<FullSpinnerPage />}>
          <RouterProvider router={router} />
          <Toaster
            position='bottom-center'
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
                border: '2px solid var(--color-violet-600)',
                fontSize: '16px',
                maxWidth: '500px',
                padding: '16px 34px',
                backgroundColor: 'var(--color-grey-900)',
                color: 'var(--color-grey-100)',
              },
            }}
          />
        </Suspense>
      </DarkModeProvider>
    </QueryClientProvider>
  );
}

export default App;
