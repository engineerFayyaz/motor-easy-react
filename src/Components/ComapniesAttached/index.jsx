import React from "react";
import "../../Pages/Pricing/Pricing.css";
import acura from "../../assets/Company Logo/acura-logo.webp"
import aston from "../../assets/Company Logo/aston-martin-logo.png"
import audi from "../../assets/Company Logo/audi-logo.png"
import bmw from "../../assets/Company Logo/bmw-logo.png"
import bentley from "../../assets/Company Logo/bentley-logo.webp"
import bugatti from "../../assets/Company Logo/bugatti-logo.webp"
import buick from "../../assets/Company Logo/buick-logo.webp"
import cadilac from "../../assets/Company Logo/cadillac-logo.png"
import chevrolet from "../../assets/Company Logo/chevrolet-logo.webp"
import chrysler from "../../assets/Company Logo/chrysler-logo.png"
import corvette from "../../assets/Company Logo/corvette-logo.webp"
import dodge from "../../assets/Company Logo/dodge-logo.png"
import romeo from "../../assets/Company Logo/alfa-romeo-logo.webp"
import ferrari from "../../assets/Company Logo/ferrari-logo.png"
import ford from "../../assets/Company Logo/ford-logo.png"
import mustang from "../../assets/Company Logo/ford-mustang-logo.png"
import gmc from "../../assets/Company Logo/gmc-logo.png"
import honda from "../../assets/Company Logo/honda-logo.webp"
import hundai from "../../assets/Company Logo/hyundai-logo.webp"
import infiniti from "../../assets/Company Logo/infiniti-logo.webp"
import jaguar from "../../assets/Company Logo/jaguar-logo.png"
import jeep from "../../assets/Company Logo/jeep-logo.png"
import kia from "../../assets/Company Logo/kia-logo.webp"
import lamborghini from "../../assets/Company Logo/lamborghini-logo.webp"
import lexus from "../../assets/Company Logo/lexus-logo.webp"
function ComapniesAttached(){
    return(
        <>
        <div className="container mt-4">
    <div className="Pricing mt-5 mb-3">
      <h2 className="text-center">Which Manufactures Do You Cover ?</h2>
      <h5 style={{ color: "#2bace7" }} className=" text-center mt-4 mb-4">
        Motoreasy Provides Car Warranties For all Mojor car Manufactures
        Included:
      </h5>
    </div>
    {/* First Row */}
    <div className="row company_car_logo">
      <div className="col-lg-2 col-md-4 col-sm-6 mt-4">
        <div className="card text-center mx-auto">
          <img
            className=""
            src={acura}
            alt="Title"
          />
          <div className="card-body">
            <h4 className="card-title">Acura</h4>
          </div>
        </div>
      </div>
      <div className="col-lg-2 col-md-4 col-sm-6 mt-4">
        <div className="card text-center mx-auto">
          <img
            className=""
            src={romeo}
            alt="Title"
          />
          <div className="card-body">
            <h4 className="card-title">Alfa Romeo</h4>
          </div>
        </div>
      </div>
      <div className="col-lg-2 col-md-4 col-sm-6 mt-4">
        <div className="card text-center mx-auto">
          <img
            className=""
            src={aston}
            alt="Title"
          />
          <div className="card-body">
            <h4 className="card-title">Aston Martin</h4>
          </div>
        </div>
      </div>
      <div className="col-lg-2 col-md-4 col-sm-6 mt-4">
        <div className="card text-center mx-auto">
          <img
            className=""
            src={audi}
            alt="Title"
          />
          <div className="card-body">
            <h4 className="card-title">Audi</h4>
          </div>
        </div>
      </div>
      <div className="col-lg-2 col-md-4 col-sm-6 mt-4">
        <div className="card text-center mx-auto">
          <img
            className=""
            src={bentley}
            alt="Title"
          />
          <div className="card-body">
            <h4 className="card-title">Bentley</h4>
          </div>
        </div>
      </div>
      <div className="col-lg-2 col-md-4 col-sm-6 mt-4">
        <div className="card text-center mx-auto">
          <img
            className=""
            src={bmw}
            alt="Title"
          />
          <div className="card-body">
            <h4 className="card-title">BMW</h4>
          </div>
        </div>
      </div>
    </div>
    {/* Second row */}
    <div className="row company_car_logo mt-4">
      <div className="col-lg-2 col-md-4 col-sm-6 mt-4">
        <div className="card text-center mx-auto">
          <img
            className=""
            src={bugatti}
            alt="Title"
          />
          <div className="card-body">
            <h4 className="card-title">Bugatti</h4>
          </div>
        </div>
      </div>
      <div className="col-lg-2 col-md-4 col-sm-6 mt-4">
        <div className="card text-center mx-auto">
          <img
            className=""
            src={buick}
            alt="Title"
          />
          <div className="card-body">
            <h4 className="card-title">Buick</h4>
          </div>
        </div>
      </div>
      <div className="col-lg-2 col-md-4 col-sm-6 mt-4">
        <div className="card text-center mx-auto">
          <img
            className=""
            src={cadilac}
            alt="Title"
          />
          <div className="card-body">
            <h4 className="card-title">Cadillac</h4>
          </div>
        </div>
      </div>
      <div className="col-lg-2 col-md-4 col-sm-6 mt-4">
        <div className="card text-center mx-auto">
          <img
            className=""
            src={chevrolet}

            alt="Title"
          />
          <div className="card-body">
            <h4 className="card-title">Chevrolet</h4>
          </div>
        </div>
      </div>
      <div className="col-lg-2 col-md-4 col-sm-6 mt-4">
        <div className="card text-center mx-auto">
          <img
            className=""
            src={chrysler}
            alt="Title"
          />
          <div className="card-body">
            <h4 className="card-title">Chrysler</h4>
          </div>
        </div>
      </div>
      <div className="col-lg-2 col-md-4 col-sm-6 mt-4">
        <div className="card text-center mx-auto">
          <img
            className=""
            src={corvette}
            alt="Title"
          />
          <div className="card-body">
            <h4 className="card-title">Corvette</h4>
          </div>
        </div>
      </div>
    </div>
    {/* Third Row */}
    <div className="row company_car_logo mt-4">
      <div className="col-lg-2 col-md-4 col-sm-6 mt-4">
        <div className="card text-center mx-auto">
          <img
            className=""
            src={dodge}
            alt="Title"
          />
          <div className="card-body">
            <h4 className="card-title">Dodge</h4>
          </div>
        </div>
      </div>
      <div className="col-lg-2 col-md-4 col-sm-6 mt-4">
        <div className="card text-center mx-auto">
          <img
            className=""
            src={ferrari}

            alt="Title"
          />
          <div className="card-body">
            <h4 className="card-title">Ferrari</h4>
          </div>
        </div>
      </div>
      <div className="col-lg-2 col-md-4 col-sm-6 mt-4">
        <div className="card text-center mx-auto">
          <img
            className=""
            src={ford}

            alt="Title"
          />
          <div className="card-body">
            <h4 className="card-title">Ford</h4>
          </div>
        </div>
      </div>
      <div className="col-lg-2 col-md-4 col-sm-6 mt-4">
        <div className="card text-center mx-auto">
          <img
            className=""
            src={mustang}

            alt="Title"
          />
          <div className="card-body">
            <h4 className="card-title">Ford Mustang</h4>
          </div>
        </div>
      </div>
      <div className="col-lg-2 col-md-4 col-sm-6 mt-4">
        <div className="card text-center mx-auto">
          <img
            className=""
            src={gmc}
            alt="Title"
          />
          <div className="card-body">
            <h4 className="card-title">Gmc</h4>
          </div>
        </div>
      </div>
      <div className="col-lg-2 col-md-4 col-sm-6 mt-4">
        <div className="card text-center mx-auto">
          <img
            className=""
            src={honda}
            alt="Title"
          />
          <div className="card-body">
            <h4 className="card-title">Honda</h4>
          </div>
        </div>
      </div>
    </div>
    {/* Fourth Row  */}
    <div className="row company_car_logo mt-4">
      <div className="col-lg-2 col-md-4 col-sm-6 mt-4">
        <div className="card text-center mx-auto">
          <img
            className=""
            src={infiniti}
            alt="Title"
          />
          <div className="card-body">
            <h4 className="card-title">Infiniti</h4>
          </div>
        </div>
      </div>
      <div className="col-lg-2 col-md-4 col-sm-6 mt-4">
        <div className="card text-center mx-auto">
          <img
            className=""
            src={jaguar}
            alt="Title"
          />
          <div className="card-body">
            <h4 className="card-title">Jaguar</h4>
          </div>
        </div>
      </div>
      <div className="col-lg-2 col-md-4 col-sm-6 mt-4">
        <div className="card text-center mx-auto">
          <img
            className=""
            src={jeep}
            alt="Title"
          />
          <div className="card-body">
            <h4 className="card-title">Jeep</h4>
          </div>
        </div>
      </div>
      <div className="col-lg-2 col-md-4 col-sm-6 mt-4">
        <div className="card text-center mx-auto">
          <img
            className=""
            src={kia}
            alt="Title"
          />
          <div className="card-body">
            <h4 className="card-title">Kia</h4>
          </div>
        </div>
      </div>
      <div className="col-lg-2 col-md-4 col-sm-6 mt-4">
        <div className="card text-center mx-auto">
          <img
            className=""
            src={lamborghini}
            alt="Title"
          />
          <div className="card-body">
            <h4 className="card-title">Lamborghini</h4>
          </div>
        </div>
      </div>
      <div className="col-lg-2 col-md-4 col-sm-6 mt-4">
        <div className="card text-center mx-auto">
          <img
            className=""
            src={lexus}
            alt="Title"
          />
          <div className="card-body">
            <h4 className="card-title">Lexus</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
        </>
    );
}
export default ComapniesAttached;