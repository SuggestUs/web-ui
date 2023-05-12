import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { lazy, Suspense } from 'react'

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
              <Suspense fallback={<>Loading</>}>
                <HomePage />{' '}
              </Suspense>
            }
          />
          <Route
            path='/WhoWeAre'
            element={
              <Suspense fallback={<>Loading</>}>
                <WhoWeAre />
              </Suspense>
            }
          />
          <Route
            path='/Mission'
            element={
              <Suspense fallback={<>Loading</>}>
                <Mission />
              </Suspense>
            }
          />
          <Route
            path='/Auth'
            element={
              <Suspense fallback={<>Loading</>}>
                <Authentication />
              </Suspense>
            }
          />
          <Route
            path='/Auth/SignInForDoctor'
            element={
              <Suspense fallback={<>Loading</>}>
                <SignInForDoctor />
              </Suspense>
            }
          />
          <Route
            path='/Auth/SignInForDoctor/PersonalDetails'
            element={
              <Suspense fallback={<>Loading</>}>
                <PersonalDetailsDoctor />
              </Suspense>
            }
          />
          <Route
            path='/home'
            element={
              <Suspense fallback={<>Loading</>}>
                <DashBordForDoctor />
                {/* <PersonalDetailsDoctor /> */}
              </Suspense>
            }
          />
        </Routes>
        <Footer />
      </main>
    </Router>
  )
}
