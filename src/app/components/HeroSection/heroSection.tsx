import "./heroSection.css"

let Section = () => {
    return(
        // <section className=" bg-black">
        //   <div className="mx-auto px-4 lg:flex lg:h-screen lg:items-center">
        //        <div className="mx-auto text-center">
        //             <h1 className="text-3xl font-extrabold sm:text-5xl colorblack">
        //              Understand User Flow.
        //              <strong className="font-extrabold text-red-700 sm:block"> Increase Conversion. </strong>
        //             </h1>

        //             <p className="mt-4 sm:text-xl/relaxed colorblack">
        //              Welcome To Fahad Construction Limited Com 
        //             </p>

        //             <div className="mt-8 flex flex-wrap justify-center gap-4">
        //                 <a
        //                   className="block w-full rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
        //                   href="#"
        //                    >
        //                    Get Started
        //                 </a>

        //                 <a
        //                  className="block w-full rounded px-12 py-3 text-sm font-medium text-red-600 shadow hover:text-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
        //                  href="#"
        //                  >
        //                  Learn More
        //                 </a>
        //             </div>
        //         </div>
        //     </div>
        // </section>
        <section className="bg-gray-900 text-white">
  <div className="mx-auto bg-gray-900 max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
    <div className="mx-auto bg-gray-900 max-w-3xl text-center">
      <h1
        className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
      >
        Understand User Flow.

        <span className="sm:block bg-gray-900 c-white m-margin"> Increase Conversion. </span>
      </h1>

      <p className="mx-auto bg-gray-900 mt-4 max-w-xl sm:text-xl/relaxed">
        Welcome To Fahad Construction Private Limited
      </p>

      <div className="mt-8 bg-gray-900 flex flex-wrap justify-center gap-4">
        <a
          className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
          href="#"
        >
          Get Started
        </a>

        <a
          className="block w-full bg-color rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
          href="#"
        >
          Learn More
        </a>
      </div>
    </div>
  </div>
</section>
    )
}

export default Section