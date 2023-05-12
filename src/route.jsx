import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { lazy, Suspense } from 'react'

import CircularProgress from '@mui/material/CircularProgress';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Mission from './pages/Mission'
import WhoWeAre from './pages/WhoWeAre'
import HomePage from './pages/HomePage'
import Authentication from './Auth/Authentication';
import SignInForDoctor from './Auth/SignInForDoctor';
import PersonalDetailsDoctor from './Auth/PersonalDetailsDoctor';
import ProfessionalDetails from './Auth/ProfessionalDetails';
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
            path='/Auth/ProfessionalDetails'
            element={
              <Suspense fallback={<CircularProgress/>}>
                <ProfessionalDetails />
              </Suspense>
            }
          />
          <Route
            path='/Auth/PersonalDetails'
            element={
              <Suspense fallback={<CircularProgress/>}>
                <PersonalDetailsDoctor />
              </Suspense>
            }
          />
          <Route
            path='/Auth/SignInForDoctor'
            element={
              <Suspense fallback={<CircularProgress/>}>
                <SignInForDoctor/>
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
