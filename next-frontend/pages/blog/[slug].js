import Head from "next/head";
import { useRouter } from "next/router";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Image from "next/image";
import { createClient } from "next-sanity";
import PortableText from "react-portable-text";
import Script from "next/script";
import { useEffect } from "react";
import Link from "next/link";
import imageUrlBuilder from "@sanity/image-url";
import { AiFillGithub } from "react-icons/ai";

const Post = ({ blog, data }) => {
  const client = createClient({
    projectId: "89683gbm",
    dataset: "production",
    useCdn: false,
  });
  const builder = imageUrlBuilder(client);
  console.log(data[0].name)
  const router = useRouter();

  return (
    <>
      <>
        <Head>
          <meta charset="utf-8" />

          <meta content="IE=edge,chrome=1" />

          <meta
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
            name="viewport"
          />

          <title>{blog.title}</title>

          <meta
            property="og:title"
            content="How to become a frontend developer | Atom Template"
          />

          <meta property="og:locale" content="en_US" />

          <link rel="canonical" href="//post" />

          <meta property="og:url" content="//post" />

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
            href="/assets/styles/main.min.css"
            media="screen"
            rel="stylesheet"
          />



          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.7.2/styles/atom-one-dark.min.css"
          />

        </Head>
        <Script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.7.2/highlight.min.js"></Script>

        <Script
          defer
          src="https://unpkg.com/@alpine-collective/toolkit@1.0.0/dist/cdn.min.js"
        ></Script>

        <Script
          defer
          src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"
        ></Script>
        <Navbar />
        <div className="mt-14">
          <div className="container py-6 md:py-10 mt-24 ">
            <div className="mx-auto max-w-4xl">
              <div className="">
                <h1 className="pt-5 font-body text-3xl font-semibold text-primary sm:text-4xl md:text-5xl xl:text-6xl">
                  {blog.title}
                </h1>
                <div className="flex items-center pt-5 md:pt-10">
                  <div>
                    <img
                      src={builder.image(data[0].image)}
                      className="h-20 w-20 rounded-full border-2 border-grey-70 shadow border-purple-700"
                      alt="author image"
                    />
                  </div>
                  <div className="pl-5">
                    <span className="block font-body text-xl  text-black font-bold">
                      By {data[0].name}
                    </span>
                    <span className="block pt-1 font-body text-xl font-bold text-grey-30">
                      {blog.createdAt}
                    </span>
                  </div>
                </div>
              </div>
              <div className="prose max-w-none pt-8">
                <PortableText
                  // Pass in block content straight from Sanity.io
                  content={blog.content}
                  projectId="89683gbm"
                  dataset="production"
                  // Optionally override marks, decorators, blocks, etc. in a flat
                  // structure without doing any gymnastics
                  serializers={{
                    h1: (props) => <h1 style={{ color: "red" }} {...props} />,
                    li: ({ children }) => (
                      <li className="special-list-item">{children}</li>
                    ),
                  }}
                />
              </div>
              <div className="mt-10 flex justify-between border-t border-lila py-12">
                <a href="#" className="flex items-center">
                  <i className="bx bx-left-arrow-alt text-2xl text-primary"></i>
                  <span className="block pl-2 font-body text-lg font-bold uppercase text-primary md:pl-5">
                    Previous Post
                  </span>
                </a>
                <a href="#" className="flex items-center">
                  <span className="block pr-2 font-body text-lg font-bold uppercase text-primary md:pr-5">
                    Next Post
                  </span>
                  <i className="bx bx-right-arrow-alt text-2xl text-primary"></i>
                </a>
              </div>
              <div className="flex flex-col items-center shadow-lg  px-5 rounded-lg  border-t border-lila py-12 pt-12 md:flex-row md:items-start xl:pb-20">
                <div className="w-3/4 sm:w-2/5 lg:w-1/4 xl:w-1/5">
                  <img
                    src={builder.image(data[0].image).width(300)}
                    className="rounded-full shadow-lg border-solid border-2 border-purple-700"
                    alt="author image"
                  />
                </div>
                <div className="ml-0 text-center md:ml-10 md:w-5/6 md:text-left ">
                  <h3 className="pt-10 font-body text-2xl font-bold text-secondary md:pt-0">
                    {data[0].name}
                  </h3>
                  <p className="pt-5 font-body text-lg leading-8 text-secondary sm:leading-9 md:text-xl md:leading-9 lg:leading-9 xl:leading-9">
                    {data[0].description}
                  </p>
                  <div className="flex items-center justify-center pt-5 md:justify-start">
                    <a href={data[0].githubLink}>
                      <AiFillGithub className="text-2xl text-black hover:text-blue-500 duration-300 ease-linear" />
                    </a>
                    <a href={data[0].twitterLink} className="pl-4">
                      <i className="bx bxl-twitter text-2xl text-black hover:text-blue-500 duration-300 ease-linear"></i>
                    </a>
                    <a href="#" className="pl-4">
                      <i className="bx bxl-dribbble text-2xl text-black hover:text-blue-500 duration-300 ease-linear"></i>
                    </a>
                    <a href={data[0].linkedinLink} className="pl-4">
                      <i className="bx bxl-linkedin text-2xl text-black hover:text-blue-500 duration-300 ease-linear"></i>
                    </a>
                    <a href={data[0].instagramLink} className="pl-4">
                      <i className="bx bxl-instagram text-2xl text-black hover:text-blue-500 duration-300 ease-linear"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </>
    </>
  );
};

export default Post;

export const getServerSideProps = async (context) => {
  const { slug } = context.query;
  const client = createClient({
    projectId: "89683gbm",
    dataset: "production",
    useCdn: false,
  });
  const query = `*[_type == "blog" && slug.current == "${slug}"][0]`;
  const query2 = `*[_type == "data"]`;
  const builder = imageUrlBuilder(client);

  const blog = await client.fetch(query);
  const data = await client.fetch(query2);
  return {
    props: {
      blog,
      data,
    },
  };
};
