import React from "react";
import { useParams } from "react-router";

import "./Colour.css";

export function Colour({ colour }) {
  return (
    <>
      <section className="section colour-section">
        <h1 className="headline colour-headline">{colour.name}</h1>
        <p className="border-line border-line-black colour-border-line"></p>

        <div className=" colour-container">
          <div className="colour-img-box">
            <img src={colour.image} alt="" className="img-colour" />
          </div>

          <div className="colour-details">
            <h1 className="colour-name">{`${colour._id} ${colour.name}`} :</h1>

            <div className="product-specification">
              <h1 className="product-specification-title">
                Product Specifications :
              </h1>
              <ul className="product-specification-list">
                <li className="specification">
                  {`Product classes :
                  ${colour.product_specifications.product_classes}`}
                </li>
                <li className="specification">
                  {`Colour Series :
                  ${colour.product_specifications.colour_series}`}
                </li>
                <li className="specification">
                  {`Colour Scheme :
                  ${colour.product_specifications.colour_scheme}`}
                </li>
                <li className="specification">
                  {`Colour Gloss :
                  ${colour.product_specifications.colour_gloss}`}
                </li>
                <li className="specification">
                  {` Colour Specialities :
                  ${colour.product_specifications.colour_specialities}`}
                </li>
              </ul>
              <a className="pdf-link" target="_blank" href={`${colour.pdf}`}>
                <ion-icon name="download-outline"></ion-icon>
                Download PDF
                <p>{`${colour.chart} Colour Chart`}</p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Colour;
