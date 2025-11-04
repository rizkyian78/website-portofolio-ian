import Blogs from '@/component/Blog'
import Experience from '@/component/Experience'
import Projects from '@/component/Projects'
import {blogs, experience, projects} from '@/data/data'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <div
        className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
        style={{
          background: 'radial-gradient(600px at 1365px 214px, rgba(29, 78, 216, 0.15), transparent 80%)',
        }}
      ></div>
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0">
        <a
          href="#content"
          className="absolute left-0 top-0 block -translate-x-full rounded bg-gradient-to-br from-teal-400 via-blue-500 to-purple-600 px-4 py-3 text-sm font-bold uppercase tracking-widest text-white focus-visible:translate-x-0"
        >
          Skip to Content
        </a>
        <div className="lg:flex lg:justify-between lg:gap-4">
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">Rizky Ian Indiarto</h1>
              <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">Senior Software Engineer</h2>
              <p className="mt-4 max-w-xs leading-normal">I craft secure and scalable web experiences for the banking and financial sector.</p>
              <nav className="nav hidden lg:block" aria-label="In-page jump links">
                <ul className="mt-16 w-max">
                  <li>
                    <a href="#about" className="group flex items-center py-3 active">
                      <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                      <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                        About
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#experience" className="group flex items-center py-3">
                      <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                      <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                        Experience
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#projects" className="group flex items-center py-3">
                      <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                      <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                        Projects
                      </span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
              <li className="mr-5 shrink-0 text-xs">
                <a
                  href="https://github.com/rizkyian78"
                  className="block hover:text-slate-200"
                  aria-label="Github (opens in a new tab)"
                  title="GitHub"
                  target="_blank"
                >
                  <span className="sr-only">GitHub</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-6 w-6" aria-hidden="true">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                  </svg>
                </a>
              </li>
              <li className="mr-5 shrink-0 text-xs">
                <a
                  href="https://www.tiktok.com/@rizkyian78"
                  className="block hover:text-slate-200"
                  aria-label="TikTok (opens in a new tab)"
                  title="TikTok"
                  target="_blank"
                >
                  <span className="sr-only">Tik Tok</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="h-6 w-6" viewBox="0 0 16 16">
                    <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z" />
                  </svg>
                </a>
              </li>
              <li className="mr-5 shrink-0 text-xs">
                <a
                  href="https://www.instagram.com/rizkyian5719/"
                  className="block hover:text-slate-200"
                  aria-label="Instagram (opens in a new tab)"
                  title="Instagram"
                  target="_blank"
                >
                  <span className="sr-only">Instagram</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" fill="currentColor" className="h-6 w-6" aria-hidden="true">
                    <path d="M295.42,6c-53.2,2.51-89.53,11-121.29,23.48-32.87,12.81-60.73,30-88.45,57.82S40.89,143,28.17,175.92c-12.31,31.83-20.65,68.19-23,121.42S2.3,367.68,2.56,503.46,3.42,656.26,6,709.6c2.54,53.19,11,89.51,23.48,121.28,12.83,32.87,30,60.72,57.83,88.45S143,964.09,176,976.83c31.8,12.29,68.17,20.67,121.39,23s70.35,2.87,206.09,2.61,152.83-.86,206.16-3.39S799.1,988,830.88,975.58c32.87-12.86,60.74-30,88.45-57.84S964.1,862,976.81,829.06c12.32-31.8,20.69-68.17,23-121.35,2.33-53.37,2.88-70.41,2.62-206.17s-.87-152.78-3.4-206.1-11-89.53-23.47-121.32c-12.85-32.87-30-60.7-57.82-88.45S862,40.87,829.07,28.19c-31.82-12.31-68.17-20.7-121.39-23S637.33,2.3,501.54,2.56,348.75,3.4,295.42,6m5.84,903.88c-48.75-2.12-75.22-10.22-92.86-17-23.36-9-40-19.88-57.58-37.29s-28.38-34.11-37.5-57.42c-6.85-17.64-15.1-44.08-17.38-92.83-2.48-52.69-3-68.51-3.29-202s.22-149.29,2.53-202c2.08-48.71,10.23-75.21,17-92.84,9-23.39,19.84-40,37.29-57.57s34.1-28.39,57.43-37.51c17.62-6.88,44.06-15.06,92.79-17.38,52.73-2.5,68.53-3,202-3.29s149.31.21,202.06,2.53c48.71,2.12,75.22,10.19,92.83,17,23.37,9,40,19.81,57.57,37.29s28.4,34.07,37.52,57.45c6.89,17.57,15.07,44,17.37,92.76,2.51,52.73,3.08,68.54,3.32,202s-.23,149.31-2.54,202c-2.13,48.75-10.21,75.23-17,92.89-9,23.35-19.85,40-37.31,57.56s-34.09,28.38-57.43,37.5c-17.6,6.87-44.07,15.07-92.76,17.39-52.73,2.48-68.53,3-202.05,3.29s-149.27-.25-202-2.53m407.6-674.61a60,60,0,1,0,59.88-60.1,60,60,0,0,0-59.88,60.1M245.77,503c.28,141.8,115.44,256.49,257.21,256.22S759.52,643.8,759.25,502,643.79,245.48,502,245.76,245.5,361.22,245.77,503m90.06-.18a166.67,166.67,0,1,1,167,166.34,166.65,166.65,0,0,1-167-166.34"></path>
                  </svg>
                </a>
              </li>
              <li className="mr-5 shrink-0 text-xs">
                <a
                  href="https://www.linkedin.com/in/rizky-ian-indiarto-123rzky/"
                  className="block hover:text-slate-200"
                  aria-label="Linkedin (opens in a new tab)"
                  title="Linkedin"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  <span className="sr-only">Linkedin</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden="true">
                    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                  </svg>
                </a>
              </li>
              <li className="mr-5 shrink-0 text-xs">
                <a
                  href="https://medium.com/@rizkyian78"
                  className="block hover:text-slate-200"
                  aria-label="Medium (opens in a new tab)"
                  title="Medium"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  <span className="sr-only">Medium</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="h-6 w-6" aria-hidden="true">
                    <path d="M9.025 8c0 2.485-2.02 4.5-4.513 4.5A4.506 4.506 0 0 1 0 8c0-2.486 2.02-4.5 4.512-4.5A4.506 4.506 0 0 1 9.025 8m4.95 0c0 2.34-1.01 4.236-2.256 4.236S9.463 10.339 9.463 8c0-2.34 1.01-4.236 2.256-4.236S13.975 5.661 13.975 8M16 8c0 2.096-.355 3.795-.794 3.795-.438 0-.793-1.7-.793-3.795 0-2.096.355-3.795.794-3.795.438 0 .793 1.699.793 3.795" />
                  </svg>
                </a>
              </li>
            </ul>
          </header>
          <main id="content" className="pt-24 lg:w-[52%] lg:py-24">
            <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="About me">
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only"></h2>
              </div>
              <div className="text-lg">
                <p className="mb-4 ">
                  I’m a software engineer dedicated to building secure, high-performance web applications for the financial industry. I care deeply about
                  accessibility, design precision, and robust engineering — ensuring every product is both visually refined and resilient under real-world
                  demands.
                </p>
                <p className="mb-4">
                  Currently, I&apos;m a Senior Software Engineer Engineer at{' '}
                  <a
                    className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
                    href="https://www.ocbc.com/group/gateway"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="OCBC (opens in a new tab)"
                  >
                    Bank OCBC
                  </a>{' '}
                  specializing in building secure, scalable, and reliable systems. At OCBC, I contribute to the development and maintenance of backend services
                  that power our digital banking experiences, ensuring performance, compliance, and accessibility across all customer-facing platforms.
                </p>
                <p className="mb-4">
                  Throughout my career, I’ve had the opportunity to develop software across a variety of environments — from early-stage startups like{' '}
                  <a
                    className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
                    href="https://nusantech.com/en"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Nusantech (opens in a new tab)"
                  >
                    Nusantech
                  </a>{' '}
                  to large-scale fintech and banking institutions such as{' '}
                  <a
                    className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
                    href="https://www.brankas.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Brankas (opens in a new tab)"
                  >
                    Brankas
                  </a>{' '}
                  ,{' '}
                  <a
                    className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
                    href="https://www.bankneocommerce.co.id/en/home"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Bank Neo Commerce (opens in a new tab)"
                  >
                    Bank Neo Commerce
                  </a>{' '}
                  , and now OCBC. These experiences have strengthened my focus on building secure, scalable, and high-performance backend systems. I also
                  released a comprehensive video course guiding learners through building a web and , reflecting my passion for sharing knowledge and creating
                  meaningful learning experiences
                </p>
                <p>
                  In my spare time, I’m usually climbing, or running around Hyrule searching for{' '}
                  <span className="group/korok inline-flex lg:cursor-[url('/images/koroks/Elma.png'),_pointer] lg:font-medium lg:text-slate-200">
                    <span className="sr-only">Korok seeds</span>
                    <span className="group-hover/korok:text-red-400 transition duration-75 group-hover/korok:-translate-y-px delay-[50ms]" aria-hidden="true">
                      K
                    </span>
                    <span
                      className="group-hover/korok:text-orange-400 transition duration-75 group-hover/korok:-translate-y-px delay-[75ms]"
                      aria-hidden="true"
                    >
                      o
                    </span>
                    <span
                      className="group-hover/korok:text-yellow-400 transition duration-75 group-hover/korok:-translate-y-px delay-[100ms]"
                      aria-hidden="true"
                    >
                      r
                    </span>
                    <span className="group-hover/korok:text-lime-400 transition duration-75 group-hover/korok:-translate-y-px delay-[125ms]" aria-hidden="true">
                      o
                    </span>
                    <span
                      className="group-hover/korok:text-green-400 transition duration-75 group-hover/korok:-translate-y-px delay-[150ms]"
                      aria-hidden="true"
                    >
                      k
                    </span>
                    <span className="group-hover/korok:text-teal-400 transition duration-75 group-hover/korok:-translate-y-px delay-[175ms]" aria-hidden="true">
                      &nbsp;
                    </span>
                    <span className="group-hover/korok:text-cyan-400 transition duration-75 group-hover/korok:-translate-y-px delay-[200ms]" aria-hidden="true">
                      s
                    </span>
                    <span className="group-hover/korok:text-sky-400 transition duration-75 group-hover/korok:-translate-y-px delay-[225ms]" aria-hidden="true">
                      e
                    </span>
                    <span className="group-hover/korok:text-blue-400 transition duration-75 group-hover/korok:-translate-y-px delay-[250ms]" aria-hidden="true">
                      e
                    </span>
                    <span
                      className="group-hover/korok:text-indigo-400 transition duration-75 group-hover/korok:-translate-y-px delay-[275ms]"
                      aria-hidden="true"
                    >
                      d
                    </span>
                    <span
                      className="group-hover/korok:text-violet-400 transition duration-75 group-hover/korok:-translate-y-px delay-[300ms]"
                      aria-hidden="true"
                    >
                      s
                    </span>
                  </span>
                </p>
              </div>
            </section>
            <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="WorkPlace">
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Experience</h2>
              </div>
              <div>
                <ol className="group/list">
                  {experience.map(v => {
                    return (
                      <>
                        <Experience
                          ariaLableCompany={v.company}
                          companyUrl={v.url}
                          jobDesc={v.jobDesc}
                          role={v.role}
                          stacks={v.stacks}
                          year={v.year}
                          companyProduct={v.product}
                        />
                      </>
                    )
                  })}
                </ol>
                <div className="mt-12">
                  <a
                    className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 font-semibold text-slate-200 group/link text-base"
                    href="/resume.pdf"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="View Full Résumé (opens in a new tab)"
                  >
                    <span>
                      View Full{' '}
                      <span className="inline-block">
                        Résumé
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </section>
            <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Selected projects">
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Projects</h2>
              </div>
              <div>
                <ul className="group/list">
                  {projects.map((v, index) => {
                    return <Projects alt={v.alt} desc={v.desc} sourceUrl={v.sourceUrl} stacks={v.stacks} key={v.alt + index} name={v.name} url={v.url} />
                  })}
                </ul>
                <div className="mt-12">
                  <a
                    className="inline-flex items-center font-medium leading-tight text-slate-200 font-semibold text-slate-200 group"
                    aria-label="View Full Project Archive"
                    href="/archive"
                  >
                    <span>
                      <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
                        View Full Project{' '}
                      </span>
                      <span className="whitespace-nowrap">
                        <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">Archive</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </section>
            <section id="writing" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Blog posts">
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Blog</h2>
              </div>
              <div>
                <ul className="group/list">
                  {blogs.map(v => {
                    return (
                      <>
                        <Blogs alt={v.alt} title={v.title} url={v.url} year={v.year} imageUrl={v.imageUrl} />
                      </>
                    )
                  })}
                </ul>
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  )
}
