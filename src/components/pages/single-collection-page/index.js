import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import setContent from '../../../utils/setContent';
import Breadcrumbs from '../../breadcrumbs';
import Skeleton from './skeleton';

import useKinopoiskService from '../../../services/use-kinopoisk-server';
import CompilationList from '../../compilation-list';

import './single-collection-page.scss'

const SingleCollectionPage = () => {
   const { compilationId } = useParams();

   const [compilation, setCompilationList] = useState([]);

   const { getCompilation, clearError, setProcess, process } = useKinopoiskService();

   // , getMovieID

   useEffect(() => {
      updateCompilation()
      // getMovieID(1022484).then(res => console.log(JSON.stringify(res)))

      //eslint-disable-next-line
   }, [compilationId])


   const updateCompilation = () => {
      clearError();
      getCompilation(compilationId)
         .then(onCompilationLoaded)
         .then(() => setProcess('confirmed'))
   }

   const onCompilationLoaded = (compilation) => {
      setCompilationList(compilation)
   }

   return (
      <>
         {setContent(process, View, compilation, Skeleton)}
      </>
   )
}

const View = ({ data }) => {

   const { title, subtitle, films } = data;

   const breadcrumbs = [
      { link: '/', title: 'Главная' },
      { link: '/single_collection', title: 'Подборки фильмов' },
      { link: '/', title: title }
   ]

   return (
      <section className='compilation container'>
         <Helmet>
            <meta name="description" content={`${title}`} />
            <title>{`${title}`}</title>
         </Helmet>
         <Breadcrumbs props={breadcrumbs} />
         <h2 className="compilation__title">{title}</h2>
         <p className="compilation__subtitle">{subtitle}</p>
         <div className="line"></div>
         <CompilationList films={films} />
      </section>
   )
}

export default SingleCollectionPage;