import React from "react";
import { useParams } from "react-router";

import BackButton from "../BackButton/BackButton";

import "./ColourPage.css";

export function ColourPage({ item }) {
  const { id } = useParams();
  return (
    <>
      <section className="section colour-section">
        <BackButton
          pageLink={item[id - 1].path.slice(0, -1)}
          name={item[id - 1].coloursAndSurface}
        />
        <h1 className="headline colour-headline">{item[id - 1].name}</h1>
        <p className="border-line border-line-black"></p>

        <div className=" colour-container">
          <img src={item[id - 1].image} alt="" className="img-colour" />
          <div className="colour-details">
            <h1 className="colour-name">
              {`${item[id - 1]._id} ${item[id - 1].name}`} :
            </h1>

            <div className="product-specification">
              <h1 className="product-specification-title">
                Product Specifications :
              </h1>
              <ul className="product-specification-list">
                <li className="specification">
                  {`Product classes :
                  ${item[id - 1].product_specifications.product_classes}`}
                </li>
                <li className="specification">
                  {`Colour Series :
                  ${item[id - 1].product_specifications.colour_series}`}
                </li>
                <li className="specification">
                  {`Colour Scheme :
                  ${item[id - 1].product_specifications.colour_scheme}`}
                </li>
                <li className="specification">
                  {`Colour Gloss :
                  ${item[id - 1].product_specifications.colour_gloss}`}
                </li>
                <li className="specification">
                  {` Colour Specialities :
                  ${item[id - 1].product_specifications.colour_specialities}`}
                </li>
              </ul>
              <a
                className="pdf-link"
                target="_blank"
                href={`${item[id - 1].pdf}`}
              >
                <ion-icon name="download-outline"></ion-icon>
                Download PDF
                <p>{`${item[id - 1].chart} Colour Chart`}</p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ColourPage;
