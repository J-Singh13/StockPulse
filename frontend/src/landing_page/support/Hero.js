import React from 'react';

function Hero() {
    return ( 
        <section className='container-fluid' id='supportHero'>
            <div className='p-4' id='supportWrapper'>
                <h4>Support Portal</h4>
                <a href=''>Track Tickets</a>
            </div>
            <div className='row p-3 m-3'>
            <div className='col-6 p-3' id='head-heading'>
                <h1 className='fs-3' id='heading'>Search for an answer or browse help topics to create a ticket</h1>
                <input placeholder='E.g How do I activated F&O, why is my order..'/><br/>
                <a href= "" style={{lineHeight:"2.5"}}> Track account opening </a>
                <a href= "" style={{lineHeight:"2.5"}}> Track segment activation </a>
                <a href= "" style={{lineHeight:"2.5"}}> Intraday margins </a>
                <a href= "" style={{lineHeight:"2.5"}}>Kite user manual </a>
            </div>
            <div className='col-6 p-3' id='featured'>
                <h1 className='fs-3'>Featured</h1>
               
                <ol>
                    <li> <a href= "" > Change in expiry day of NSE derivative contracts from April </a></li>
                    <li><a href= ""> 
                    Change in mutual fund settlement cycle due to settlement holiday on account of Annual Bank closing (April 01, 2025) </a></li>
                </ol>
                
            </div>
            </div>
        </section>
     );
}

export default Hero;