import React from 'react';
import styles from "./style";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Bussiness  from "./components/Bussiness";
// import button from "./components/button";
// import carddeal from "./components/carddeal";
// import billing from "./components/billing";
// import client from "./components/client";
// import CTA from "./components/CTA";
// import feedbackcard from "./components/feedbackcard";
// import footer from "./components/footer";
// import getStarted from "./components/getStarted";
// import stats from "./components/stats";
import Testimonial from "./components/testimonials"

const App = () => (
  
  <div className='bg-primary w-full overflow-hidden'>
    <div className = {`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar/>
        
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero/>
      </div>
    </div>
    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Bussiness/>
        
      </div>
    </div>


  </div>
)

export default App