import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Glenn Lanzer III</h1>
    <p>JavaScript developer with experience in React and many more tools.</p>
    <p>Texas over Oklahoma! Hook'em!</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/about/">Go to about</Link>
  </Layout>
);

export default IndexPage;
