import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Test1 from './Test1';
import Test2 from './components/Test2';
import Test3 from './components/Test3';
import Test4 from './components/Test4';
import Test5 from './components/Test5';


// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "contact",
//         element: <Contact />
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='test1' element={<Test1/>}/>
      <Route path='test2/:var' element={<Test2/>}/>
      <Route path='test3' element={<Test3/>}/>
      <Route path='test4/:var1/:var2' element={<Test4 />} />
      <Route path='test5' element={<Test5/>}/>
      {/* <Route path='' element={<Home />} />
      <Route path='Signup' element={<Signup />} />
      <Route path='GetUrls' element={<GetUrls />} />
      <Route path='SignIn' element={<SignIn />} /> */}
      {/* <Route path='user/:userid' element={<User />} /> */}
    </Route>
  )
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
