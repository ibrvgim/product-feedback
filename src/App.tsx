import { lazy } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

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
  return <RouterProvider router={router} />;
}

export default App;
