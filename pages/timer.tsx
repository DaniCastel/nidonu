import Head from "next/head";
import { GetStaticProps } from "next";

import { getSortedPostsData } from "../lib/posts";
import utilStyles from "../styles/utils.module.css";
import Layout, { siteTitle } from "../components/layout";
import Timer from "../components/timer/timer";

export default function TimerPage() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Timer />
      <section className="flex justify-center">
        <a href="https://www.freepik.es/vector-gratis/patrones-fisuras-abejas-flores_26318381.htm#from_view=detail_author">
          Imagen de lesyaskripak
        </a>{" "}
        en Freepik
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};
