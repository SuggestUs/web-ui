import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { lazy, Suspense } from 'react'

import CircularProgress from '@mui/material/CircularProgress';
// or
// import { CircularProgress } from '@mui/material';

const Navbar = lazy(() => import('./components/Navbar'))
const Mission = lazy(() => import('./pages/Mission'))
const WhoWeAre = lazy(() => import('./pages/WhoWeAre'))
const HomePage = lazy(() => import('./pages/HomePage'))
const Footer = lazy(() => import('./components/Footer'))
const Authentication = lazy(() => import('./Auth/Authentication'))
const SignInForDoctor = lazy(() => import('./Auth/SignInForDoctor'))
const PersonalDetailsDoctor = lazy(() => import('./Auth/PersonalDetailsDoctor'))
const DashBordForDoctor = lazy(() =>
  import('./feed-component/Doctor/DashBordForDoctor')
)

export default function MainRoute() {
  return (
    <Router>
      <main>
        <Navbar />
        <Routes>
          <Route
            path='/'
            element={
              <Suspense fallback={<CircularProgress/>}>
                <HomePage />{' '}
              </Suspense>
            }
          />
          <Route
            path='/WhoWeAre'
            element={
              <Suspense fallback={<CircularProgress/>}>
                <WhoWeAre />
              </Suspense>
            }
          />
          <Route
            path='/Mission'
            element={
              <Suspense fallback={<CircularProgress/>}>
                <Mission />
              </Suspense>
            }
          />
          <Route
            path='/Auth'
            element={
              <Suspense fallback={<CircularProgress/>}>
                <Authentication />
              </Suspense>
            }
          />
          <Route
            path='/Auth/SignInForDoctor'
            element={
              <Suspense fallback={<CircularProgress/>}>
                <SignInForDoctor />
              </Suspense>
            }
          />
          <Route
            path='/Auth/SignInForDoctor/PersonalDetails'
            element={
              <Suspense fallback={<CircularProgress/>}>
                <PersonalDetailsDoctor />
              </Suspense>
            }
          />
          <Route
            path='/Dashbord/:name?'
            element={
              <Suspense fallback={<CircularProgress/>}>
                <DashBordForDoctor />
              </Suspense>
            }
          />
        </Routes>
        <Footer />
      </main>
    </Router>
  )
}
