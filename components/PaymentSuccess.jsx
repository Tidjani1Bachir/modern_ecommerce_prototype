"use client"
import React, {useState} from 'react'
import { CheckCircle } from "lucide-react"


import { IoCloseCircle } from "react-icons/io5";
import "../styles/Home.module.css"
const PaymentSuccess = () => {
  const [close, setClose] = useState(true)

  const handleClick = () => { 
    setClose(!close)
  }
  return (
     <div className="main-div-payment-success">
      
      {close &&
       <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Payment Successful!</h2>
        </div>
        <div className="modal-body">
          <CheckCircle className="success-icon" />
          <p className="success-message">
            Thank you for your purchase. Your order has been successfully processed.
          </p>
          
        </div>
        <div className="modal-footer">
          
         
        </div>
        
      </div>
      <div className=" display-close-button-top"  ><IoCloseCircle className="icoon button-secondary" onClick={handleClick} /></div>
    </div>

    
}

{/* onClick={setClose(!close)} */}


    </div>
  )
}

export default PaymentSuccess













