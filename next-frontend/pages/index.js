import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { createClient } from "next-sanity";
import PortableText from "react-portable-text";
import Script from "next/script";
import { useEffect } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import imageUrlBuilder from "@sanity/image-url";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Clients from "../components/Clients";
import Experience from "../components/Experience";
import Stats from "../components/Stats";
import Contact from "../components/Contact";
import About from "../components/About";
import Hero from "../components/Hero";
import BlogSection from "../components/BlogSection";
import Footer from "../components/Footer";
import BackTop from "../components/BackTop";

export default function Home({ blogs, data }) {
  const client = createClient({
    projectId: "89683gbm",
    dataset: "production",
    useCdn: false,
  });
  const builder = imageUrlBuilder(client);

  useEffect(() => {
    console.log(blogs);
    console.log(data);
  }, []);

  return (
    <>
      <>
        <Script src="/assets/js/main.js"></Script>
        <Head>
          <meta charset="utf-8" />

          <meta content="IE=edge,chrome=1" http-equiv="X-UA-Compatible" />

          <meta
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
            name="viewport"
          />

          <title>Homepage | {data[0].name}</title>

          <meta property="og:title" content="Homepage | Atom Template" />

          <meta property="og:locale" content="en_US" />

          <link rel="canonical" href="//" />

          <meta property="og:url" content="//" />

          <meta
            name="description"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />

          <link rel="icon" type="image/png" href="/assets/img/favicon.png" />

          <meta name="theme-color" content="#5540af" />

          <meta property="og:site_name" content="Atom Template" />

          <meta property="og:image" content="//assets/img/social.jpg" />

          <meta name="twitter:card" content="summary_large_image" />

          <meta name="twitter:site" content="@tailwindmade" />

          <link
            crossorigin="crossorigin"
            href="https://fonts.gstatic.com"
            rel="preconnect"
          />

          <link
            as="style"
            href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&family=Raleway:wght@400;500;600;700&display=swap"
            rel="preload"
          />

          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&family=Raleway:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />

          <link
            href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"
            rel="stylesheet"
          />

          <link
            crossorigin="anonymous"
            href="/assets/styles/main.min.css"
            media="screen"
            rel="stylesheet"
          />

          <script
            defer
            src="https://unpkg.com/@alpine-collective/toolkit@1.0.0/dist/cdn.min.js"
          ></script>

          <script
            defer
            src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"
          ></script>
        </Head>
        <Navbar data={data[0]} />
      </>
      <>
        <div>
          <Hero data={data} builder={builder} />
          <About data={data} />
          <Skills />
          <Projects />

          <Clients />
          <Experience />
          <Stats />
          <BlogSection data={data[0]} blogs={blogs} builder={builder} />
          <Contact data={data}/>
        </div>
        <Footer data={data} />
      </>
    </>
  );
}

export async function getServerSideProps(context) {
  const client = createClient({
    projectId: "89683gbm",
    dataset: "production",
    useCdn: false,
  });
  const query = `*[_type == "blog"][0...3]`;
  const query2 = `*[_type == "data"]`;
  const blogs = await client.fetch(query);
  const data = await client.fetch(query2);
  return {
    props: {
      blogs,
      data,
    },
  };
}
