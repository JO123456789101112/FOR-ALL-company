import React from "react";
import { Link } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const Payment = () => {
  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Payment gateway" />
      <div className="pb-10">
        <p>instapay :  jo__756  @instapay</p>

        <br></br>
                <p> Connect with us  on facebock bage : FORAll Company </p>
  <a href="https://www.facebook.com/profile.php?id=61559617490977">
          <button  className="w-52 h-10 bg-primeColor text-white text-lg mt-4 hover:bg-black duration-300">
          facebock
          </button>
    </a>

      </div>
    </div>
  );
};

export default Payment;
