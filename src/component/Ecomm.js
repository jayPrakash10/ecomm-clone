import React, { useEffect } from 'react';
import './Ecomm.css'

function Ecomm(){

    function store(){
        localStorage.phone=document.getElementById('phone').value; 
        document.getElementById('content').style.display='none'; 
        document.getElementById('thankyou').style.display='block'
    }

    useEffect(()=>{
        if(localStorage.phone==undefined){
            document.getElementById('content').style.display='block'
            document.getElementById('thankyou').style.display='none'
        }
        else{
            document.getElementById('content').style.display='none'
            document.getElementById('thankyou').style.display='block'
        }
    },[])

    function toggle(){
        let bt = document.getElementById('btn');
        if(document.getElementById('phone').value.length==10){
            bt.setAttribute('onClick',"{ localStorage.phone=document.getElementById('phone').value; document.getElementById('content').style.display='none'; document.getElementById('thankyou').style.display='block'}");
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
                <div><span> Congratulations</span> &#129321;</div>
            </div>
            <div className='offercard'></div>
            <div id='content'>
                <div className='text'>You have won Paytm Movie Gift Card for <strong>your last order</strong></div>
                <div>
                    <input id='phone' className='mobile' autoComplete='off' maxLength='10' type='tel' placeholder='Enter Mobile Number' pattern="[0-9]{10}"
                        onKeyPress={(event) => {
                                                    if (!/[0-9]/.test(event.key)) {
                                                    event.preventDefault();
                                                }
                        }} 
                        onChange={()=>{toggle()}}/>
                </div>
                <button id='btn' className='button disable'><strong> Wow! Get my Paytm Gift Card </strong> <i class="fa fa-chevron-right" aria-hidden="true"></i></button>
                <div className='footer'><img src='/images/rupay.png' alt=''/></div>
            </div>
            <div id='thankyou'>
                Thank You &#128578;
                <p>From coder <button onClick={()=>{localStorage.removeItem('phone')}}>Flush Storage</button> and refresh page</p>
            </div>

        </div>

    )
}

export default Ecomm;