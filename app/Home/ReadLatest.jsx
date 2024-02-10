"use client"
import React, { useEffect } from "react"
import Glide from "@glidejs/glide"
import "../globals.css"


export default function CarouselIndicatorsOutside() {
  useEffect(() => {
    const slider = new Glide(".glide-05", {
      type: "carousel",
      focusAt: "center",
      perView: 3,
      autoplay: false,
      animationDuration: 700,
      gap: 24,
      classNames: {
        nav: {
          active: "[&>*]:bg-wuiSlate-700",
        },
      },
      breakpoints: {
        1024: {
          perView: 2,
        },
        640: {
          perView: 1,
        },
      },
    }).mount()

    return () => {
      slider.destroy()
    }
  }, [])

  return (
    <div className=" px-4 md:px-12 py-20 !pb-0">

      <h2 className="mb-10 text-[40px] font-medium">Read the Latest</h2>

      {/*<!-- Component: Carousel with indicators outside --> */}
      <div className="glide-05 relative w-full ">
        {/*    <!-- Slides --> */}
        <div className="overflow-hidden w-full relative z-10" data-glide-el="track">
          <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] md:relative md:flex w-full overflow-hidden p-0 md:h-[500px]">

            <div className="!w-[318px] !h-80 relative z-10">
              <img src="../images/image 1701.jpg" className="absolute top-0 !w-[318px] !h-80  bg-contain rounded-3xl" />
              <li className="!w-[318px] !h-80  p-6 flex flex-col justify-between border border-gray-600 rounded-3xl  absolute top-0 hover:mt-36 transition-transform duration-300 ease-in-out transform  hover:rotate-6  cardslbg">

                <div className="">
                  <h4 className="text-2xl mb-2">Ender Beytekin</h4>
                  <p className="text-xs">CFO global alummi for MIT
                    professional Education</p>
                </div>
                <div>
                  <p className="text-base">
                    “Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.”
                  </p>
                </div>

              </li>
            </div>


            <div className="!w-[318px] !h-80 relative">
              <img src="../images/image 1701.jpg" className="absolute top-0 !w-[318px] !h-80  bg-contain rounded-3xl" />
              <li className="!w-[318px] !h-80  p-6 flex flex-col justify-between border border-gray-600 rounded-3xl  absolute top-0 hover:mt-36 transition-transform duration-300 ease-in-out transform  hover:rotate-6  cardslbg">

                <div className="">
                  <h4 className="text-2xl mb-2">Ender Beytekin</h4>
                  <p className="text-xs">CFO global alummi for MIT
                    professional Education</p>
                </div>
                <div>
                  <p className="text-base">
                    “Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.”
                  </p>
                </div>

              </li>
            </div>


            <div className="!w-[318px] !h-80 relative">
              <img src="../images/image 1701.jpg" className="absolute top-0 !w-[318px] !h-80  bg-contain rounded-3xl" />
              <li className="!w-[318px] !h-80  p-6 flex flex-col justify-between border border-gray-600 rounded-3xl  absolute top-0 hover:mt-36 transition-transform duration-300 ease-in-out transform  hover:rotate-6  cardslbg">

                <div className="">
                  <h4 className="text-2xl mb-2">Ender Beytekin</h4>
                  <p className="text-xs">CFO global alummi for MIT
                    professional Education</p>
                </div>
                <div>
                  <p className="text-base">
                    “Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.”
                  </p>
                </div>

              </li>
            </div>


            <div className="!w-[318px] !h-80 relative">
              <img src="../images/image 1701.jpg" className="absolute top-0 !w-[318px] !h-80  bg-contain rounded-3xl" />
              <li className="!w-[318px] !h-80  p-6 flex flex-col justify-between border border-gray-600 rounded-3xl  absolute top-0 hover:mt-36 transition-transform duration-300 ease-in-out transform  hover:rotate-6  cardslbg">

                <div className="">
                  <h4 className="text-2xl mb-2">Ender Beytekin</h4>
                  <p className="text-xs">CFO global alummi for MIT
                    professional Education</p>
                </div>
                <div>
                  <p className="text-base">
                    “Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.”
                  </p>
                </div>

              </li>
            </div>


            <div className="!w-[318px] !h-80 relative">
              <img src="../images/image 1701.jpg" className="absolute top-0 !w-[318px] !h-80  bg-contain rounded-3xl" />
              <li className="!w-[318px] !h-80  p-6 flex flex-col justify-between border border-gray-600 rounded-3xl  absolute top-0 hover:mt-36 transition-transform duration-300 ease-in-out transform  hover:rotate-6  cardslbg">

                <div className="">
                  <h4 className="text-2xl mb-2">Ender Beytekin</h4>
                  <p className="text-xs">CFO global alummi for MIT
                    professional Education</p>
                </div>
                <div>
                  <p className="text-base">
                    “Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.”
                  </p>
                </div>

              </li>
            </div>


            <div className="!w-[318px] !h-80 relative">
              <img src="../images/image 1701.jpg" className="absolute top-0 !w-[318px] !h-80  bg-contain rounded-3xl" />
              <li className="!w-[318px] !h-80  p-6 flex flex-col justify-between border border-gray-600 rounded-3xl  absolute top-0 hover:mt-36 transition-transform duration-300 ease-in-out transform  hover:rotate-6  cardslbg">

                <div className="">
                  <h4 className="text-2xl mb-2">Ender Beytekin</h4>
                  <p className="text-xs">CFO global alummi for MIT
                    professional Education</p>
                </div>
                <div>
                  <p className="text-base">
                    “Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.”
                  </p>
                </div>

              </li>
            </div>


            <div className="!w-[318px] !h-80 relative">
              <img src="../images/image 1701.jpg" className="absolute top-0 !w-[318px] !h-80  bg-contain rounded-3xl" />
              <li className="!w-[318px] !h-80  p-6 flex flex-col justify-between border border-gray-600 rounded-3xl  absolute top-0 hover:mt-36 transition-transform duration-300 ease-in-out transform  hover:rotate-6  cardslbg">

                <div className="">
                  <h4 className="text-2xl mb-2">Ender Beytekin</h4>
                  <p className="text-xs">CFO global alummi for MIT
                    professional Education</p>
                </div>
                <div>
                  <p className="text-base">
                    “Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.”
                  </p>
                </div>

              </li>
            </div>




          </ul>
        </div>
        {/*    <!-- Indicators --> */}

        <div className="absolute bottom-32 z-20 mx-auto w-full">
          <div
          className="flex w-full items-center justify-center gap-1 z-10"
          data-glide-el="controls[nav]"
        >
          <button
            className="group p-2"
            data-glide-dir="=0"
            aria-label="goto slide 1"
          >
            <span className="bg-navbg opacity-45 block h-2 w-2 rounded-full bg-white/20 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none"></span>
          </button>
          <button
            className="group p-1"
            data-glide-dir="=1"
            aria-label="goto slide 2"
          >
            <span className="bg-navbg opacity-45 block h-2 w-2 rounded-full bg-white/20 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none"></span>
          </button>
          <button
            className="group p-1"
            data-glide-dir="=2"
            aria-label="goto slide 3"
          >
            <span className="bg-navbg opacity-45 block h-2 w-2 rounded-full bg-white/20 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none"></span>
          </button>
          <button
            className="group p-1"
            data-glide-dir="=3"
            aria-label="goto slide 4"
          >
            <span className="bg-navbg opacity-45 block h-2 w-2 rounded-full bg-white/20 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none"></span>
          </button>
        </div>
        </div>

        

      </div>
      {/*<!-- End Carousel with indicators outside --> */}
    </div>
  )
}