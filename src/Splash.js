import React from 'react';
import './Splash.css'
import flower1 from "././images/flower1.png";
// import flower2 from "././images/flower2.png";
import flower3 from "././images/flower3.png";
import flower4 from "././images/flower4.png";
import flower5 from "././images/flower5.png";
// import flower6 from "././images/flower6.png";
import flower7 from "././images/flower7.png";


function Splash() {
    return (
        <div className="main__splash">
           <section>
               <h3>אבן דרך</h3>
               <div className="image__main">
                   <div className="flower"><img src={flower1} /></div>
                   <div className="flower"><img src={flower4} /></div>
                   <div className="flower"><img src={flower3} /></div>
                   <div className="flower"><img src={flower4} /></div>
                   <div className="flower"><img src={flower5} /></div>
                   <div className="flower"><img src={flower1} /></div>
                   <div className="flower"><img src={flower7} /></div>
               </div>

               <div className="image__main main2">
                   <div className="flower"><img src={flower1} /></div>
                   <div className="flower"><img src={flower1} /></div>
                   <div className="flower"><img src={flower3} /></div>
                   <div className="flower"><img src={flower4} /></div>
                   <div className="flower"><img src={flower5} /></div>
                   <div className="flower"><img src={flower4} /></div>
                   <div className="flower"><img src={flower7} /></div>
               </div>

               <div className="image__main main3">
                   <div className="flower"><img src={flower1} /></div>
                   <div className="flower"><img src={flower7} /></div>
                   <div className="flower"><img src={flower3} /></div>
                   <div className="flower"><img src={flower4} /></div>
                   <div className="flower"><img src={flower5} /></div>
                   <div className="flower"><img src={flower3} /></div>
                   <div className="flower"><img src={flower7} /></div>
               </div>
               </section> 
        </div>
    )
}

export default Splash
