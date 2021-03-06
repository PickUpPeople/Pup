import React from "react";
import Layout from "components/Layout";

const content = () => {
  return (
    <Layout pageName="content">
      <div className="page-content__circle">
        <svg viewBox="0 0 679 681">
          <path d="M445.77 341.44c0-42-25.61-80.69-64-97.54-38.14-16.73-84.25-8.77-114.66 19.64-30.66 28.65-41.89 73.67-27.91 113.3s51 67.55 92.85 70.67c41.49 3.08 82.43-19.78 101.59-56.71a107.26 107.26 0 0012.13-49.36z" />
          <path d="M658.42 341.5c-.37-40.94-7.67-81.89-23.37-119.83a319 319 0 00-168.7-172.81c-37.8-16.58-78.61-25-119.77-26.26a309.58 309.58 0 00-120 20.56c-38.4 14.89-74.09 36.43-104.2 64.64A319.12 319.12 0 0020.8 326.92a319.06 319.06 0 0080.28 226.53A324.08 324.08 0 00199.15 628c37.14 18.29 77.57 28.73 118.8 31.79a318.94 318.94 0 00227.66-74.85 319.08 319.08 0 00111.55-215c.9-9.47 1.18-18.94 1.26-28.44z" />
        </svg>
      </div>
      <div className="page-content__court ">
        <svg viewBox="0 0 1000 1000">
          <path d="M903.36 977.78V24.8H97.31v952.98" />
          <path d="M97.31 259.89H11.09" />
          <path d="M97.31 419.42H11.09" />
          <path d="M990.1 259.89h-86.21" />
          <path d="M990.1 419.42h-86.21" />
          <path d="M30.67 591.46h66.12v99.19H30.67z" />
          <path d="M903.89 591.46h66.12v99.19h-66.12z" />
        </svg>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <article className="page-content__main">
            <div className="page-content__close">
              <a href="/" className="page-content__close-btn">
                close
              </a>
            </div>
            <div className="page-content__image">
              <img src="https://www.fillmurray.com/800/900" alt="" />
            </div>
            <div className="page-content__header">
              <h1 className="heading-large">KELLY</h1>
            </div>
            <div className="page-content__text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                vitae venenatis diam. Etiam eu turpis id nunc fringilla
                imperdiet. Morbi efficitur est ut magna pulvinar cursus. Integer
                mattis elit justo, vel mattis lacus bibendum sed. Integer nec
                tortor maximus, volutpat ex at, tincidunt ante. Aliquam
                consectetur ut tellus ultricies pretium.
              </p>
              <p>
                Sed condimentum lectus in lectus maximus scelerisque. Nunc vitae
                vehicula ante. Donec finibus tortor quis mollis semper. Maecenas
                fringilla bibendum ipsum, quis molestie ipsum porta a.
                Suspendisse potenti. Aenean laoreet lectus eu orci scelerisque,
                at pretium risus elementum.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                vitae venenatis diam. Etiam eu turpis id nunc fringilla
                imperdiet. Morbi efficitur est ut magna pulvinar cursus. Integer
                mattis elit justo, vel mattis lacus bibendum sed. Integer nec
                tortor maximus, volutpat ex at, tincidunt ante. Aliquam
                consectetur ut tellus ultricies pretium.
              </p>
              <p>
                Sed condimentum lectus in lectus maximus scelerisque. Nunc vitae
                vehicula ante. Donec finibus tortor quis mollis semper. Maecenas
                fringilla bibendum ipsum, quis molestie ipsum porta a.
                Suspendisse potenti. Aenean laoreet lectus eu orci scelerisque,
                at pretium risus elementum.
              </p>
            </div>
          </article>
        </div>
      </div>
    </Layout>
  );
};

export default content;
