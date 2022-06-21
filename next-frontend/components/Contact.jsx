import React from 'react'

const Contact = ({data}) => {
  return (
    <div>
        
        <div className="container py-16 md:py-20" id="contact">
            <h2 className="text-center font-header text-4xl font-semibold  uppercase text-primary sm:text-5xl lg:text-6xl">
              Here's a contact form
            </h2>
            <h4 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
              Have Any Questions?
            </h4>
            <div className="mx-auto w-full pt-5 text-center sm:w-2/3 lg:pt-6">
              <p className="font-body text-grey-10">
                Lorem ipsum dolor sit amet consectetur adipiscing elit hendrerit
                condimentum turpis nisl sem, viverra habitasse urna ante
                lobortis fermentum accumsan. Viverra habitasse urna ante
                lobortis fermentum accumsan.
              </p>
            </div>
            <form href="mailto:praju.ladkat@gmail.com" className="mx-auto w-full pt-10 sm:w-3/4">
              <div className="flex flex-col md:flex-row">
                <input
                  className="mr-3 w-full rounded border-grey-50 px-4 py-3 font-body text-black md:w-1/2 lg:mr-5"
                  placeholder="Name"
                  type="text"
                  id="name"
                />
                <input
                  className="mt-6 w-full rounded border-grey-50 px-4 py-3 font-body text-black md:mt-0 md:ml-3 md:w-1/2 lg:ml-5"
                  placeholder="Email"
                  type="text"
                  id="email"
                />
              </div>
              <textarea
                className="mt-6 w-full rounded border-grey-50 px-4 py-3 font-body text-black md:mt-8"
                placeholder="Message"
                id="message"
                cols="30"
                rows="10"
              ></textarea>
              <button className="mt-6 flex items-center justify-center rounded bg-primary px-8 py-3 font-header text-lg font-bold uppercase text-white hover:bg-grey-20">
                Send
                <i className="bx bx-chevron-right relative -right-2 text-3xl"></i>
              </button>
            </form>
            <div className="rounded-2xl shadow flex flex-col pt-16 lg:flex-row ">
              <div className="w-full px-6 py-3 sm:py-8 lg:w-1/3">
                <div className="flex items-center">
                  <i className="bx bx-phone text-2xl text-grey-40"></i>
                  <p className="pl-2 font-body font-bold uppercase text-grey-40 lg:text-lg">
                    My Phone
                  </p>
                </div>
                <a href="tel:+919834477319" className="pt-2 text-left font-body font-bold text-primary lg:text-lg">
                  {data[0].mobileNo}
                </a>
              </div>
              <div className="w-full  px-6 py-3 sm:py-8 lg:w-1/3">
                <div className="flex items-center">
                  <i className="bx bx-envelope text-2xl text-grey-40"></i>
                  <p className="pl-2 font-body font-bold uppercase text-grey-40 lg:text-lg">
                    My Email
                  </p>
                </div>
                <a href='mailto:praju.ladkat@gmail.com' className="pt-2 text-left font-body font-bold text-primary lg:text-lg">
                  {data[0].email}
                </a>
              </div>
              <div className="w-full  px-6 py-3 sm:py-8 lg:w-1/3">
                <div className="flex items-center">
                  <i className="bx bx-map text-2xl text-grey-40"></i>
                  <p className="pl-2 font-body font-bold uppercase text-grey-40 lg:text-lg">
                    My Address
                  </p>
                </div>
                <p className="pt-2 text-left font-body font-bold text-primary lg:text-lg">
                  {data[0].address}
                </p>
              </div>
            </div>
          </div>

          <div
            className="h-72 bg-cover bg-center bg-no-repeat sm:h-64 md:h-72 lg:h-96  p-2 mb-3 ml-3 mr-3 rounded-xl shadow-lg"
            
          >
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.274981308778!2d73.90661341457812!3d18.561637572762173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c13ee7d72457%3A0x6a219f2c38e4a8e3!2sSakore%20Nagar%2C%20Viman%20Nagar%2C%20Pune%2C%20Maharashtra%20411014!5e0!3m2!1sen!2sin!4v1655735878499!5m2!1sen!2sin" className='w-full h-full' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>

          <div
            className="relative bg-primary bg-cover bg-center bg-no-repeat py-16 bg-blend-multiply lg:py-24"
            style={{ backgroundImage: "url(/assets/img/bg-cta.jpg)" }}
          >
            <div className="container relative z-30">
              <h3 className="text-center font-header text-3xl uppercase leading-tight tracking-wide text-white sm:text-4xl lg:text-5xl">
                Keep <span className="font-bold">up-to-date</span> <br />
                with what I'm up to
              </h3>
              <form className="mt-6 flex flex-col justify-center sm:flex-row">
                <input
                  className="w-full rounded px-4 py-3 font-body text-black sm:w-2/5 sm:py-4 lg:w-1/3"
                  type="text"
                  id="email"
                  placeholder="Give me your Email"
                />
                <button className="mt-2 rounded bg-yellow px-8 py-3 font-body text-base font-bold uppercase text-primary transition-colors hover:bg-primary hover:text-white focus:border-transparent focus:outline-none focus:ring focus:ring-yellow sm:ml-2 sm:mt-0 sm:py-4 md:text-lg">
                  Join the club
                </button>
              </form>
            </div>
          </div>
    </div>
  )
}

export default Contact