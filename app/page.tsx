export default function Resume() {
  return (
    <div className='flex justify-center py-8 px-4 bg-gray-100 min-h-screen'>
      {/* Overall document container with exact width */}
      <div className='w-[8.5in] h-[11in] shadow-lg flex font-sans text-sm overflow-hidden'>
        {/* ---------- LEFT COLUMN ---------- */}
        <div className='w-[3in] bg-resume-bg-light-gray text-resume-text-medium pt-[30px] pr-[26px] pb-[30px] pl-[30px] flex flex-col justify-between'>
          <div>
            {/* Name */}
            <h1 className='text-resume-text-dark text-[39px] font-bold uppercase leading-[51px] mb-8 tracking-[1.44px] whitespace-nowrap overflow-visible relative z-10'>
              ANINDOW SAIKAT
            </h1>

            {/* Contact */}
            <section className='mb-[42px] mt-20'>
              <h2 className='text-black text-[15px] font-bold uppercase pb-1 mb-[15px] leading-[22px] relative '>
                CONTACT
                <div className='absolute bottom-[-6px] left-0 w-[48px] h-[1px] bg-black' />
              </h2>
              <div className='space-y-[10px]'>
                <div className='relative pl-[22px]'>
                  <div className='rounded-full bg-resume-light-blue absolute left-0 top-0 flex-shrink-0 h-2.5 w-2.5 mt-1.5' />
                  <span>anindowsaikat@gmail.com</span>
                </div>
                <div className='relative pl-[22px]'>
                  <div className='rounded-full bg-resume-light-blue absolute left-0 top-0 flex-shrink-0 w-2.5 h-2.5 mx-[px] mt-[5px]' />
                  <span>01928099407</span>
                </div>
                <div className='relative pl-[22px]'>
                  <div className='rounded-full bg-resume-light-blue absolute left-0 top-0 flex-shrink-0 w-2.5 h-2.5 mx-[px] mt-[5px]' />
                  <span>Dhaka, 1230 Bangladesh</span>
                </div>
              </div>
            </section>

            {/* Education */}
            <section className='mb-[42px]'>
              <h2 className='text-black text-[15px] font-bold uppercase pb-1 mb-[15px] leading-[22px] relative'>
                EDUCATION AND TRAINING
                <div className='absolute bottom-[-6px] left-0 w-[48px] h-[1px] bg-black' />
              </h2>
              <div className='space-y-[8px]'>
                <div>
                  <p className='text-[14px] text-gray-600'>02/2022</p>
                  <p className='font-bold leading-[12px]'>
                    Bachelor of Science - Computer Science And Engineering
                  </p>
                  <p className='text-[10px] leading-[12px]'>
                    Daffodil International University
                  </p>
                </div>
                <div>
                  <p className='text-[14px] text-gray-600'>2016</p>
                  <p className='font-bold leading-[12px]'>HSC - Science</p>
                  <p className='text-[10px] leading-[12px]'>
                    Government P.C. College, Bagerhat
                  </p>
                  <p className='text-[10px] leading-[12px]'>
                    Bagerhat, Bangladesh
                  </p>
                </div>
                <div>
                  <p className='text-[14px] text-gray-600'>2014</p>
                  <p className='font-bold leading-[12px]'>SSC - SSC</p>
                  <p className='text-[10px] leading-[12px]'>
                    Government P.C. College, Bagerhat
                  </p>
                  <p className='text-[10px] leading-[12px]'>
                    Nazirpur, Pirojpur
                  </p>
                </div>
              </div>
            </section>

            {/* Websites */}
            <section>
              <h2 className='text-black text-[15px] font-bold uppercase pb-1 mb-[15px] leading-[22px] relative'>
                WEBSITES,
                <br />
                PORTFOLIOS,
                <br />
                PROFILES
                <div className='absolute bottom-[-6px] left-0 w-[48px] h-[1px] bg-black' />
              </h2>
              <ul className='list-disc list-inside space-y-1 pl-[8px]'>
                <li>
                  <a
                    href='facebook.com/anindowS'
                    className='text-resume-light-blue hover:underline'
                  >
                    facebook.com/anindowS
                  </a>
                </li>
                <li>
                  <a
                    href='https://www.facebook.com/AnindowS/'
                    className='text-resume-light-blue hover:underline'
                  >
                    github.com/Anindow
                  </a>
                </li>
              </ul>
            </section>
          </div>
        </div>

        {/* ---------- RIGHT COLUMN ---------- */}
        <div className='w-[5.5in] bg-white text-resume-text-medium pt-[30px] pr-[36px] pb-[30px] pl-[30px] relative mt-[-20px] '>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='460px'
            height='460px'
            viewBox='0 0 100 100'
            fill='currentColor'
            className=' top-[180px] right-[-33px] text-resume-light-blue my-[-80px] mb-[] ml-[300px] mt-[-90px] '
          >
            <text
              className='m-0 leading-3 tracking-tighter'
              x='0'
              y='85'
              fontFamily='Arial, sans-serif'
              fontSize='100'
              fontWeight='bold'
            >
              ”
            </text>
          </svg>

          {/* Summary */}
          <section className=''>
            <h2 className='text-black text-[15px] font-bold uppercase pb-1 mb-[15px] leading-[22px] relative mt-[-220px]'>
              SUMMARY
              <div className='absolute bottom-[-6px] left-0 w-[48px] h-[1px] bg-black' />
            </h2>
            <p className='text-justify'>
              Dynamic Support Engineer at AdaSoft Internal Ltd. with expertise
              in database migration and web application development. Proven
              ability to resolve complex bugs in .Net projects while providing
              technical guidance across teams. Skilled in JavaScript frameworks
              and API Integration, demonstrating strong problem-solving and
              collaboration skills to enhance project outcomes.
            </p>
          </section>

          {/* Skills */}
          <section className='mb-[42px]'>
            <h2 className='text-black text-[15px] font-bold uppercase pb-1 leading-[22px] relative mb-[15px] mt-4'>
              SKILLS
              <div className='absolute bottom-[-6px] left-0 w-[48px] h-[1px] bg-black' />
            </h2>
            <div className='grid grid-cols-2 gap-x-4'>
              <ul className='list-disc list-inside space-y-1 pl-[8px]'>
                <li>JavaScript frameworks</li>
                <li>Database migration</li>
                <li>Web application development</li>
              </ul>
              <ul className='list-disc list-inside space-y-1 pl-[8px]'>
                <li>Code debugging</li>
                <li>Version control</li>
                <li>API integration</li>
              </ul>
            </div>
          </section>

          {/* Experience */}
          <section>
            <h2 className='text-black text-[15px] font-bold uppercase pb-1 mb-[15px] leading-[22px] relative -mt-[22px]'>
              EXPERIENCE
              <div className='absolute bottom-[-6px] left-0 w-[48px] h-[1px] bg-black ' />
            </h2>

            {/* Current job */}
            <div className='mb-[8px]'>
              <h3 className='font-bold'>Support Engineer</h3>
              <p>AdaSoft Internal Ltd. | Dhaka, Bangladesh</p>
              <p className='text-[14px] text-gray-600'>02/2024 - Current</p>
              <ul className='list-disc list-inside space-y-1 pl-[8px] mt-[6px]'>
                <li>
                  Contributed to design of database migration scripts and
                  managed database migrations for version upgrades across
                  diverse environments.
                </li>
                <li>
                  Bug resolution in .Net (dot net version 4-9) project and
                  identification of issues.
                </li>
                <li>Frontend development initiated to assist teams</li>
                <li>
                  Provided technical guidance to Software consumers and to other
                  departments or personnel.
                </li>
              </ul>
            </div>

            {/* Previous job */}
            <div>
              <h3 className='font-bold'>Junior Developer</h3>
              <p>Code Arctic | Dhaka, Bangladesh</p>
              <p className='text-[14px] text-gray-600'>10/2021 - 02/2024</p>
              <ul className='list-disc list-inside space-y-1 pl-[8px] mt-[6px]'>
                <li>
                  Developed dynamic web applications using{" "}
                  <a
                    href='#'
                    className='text-resume-light-blue hover:underline'
                  >
                    Next.js
                  </a>{" "}
                  and{" "}
                  <a
                    href='#'
                    className='text-resume-light-blue hover:underline'
                  >
                    React.js
                  </a>
                  .
                </li>
                <li>
                  Gained foundational experience in{" "}
                  <a
                    href='#'
                    className='text-resume-light-blue hover:underline'
                  >
                    Nuxt.js
                  </a>{" "}
                  for server-side rendering projects.
                </li>
                <li>
                  Familiar with{" "}
                  <a
                    href='#'
                    className='text-resume-light-blue hover:underline'
                  >
                    Parcel
                  </a>{" "}
                  and{" "}
                  <a
                    href='#'
                    className='text-resume-light-blue hover:underline'
                  >
                    Vite
                  </a>{" "}
                  for runtime site optimization.
                </li>
                <li>
                  Contributed to{" "}
                  <a
                    href='#'
                    className='text-resume-light-blue hover:underline'
                  >
                    Laravel
                  </a>{" "}
                  projects (also{" "}
                  <a
                    href='#'
                    className='text-resume-light-blue hover:underline'
                  >
                    Lumen
                  </a>
                  ), enhancing overall functionality.
                </li>
                <li>
                  Leveraged{" "}
                  <a
                    href='#'
                    className='text-resume-light-blue hover:underline'
                  >
                    Bootstrap
                  </a>{" "}
                  4, 5, and{" "}
                  <a
                    href='#'
                    className='text-resume-light-blue hover:underline'
                  >
                    Tailwind
                  </a>{" "}
                  3, 4 in conjunction with native CSS.
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
