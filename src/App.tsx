import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'

import { UserForm } from './components/UserForm/UserForm'

const router = createBrowserRouter([
  {
    path: '/',
    element: <UserForm />,
  },
  {
    path: '*',
    element: (
      <Navigate
        to="/"
        replace
      />
    ),
  },
])

function App() {
  return (
    <div className="container">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
