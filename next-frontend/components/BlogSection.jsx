import React from 'react'
import Link from 'next/link';

const BlogSection = ({ blogs, data, builder }) => {
  return (
    <div>
      <div className="bg-grey-50" id="blog">
        <div className="container py-16 md:py-20  p-10">
          <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
            I also like to write
          </h2>
          <h4 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
            Check out my latest posts!
          </h4>
          <div className="mx-auto grid w-full grid-cols-1 gap-6 pt-12 sm:w-3/4 lg:w-full lg:grid-cols-3 xl:gap-10">
            {blogs.map((item) => {
              return (
                <div className="rounded-lg shadow-lg hover:scale-110 bg-white duration-100 ease-linear cursor-pointer">
                  <Link
                    key={item.slug.current}
                    href={"/blog/" + item.slug.current}
                    className="shadow-lg rounded-lg hover:scale-100 duration-200 ease-linear"
                  >
                    <div>
                      <div
                        style={{
                          backgroundImage: `url(${builder
                              .image(item.blogimage)
                              .width(200)
                              .url() || "/assets/img/post-01.png"
                            })`,
                        }}
                        className="group relative h-72 rounded-lg shadow-lg m-2 bg-cover bg-center bg-no-repeat sm:h-84 lg:h-64 xl:h-72"
                      >
                        <span className="absolute inset-0 block bg-gradient-to-b from-blog-gradient-from to-blog-gradient-to bg-cover bg-center bg-no-repeat opacity-10 transition-opacity group-hover:opacity-50"></span>
                        <span className="absolute right-0 bottom-0 mr-4 mb-4 block rounded-full   cursor-pointer  px-6 py-2 text-center font-body text-sm font-bold uppercase text-white md:text-base hover:bg-primary duration-200 ease">
                          Read More
                        </span>
                      </div>
                      <div className="bg-white py-6 px-5 xl:py-8">
                        <span className="block font-body text-lg font-semibold text-black">
                          {item.title}
                        </span>
                        <span className="block pt-2 font-body text-grey-20">
                          {item.metadesc}
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogSection