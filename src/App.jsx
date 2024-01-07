import { RouterProvider, Outlet, createBrowserRouter } from "react-router-dom";
import './styles/css/style.css'
import Header from "./components/Header.jsx";
import SideBar from "./components/SideBar.jsx";
import Login from "./components/Login.jsx";
import Profile from "./components/Profile.jsx";
import ErrorPage from "./components/ErrorPage.jsx";


// rooting
const router = createBrowserRouter([
  {
    path : '/',
    element: <Login/>,
    errorElement: <ErrorPage/>,
  },
  {
    path: 'profile/:id',
    element: <Root/>,
    children: [
      {
        index: true,
        element: <Profile/>,
      },
    ]
  },
])


// layout
function Root () {
  return <>
    <Header/>
    <div className="main">
      <SideBar/>
      <Outlet/>
    </div>
  </>
}

function App() {
  return <RouterProvider router={router}/>
}

export default App;

