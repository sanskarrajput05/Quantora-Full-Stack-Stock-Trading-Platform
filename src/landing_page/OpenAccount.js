import React from 'react';

function OpenAccount() {
    return ( 
        <div className='container p-5'>
            <div className='row text-center'>
                {/* <img src='Media\images\homeHero.png' alt='hero image' className='mb-5'/> */}
                <h1 className='mb-1'>Open a Zerodha account</h1>
                <p>Modern platforms and apps, &#8377;0 investments, and flat &#8377;20 intraday and F&O trades. </p>
                <button className='p-2 mb-5 btn btn-primary fs-5' style={{width:"20%" , margin:"0 auto"}}>Signup up now</button>
            </div>
        </div>
     );
}

export default OpenAccount;