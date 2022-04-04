import './promo.scss';
import PromoCard from './promo-card/promo-card';

const Promo = () => {

   return (
      <section className="promo">
         <div className="promo__container container">
            <h2 className="promo__title title">Рекомендуем вам посмотреть</h2>
            <div className="promo__slider">
               <div className="promo__wrapper">
                  <PromoCard />
               </div>
            </div>
            {/* <div className="promo__buttons">
               <button className="promo__buttons-prev">left</button>
               <button className="promo__buttons-next">rigth</button>
            </div> */}
         </div>
      </section>
   )
}

export default Promo;