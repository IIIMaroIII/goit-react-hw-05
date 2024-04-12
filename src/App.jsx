import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Navigation from './components/Navigation/Navigation';
import Loader from './components/Loader/Loader';

const HomePage = lazy(() => import('./pages/HomePage'));
const MoviesPage = lazy(() => import('./pages/MoviesPage'));
const MovieDetailsPage = lazy(() => import('./pages/MovieDetailsPage'));

import NotFoundPage from './pages/NotFoundPage';

import './App.css';

function App() {
  return (
    <>
      <header>
        <nav>
          <Navigation />
        </nav>
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/movies/:movieId/*" element={<MovieDetailsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>
    </>
  );
}
export default App;
