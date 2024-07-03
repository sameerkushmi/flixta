import { useState } from "react"

function App() {
  const [open, setOpen ] = useState(null)
  const faqList = [
    {
      title : 'How do I get a quotation for my project?',
    },
    {
      title: 'How many landing pages I can work with your product?',
    },
    {
      title: 'Can I use your product for my client?',
    },
    {
      title: 'Will Growth Products slow down my website?',
    },
    {
      title: 'Can I use your product for my client?',
    },
  ]
  const updateList = [
    {
      course : 'web development',
      img : 'post_08-760x560.jpg',
      title : 'If you are new here the these'
    },
    {
      course: 'app development',
      img: 'post_03-760x560.jpg',
      title: 'How do you improve your coding skills?'
    },
    {
      course: 'creative branding',
      img: 'post_02-760x560.jpg',
      title: 'Do you want to become a professional?'
    },
  ]

  return (
    <div>
        {/* headers */}
        <nav className="flex justify-between items-center  bg-white px-16 py-4 z-10 sticky top-0 left-0">
          <div>
            <img src="/images/logo_darkas.png" alt="logo_darkas" className="w-[110px]" />
          </div>
          <div className="flex items-center gap-8 text-sm font-medium">
            <button className="hover:text-[#5777ff]">
              <a href="#">Home</a>
            </button>
            <button className="hover:text-[#5777ff]">
              <a href="#">About</a>
            </button>
            <button className="hover:text-[#5777ff]">
              <a href="#">Service</a>
            </button>
            <button className="hover:text-[#5777ff]">
              <a href="#">Portfolio</a>
            </button>
            <button className="hover:text-[#5777ff]">
              <a href="#">Blog</a>
            </button>
            <button className="hover:text-[#5777ff]">
              <a href="#">Contact</a>
            </button>
            <button className="rounded-[50px]  ml-24 flex items-center gap-2 hover:bg-black bg-[#5777FF] font-medium text-lg text-white py-3 px-6">
              <a href="#">Let's Talk</a>
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 17 17" fill="none">
                <path 
                  d="M16.1421 1.33345C16.1421 0.781166 15.6944 0.33345 15.1421 0.33345L6.14214 0.333451C5.58985 0.333451 5.14214 0.781166 5.14214 1.33345C5.14214 1.88574 5.58985 2.33345 6.14214 2.33345L14.1421 2.33345L14.1421 10.3335C14.1421 10.8857 14.5899 11.3335 15.1421 11.3335C15.6944 11.3335 16.1421 10.8857 16.1421 10.3335L16.1421 1.33345ZM1.70711 16.1827L15.8492 2.04056L14.435 0.626344L0.292893 14.7685L1.70711 16.1827Z"
                  fill="white"
                  ></path>
              </svg>
            </button>
          </div>
        </nav>
        {/* hero section */}
        <div className="flex justify-between relative py-24 px-16 bg-[url('/images/Main-Bg.png')]">
          {/* left hero content */}
          <div className="space-y-6">
            <div>
              <h1 className="px-6 py-2 w-fit rounded-[50px] bg-blue-50">
                👋 Welcome to my portfolio
              </h1>
            </div>
            <h1 className="text-6xl font-bold">I'm William Isaac</h1>
            <h2 className="text-5xl font-bold text-[#5777ff]">Content Writer</h2>
            <p className="text-lg text-neutral-600">Since 1999, we are working for business, agency or individuals for <br /> building digital content based in New York, USA.</p>
            <div className="flex items-center gap-6 pt-6">
              <div>
                <button className="p-6 text-xl hover:rotate-45 transition-all duration-300 rounded-full bg-[#5777ff] text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 17 17" fill="none">
                    <path 
                      d="M16.1421 1.33345C16.1421 0.781166 15.6944 0.33345 15.1421 0.33345L6.14214 0.333451C5.58985 0.333451 5.14214 0.781166 5.14214 1.33345C5.14214 1.88574 5.58985 2.33345 6.14214 2.33345L14.1421 2.33345L14.1421 10.3335C14.1421 10.8857 14.5899 11.3335 15.1421 11.3335C15.6944 11.3335 16.1421 10.8857 16.1421 10.3335L16.1421 1.33345ZM1.70711 16.1827L15.8492 2.04056L14.435 0.626344L0.292893 14.7685L1.70711 16.1827Z"
                      fill="white"
                      ></path>
                  </svg>
                </button>
              </div>
              <img src="/images/arow.png" alt="arrow.png" className="w-24" />
            </div>
          </div>
          {/* right hero content */}
          <div className="relative">
            <img src="/images/Element.png" alt="element.png" className="absolute top-3 left-[33%] w-[30px]" />
            <img src="/images/writer-500x500.jpg" alt="writer" className="rounded-full" />
            <div className="absolute bottom-0 left-0 text-center bg-[#5777ff] text-white rounded-full px-[38px] py-[29px] text-center">
              <h1 className="text-4xl font-bold mb-1">30+</h1>
              <p className="font-medium text-sm">Year of <br /> Experience</p>
            </div>
          </div>
          <img src="/images/bnr-szape3.png" alt="bnr-szape3" className="absolute bottom-0 left-[50%]" />
        </div>
        {/* clients */}
        <div className="px-16 py-24 bg-[#F2F4FF] space-y-4">
          <div className="flex gap-3 justify-center items-center">
            <img src="/images/bnr-szape03.png" alt="szape03" className="w-8" />
            <h1 className="text-xl text-[#5777ff] font-medium">Clients</h1>
          </div>
          <h1 className="text-center text-4xl font-bold">Clients I've worked with</h1>
          <div className="grid grid-cols-6 gap-12 pt-12">
            <img src="/images/1.png" alt="1" />
            <img src="/images/2.png" alt="2" />
            <img src="/images/3.png" alt="3" />
            <img src="/images/4.png" alt="4" />
            <img src="/images/10.png" alt="10" />
            <img src="/images/5.png" alt="5" />
            <img src="/images/6.png" alt="6" />
            <img src="/images/7.png" alt="7" />
            <img src="/images/8.png" alt="8" />
            <img src="/images/9.png" alt="9" />
            <img src="/images/11.png" alt="11" />
            <img src="/images/12.png" alt="12" />
            <img src="/images/13.png" alt="13" />
            <img src="/images/14.png" alt="14" />
            <img src="/images/15.png" alt="15" />
            <img src="/images/16.png" alt="16" />
            <img src="/images/17.png" alt="17" />
            <img src="/images/18.png" alt="18" />
          </div>
        </div>
        {/* service */}
        <div className="px-16 py-24 space-y-6 bg-[#F9FAFF]">
         <div className="flex gap-3 justify-center items-center">
            <img src="/images/bnr-szape03.png" alt="szape03" className="w-8" />
            <h1 className="text-xl text-[#5777ff] font-medium">MY SERVRICE</h1>
          </div>
          <h1 className="text-center text-4xl font-bold">What I Do</h1>
          <div className="grid grid-cols-4 gap-6">
            <div className="px-6 py-10 bg-white rounded space-y-8 hover:border-blue-600 border border-white transition duration-300">
              <img src="/images/image (3).svg" alt="" className="w-14" />
              <h1 className="text-2xl font-semibold hover:text-[#5777ff] transiton duration-300">Web Copywriter</h1>
              <p className="text-lg text-neutral-600">Freelance web copyrighting include adverts, websites, digital media or posts.</p>
            </div>
            <div className="px-6 py-10 bg-white rounded space-y-8 hover:border-blue-600 border border-white transition duration-300">
              <img src="/images/image (4).svg" alt="" className="w-14" />
              <h1 className="text-2xl font-semibold hover:text-[#5777ff] transiton duration-300">Brochure Copywriter</h1>
              <p className="text-lg text-neutral-600">Freelance web copyrighting include adverts, websites, digital media or posts.</p>
            </div>
            <div className="px-6 py-10 bg-white rounded space-y-8 hover:border-blue-600 border border-white transition duration-300">
              <img src="/images/image (5).svg" alt="" className="w-14" />
              <h1 className="text-2xl font-semibold hover:text-[#5777ff] transiton duration-300">Digital Copywriting</h1>
              <p className="text-lg text-neutral-600">Freelance web copyrighting include adverts, websites, digital media or posts.</p>
            </div>
            <div className="px-6 py-10 bg-white rounded space-y-8 hover:border-blue-600 border border-white transition duration-300">
              <img src="/images/image (6).svg" alt="" className="w-14" />
              <h1 className="text-2xl font-semibold hover:text-[#5777ff] transiton duration-300">Email Copywriting</h1>
              <p className="text-lg text-neutral-600">Freelance web copyrighting include adverts, websites, digital media or posts.</p>
            </div>
            <div className="px-6 py-10 bg-white rounded space-y-8 hover:border-blue-600 border border-white transition duration-300">
              <img src="/images/image (7).svg" alt="" className="w-14" />
              <h1 className="text-2xl font-semibold hover:text-[#5777ff] transiton duration-300">Blog Content Writer</h1>
              <p className="text-lg text-neutral-600">Freelance web copyrighting include adverts, websites, digital media or posts.</p>
            </div>
            <div className="px-6 py-10 bg-white rounded space-y-8 hover:border-blue-600 border border-white transition duration-300">
              <img src="/images/image (8).svg" alt="" className="w-14" />
              <h1 className="text-2xl font-semibold hover:text-[#5777ff] transiton duration-300">Press Release Writer</h1>
              <p className="text-lg text-neutral-600">Freelance web copyrighting include adverts, websites, digital media or posts.</p>
            </div>
            <div className="px-6 py-10 bg-white rounded space-y-8 hover:border-blue-600 border border-white transition duration-300">
              <img src="/images/image (9).svg" alt="" className="w-14" />
              <h1 className="text-2xl font-semibold hover:text-[#5777ff] transiton duration-300">Video Script Writer</h1>
              <p className="text-lg text-neutral-600">Freelance web copyrighting include adverts, websites, digital media or posts.</p>
            </div>
            <div className="px-6 py-10 bg-white rounded space-y-8 hover:border-blue-600 border border-white transition duration-300">
              <img src="/images/image (10).svg" alt="" className="w-14" />
              <h1 className="text-2xl font-semibold hover:text-[#5777ff] transiton duration-300">Content Marketing</h1>
              <p className="text-lg text-neutral-600">Freelance web copyrighting include adverts, websites, digital media or posts.</p>
            </div>
          </div>
        </div>
        {/* resume */}
        <div className="flex flex-col items-center gap-6 py-24 bg-[#F2F4FF]">
            <h1 className="text-xl text-[#5777ff] font-medium">^Resume^</h1>
            <h1 className="text-center text-4xl font-bold mb-4">My Work Exprience</h1>
            {/* google */}
            <div className="border border-blue-200 bg-white w-9/12">
              <div className="flex justify-between items-center bg-white p-6">
                <div className="flex gap-2 items-center">
                  <span className="rounded-full p-2 border-dashed border border-gray-400">
                    <span className="w-2 block h-2 rounded-full bg-blue-600"></span>
                  </span>
                  <h1 className="text-xl font-semibold">Web Copywriter</h1>
                </div>
                <div className="text-xl text-neutral-600">
                  2022 - 24 (Present)
                </div>
              </div>
              <div className="flex  items-center gap-8 bg-[#F9FAFF] py-10 px-24">
                <div><img src="/images/image (15).svg" alt="" className="w-[300px]" /></div>
                <div className="space-y-4">
                  <h1 className="text-2xl font-semibold">Google</h1>
                  <p className="text-lg text-neutral-600">I must explain to you how all this mistaken idea of denouncing pleasure and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.</p>
                </div>
              </div>
            </div>
            {/* accenture */}
            <div className="border border-blue-200 bg-white w-9/12">
              <div className="flex justify-between items-center bg-white p-6">
                <div className="flex gap-2 items-center">
                  <span className="rounded-full p-2 border-dashed border border-gray-400">
                    <span className="w-2 block h-2 rounded-full bg-blue-600"></span>
                  </span>
                  <h1 className="text-xl font-semibold">Digital Copywriter</h1>
                </div>
                <div className="text-xl text-neutral-600">
                  2017 - 18
                </div>
              </div>
              <div className="flex  items-center gap-8 bg-[#F9FAFF] py-10 px-24">
                <div><img src="/images/10.png" alt="" className="w-[350px]" /></div>
                <div className="space-y-4">
                  <h1 className="text-2xl font-semibold">Accenture</h1>
                  <p className="text-lg text-neutral-600">I must explain to you how all this mistaken idea of denouncing pleasure and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.</p>
                </div>
              </div>
            </div>
            {/* toyota */}
            <div className="border border-blue-200 bg-white w-9/12">
              <div className="flex justify-between items-center bg-white p-6">
                <div className="flex gap-2 items-center">
                  <span className="rounded-full p-2 border-dashed border border-gray-400">
                    <span className="w-2 block h-2 rounded-full bg-blue-600"></span>
                  </span>
                  <h1 className="text-xl font-semibold">Blog Content Writer</h1>
                </div>
                <div className="text-xl text-neutral-600">
                  2019 - 21
                </div>
              </div>
              <div className="flex  items-center gap-8 bg-[#F9FAFF] py-10 px-24">
                <div><img src="/images/15.png" alt="" className="w-[350px]" /></div>
                <div className="space-y-4">
                  <h1 className="text-2xl font-semibold">Toyota</h1>
                  <p className="text-lg text-neutral-600">I must explain to you how all this mistaken idea of denouncing pleasure and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.</p>
                </div>
              </div>
            </div>
            {/* philips */}
            <div className="border border-blue-200 bg-white w-9/12">
              <div className="flex justify-between items-center bg-white p-6">
                <div className="flex gap-2 items-center">
                  <span className="rounded-full p-2 border-dashed border border-gray-400">
                    <span className="w-2 block h-2 rounded-full bg-blue-600"></span>
                  </span>
                  <h1 className="text-xl font-semibold">Brochure Copywriter</h1>
                </div>
                <div className="text-xl text-neutral-600">
                  2014 - 16
                </div>
              </div>
              <div className="flex  items-center gap-8 bg-[#F9FAFF] py-10 px-24">
                <div><img src="/images/6.png" alt="" className="w-[350px]" /></div>
                <div className="space-y-4">
                  <h1 className="text-2xl font-[500]">PHILIPS</h1>
                  <p className="text-lg text-neutral-600">I must explain to you how all this mistaken idea of denouncing pleasure and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.</p>
                </div>
              </div>
            </div>
            <div className="grid px-16 grid-cols-2 gap-8 ">
              <div className="space-y-6 p-4">
                <div className="overflow-hidden">
                  <img src="/images/ps_04.jpg" className="hover:scale-105 transition duration-300" alt="" />
                </div>
                <h1 className="text-2xl font-semibold">Document Manager Application</h1>
                <span className="text-lg text-neutral-600">Web Development</span>
              </div>
              <div className="space-y-6 p-4">
                <div className="overflow-hidden">
                  <img src="/images/ps_03.jpg" className="hover:scale-105 transition duration-300" alt="" />
                </div>
                <h1 className="text-2xl font-semibold">Digital Marketing</h1>
                <span className="text-lg text-neutral-600">Web Development</span>
              </div>
              <div className="space-y-6 p-4">
                <div className="overflow-hidden">
                  <img src="/images/ps_01.jpg" className="hover:scale-105 transition duration-300" alt="" />
                </div>
                <h1 className="text-2xl font-semibold">Creative Portfolio</h1>
                <span className="text-lg text-neutral-600">Web Development</span>
              </div>
              <div className="space-y-6 p-4">
                <div className="overflow-hidden">
                  <img src="/images/ps_05.jpg" className="hover:scale-105 transition duration-300" alt="" />
                </div>
                <h1 className="text-2xl font-semibold">Mobile App Devlopment</h1>
                <span className="text-lg text-neutral-600">Web Development</span>
              </div>
            </div>
        </div>
        {/* feedback */}
        <div className="px-16 py-24 space-y-6 bg-[url('/images/map-transparent.png')]">
            <div className="flex gap-3 justify-center items-center">
              <img src="/images/bnr-szape03.png" alt="szape03" className="w-8" />
              <h1 className="text-xl text-[#5777ff] font-medium">TESTIMONIALS</h1>
            </div>
            <h1 className="text-center text-4xl font-bold">What My Clients Say</h1>
            <div className="grid grid-cols-3 gap-8 py-4">
              <div className="shadow space-y-6 bg-white px-8 py-12 border border-white hover:border-blue-600 transition duration-300">
                <div className="flex items-center gap-6">
                  <h1 className="text-lg font-semibold">Great Advice</h1>
                  <img src="/images/5 (1).png" alt="" className="w-24" />
                </div>
                <p className="text-lg text-neutral-600">The standard chunk of lorem ipsum used since the some music reproduced below for those intrested</p>
                <h2 className="text-lg font-semibold">Mel Gibson</h2>
                <span className=" text-neutral-600">Clients</span>
              </div>
              <div className="shadow space-y-6 bg-white px-8 py-12 border border-white hover:border-blue-600 transition duration-300">
                <div className="flex items-center gap-6">
                  <h1 className="text-lg font-semibold">Design Quality</h1>
                  <img src="/images/4 (1).png" alt="" className="w-24" />
                </div>
                <p className="text-lg text-neutral-600">The standard chunk of lorem ipsum used since the some music reproduced below for those intrested</p>
                <h2 className="text-lg font-semibold">Tom Hanks</h2>
                <span className=" text-neutral-600">jackson S</span>
              </div>
              <div className="shadow space-y-6 bg-white px-8 py-12 border border-white hover:border-blue-600 transition duration-300">
                <div className="flex items-center gap-6">
                  <h1 className="text-lg font-semibold">Great Solution</h1>
                  <img src="/images/4 (1).png" alt="" className="w-24" />
                </div>
                <p className="text-lg text-neutral-600">The standard chunk of lorem ipsum used since the some music reproduced below for those intrested</p>
                <h2 className="text-lg font-semibold">Johny Depp</h2>
                <span className=" text-neutral-600">Ceo</span>
              </div>
            </div>
        </div>
        {/* about us*/}
        <div className="px-16 py-24 flex gap-10 bg-[#F2F4FF]">
          <div>
            <img src="/images/org-writer-500x500.jpg" alt="writer" className="rounded-full w-[445px]" />
          </div>
          <div className="px-6 space-y-6 w-7/12">
            <img src="/images/cta-img1-f1.png" alt="cta-img1-f1" />
            <h1 className="text-4xl font-bold">Who I Am</h1>
            <p className="text-xl text-neutral-600 text-justify leading-8">I'm <span className="font-bold">William Isaac</span>, a Freelance English Creative Copywriter, Content Writer and Communications Consultant based in New York, USA. By better copying, I create value for the companies. I have spent more than 25 + years at various copywriting agencies, advertising, public relations and digital agencies, and most recently as a freelance copywriter for brands and businesses, honing my creative writing skills.</p>
            <button className="rounded-full bg-[#5777ff] p-6 hover:rotate-45 transition duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 17 17" fill="none">
                  <path 
                    d="M16.1421 1.33345C16.1421 0.781166 15.6944 0.33345 15.1421 0.33345L6.14214 0.333451C5.58985 0.333451 5.14214 0.781166 5.14214 1.33345C5.14214 1.88574 5.58985 2.33345 6.14214 2.33345L14.1421 2.33345L14.1421 10.3335C14.1421 10.8857 14.5899 11.3335 15.1421 11.3335C15.6944 11.3335 16.1421 10.8857 16.1421 10.3335L16.1421 1.33345ZM1.70711 16.1827L15.8492 2.04056L14.435 0.626344L0.292893 14.7685L1.70711 16.1827Z"
                    fill="white"
                    ></path>
                </svg>
            </button>
          </div>
        </div>
        {/* FAQ */}
        <div className="p-28 space-y-6">
            <div className="flex gap-3 justify-center items-center">
              <img src="/images/bnr-szape03.png" alt="szape03" className="w-8" />
              <h1 className="text-xl text-[#5777ff] font-medium">FAQ</h1>
            </div>
            <h1 className="text-center text-4xl font-bold">Your Question and Answer</h1>
            <div className="flex flex-col items-center">
              {
                faqList.map((item,i)=>(
                  <div key={i} className="border-b w-10/12 cursor-pointer" onClick={()=> setOpen(i)}>
                    <div className="flex justify-between items-center text-xl font-semibold my-6">
                      <h1 className={`${open === i && 'text-[#5777ff]'}`}>{item.title}</h1>
                      <button>
                        {
                          open === i && <i class="ri-subtract-fill text-[#5777ff]"></i> || <i class="ri-add-fill"></i>
                        }
                      </button>
                    </div>
                    <div className={`text-lg text-neutral-600 overflow-hidden h-0 transition-all duration-300 ${open === i && 'h-[60px] mb-6'}`}>
                      10+ years later and I’ve learned that in order to succeed in this business, I need to be your business partner and problem solver. Which is the same as saying through shrinking from toil and pain these cases.
                    </div>
                  </div>
                ))
              }
            </div>
        </div>
        {/* update */}
        <div className="py-28 px-16 bg-[#F9FAFF] space-y-6">
          <div className="flex gap-3 justify-center items-center">  
            <img src="/images/bnr-szape03.png" alt="szape03" className="w-8" />
            <h1 className="text-xl text-[#5777ff] font-medium">UPDATE</h1>
          </div>
          <h1 className="text-center text-4xl font-bold">Latest News & Blogs</h1>
          <div className="grid grid-cols-3 gap-10 py-4">
            {
              updateList.map((item,i)=>(
                <div className="shadow">
                  <div className="relative">
                    <div className="absolute left-5 top-5 bg-[#5777ff] rounded-3xl uppercase text-sm px-4 py-1 text-white">{item.course}</div>
                    <img src={`/images/${item.img}`} alt="" />
                  </div>
                  <div className="px-4 py-6 space-y-4">
                    <h1 className="text-2xl font-semibold">{item.title}</h1>
                    <div className="text-neutral-600">
                      By Flixta | May 2, 2024
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
        {/* contact */}
        <div className="py-24 grid grid-cols-2 px-16 gap-6 bg-[#F2F4FF]">
          <div className="px-4 space-y-6">
            <div className="flex gap-3 items-center">  
              <img src="/images/bnr-szape03.png" alt="szape03" className="w-8" />
              <h1 className="text-xl text-[#5777ff] font-medium">STAY CONNECTED</h1>
            </div>
            <h1 className=" text-4xl font-bold pb-6">Let's Work Together</h1>
            <div className="flex items-center gap-6 pb-4">
              <div className="text-white p-5 bg-[#5777ff] rounded-full">
                <img src="/images/image (16).svg" alt="" className="w-[20px]" />
              </div>
              <div>
                <h1 className="text-lg text-neutral-700">Phone</h1>
                <p className="text-xl hover:text-[#5777ff]">+123-4669-1234</p>
              </div>
            </div>
            <div className="flex items-center gap-6 pb-4">
              <div className="text-white p-5 bg-[#5777ff] rounded-full">
                <img src="/images/image (17).svg" alt="" className="w-[20px]" />
              </div>
              <div>
                <h1 className="text-lg text-neutral-700">Email</h1>
                <p className="text-xl hover:text-[#5777ff]">hello@flixta.com</p>
              </div>
            </div>
            <div className="flex items-center gap-6 pb-4">
              <div className="text-white p-5 bg-[#5777ff] rounded-full">
                <img src="/images/image (18).svg" alt="" className="w-[20px]" />
              </div>
              <div>
                <h1 className="text-lg text-neutral-700">Address</h1>
                <p className="text-xl hover:text-[#5777ff]">2096 New Market, New Road North Carolina, USA</p>
              </div>
            </div>
          </div>
          <div className="w-full pl-10">
            <div className="bg-white p-12 rounded-lg">
              <form className="grid grid-cols-2 gap-8">
                <input type="text" name="fullName" placeholder="Full Name" className="border px-5 py-4 rounded bg-[#F9FAFF] outline-none" />
                <input type="email" name="email" placeholder="Email Address" className="border px-5 py-4 rounded bg-[#F9FAFF] outline-none"  />
                <input type="text" name="mobile" placeholder="Your Phone" className="border px-5 py-4 rounded bg-[#F9FAFF] outline-noe"  />
                <select className="border px-5 py-4 rounded bg-[#F9FAFF] outline-none"  name="service">
                  <option value="other">Choose Service</option>
                  <option value="web development">Web Development</option>
                  <option value="digital marketing">Digital Marketing</option>
                  <option value="brand strategy">Brand Strategy</option>
                  <option value="app development">App Development</option>
                </select>
                <textarea className="col-span-2 border outline-none rounded bg-[#F9FAFF] p-5" name="message" cols="30" rows="5" placeholder="Write Your Message">
                </textarea>
                <div className="col-span-2">
                  <button type="submit" className="px-8 py-4 text-white hover:bg-black transition duration-300 rounded-[50px] bg-[#5777FF]">SEND MESSAGE</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* footer */}
        <div className="flex flex-col items-center justify-center py-16 space-y-8">
          <div>
            <img src="/images/logo_darkas.png" alt="logo_darkas" className="w-32" />
          </div>
          <div className="flex items-center gap-8 text-lg font-[400] text-neutral-600">
            <button className="hover:text-[#5777FF]">
              <a href="#">Home</a>
            </button>
            <button className="hover:text-[#5777FF]">
              <a href="#">About</a>
            </button>
            <button className="hover:text-[#5777FF]">
              <a href="#">Service</a>
            </button>
            <button className="hover:text-[#5777FF]">
              <a href="#">Portfolio</a>
            </button>
            <button className="hover:text-[#5777FF]">
              <a href="#">Blog</a>
            </button>
            <button className="hover:text-[#5777FF]">
              <a href="#">Contact</a>
            </button>
          </div>
          <p className=" text-neutral-600">© 2024 Flixta. Designed by RSTheme with ❤️.</p>
        </div>
    </div>
  )
}

export default App
