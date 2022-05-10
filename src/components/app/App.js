import { useState, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Page404 } from '../pages';
import Header from '../header/header';
import Footer from '../footer/footer';
import Spinner from '../spinner/spinner'
import ModalSearch from '../modal-search/modal-search'
import ModalLogin from '../modal-login/modal-login';

import './App.scss';
import './fonts.scss';

const MainPage = lazy(() => import('../pages/main-page'));
const SingleMoviePage = lazy(() => import('../pages/single-movie-page/single-movie-page'));
const SingleCollectionPage = lazy(() => import('../pages/single-collection-page/single-collection-page'));


function App() {
   const [modalSearch, setModalSearch] = useState(false)
   const [modalLogin, setModalLogin] = useState(false)

   return (
      <Router>
         <div className="page">
            <Header setModalLogin={setModalLogin} setModalSearch={setModalSearch} />
            <ModalSearch open={modalSearch} onClose={() => setModalSearch(false)} />
            <ModalLogin open={modalLogin} onClose={() => setModalLogin(false)} />
            <main>
               <Suspense fallback={<Spinner />}>
                  <Routes>
                     <Route path="/" element={<MainPage />} />
                     <Route path="/movie/:movieId" element={<SingleMoviePage />} />
                     <Route path="/single_collection/:compilationId" element={<SingleCollectionPage />} />
                     <Route path="*" element={<Page404 />} />
                  </Routes>
               </Suspense>
            </main>
            <Footer />
         </div>
      </Router>
   );
}

export default App;