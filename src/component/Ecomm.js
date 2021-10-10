import React from 'react';
import './Ecomm.css'

function Ecomm(){

    function toggle(){
        let bt = document.getElementById('btn');
        if(document.getElementById('phone').value.length==10){
            bt.setAttribute('onClick','console.log("hello")');
            document.getElementById('btn').classList.remove('disable')
        }
        else{
            bt.removeAttribute('onClick');
            document.getElementById('btn').classList.add('disable')
        }
    }

    return(
        <div>
            <div className='topcontainer'>
                <img src='/images/paytm.png' alt=''/>
                <div>&#129321; &#129321;</div>
            </div>
            <div className='offercard'></div>
            <div className='text'>You have won Paytm Movie Gift Card for <strong>your last order</strong></div>
            <div>
                <input id='phone' className='mobile' maxLength='10' type='tel' placeholder='Enter Mobile Number' pattern="[0-9]{10}"
                    onKeyPress={(event) => {
                                                if (!/[0-9]/.test(event.key)) {
                                                event.preventDefault();
                                            }
                      }} 
                    onChange={()=>{toggle()}}/>
            </div>
            <button id='btn' className='button disable'> Wow! Get my Paytm Gift Card <i class="fa fa-chevron-right" aria-hidden="true"></i></button>
            <div className='footer'><img src='/images/rupay.png' alt=''/></div>
        </div>

    )
}

export default Ecomm;