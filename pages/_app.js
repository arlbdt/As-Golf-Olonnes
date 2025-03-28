import React from "react";
import "../styles/globals.scss";
import Layout from "../components/Layout";
import {Analytics} from '@vercel/analytics/react';

export default function MyApp({Component, pageProps}) {
  return (
    <Layout>
      <Component {...pageProps} />
      <Analytics />
    </Layout>
  );
}