import React from 'react';
import HomeFactSingleItem from '../../../../components/HomeFactSingleItem/HomeFactSingleItem';

const FactArea = () => {
   return (
      <>
         <section className="tp-fact-area theme-dark-bg pt-75 pb-20">
            <div className="container">
               <div className="row">
                  <HomeFactSingleItem icon="24-hours-support" fact_num="1" title="Daily" />
                  <HomeFactSingleItem icon="broom" fact_num="7" title="Weekly" />
                  <HomeFactSingleItem icon="24-hours-support" fact_num="14" title="Bi-Weekly" />
                  <HomeFactSingleItem icon="broom" fact_num="30" title="Monthly" />
               </div>
            </div>
         </section>
      </>
   );
};

export default FactArea;