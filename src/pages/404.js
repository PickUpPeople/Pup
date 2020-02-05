import React from "react";
import Layout from "components/Layout";
import SEO from "components/Seo";
import Cursor from "components/Cursor";

const NotFoundPage = () => {
  return (
    <Layout pageName="error">
      <SEO title="Error" pageName="error" />
      <div className="container">
        <div className="row">
          <div className="page-error__section">
            <h1 className="heading">Page Not Found</h1>
            <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
          </div>
        </div>
      </div>
      <Cursor pageName="home" />
    </Layout>
  );
};

export default NotFoundPage;
