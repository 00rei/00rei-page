'use client'

import {RESUME_DATA} from "@/data/resume-data";
import Link from "next/link";
import {Section} from "@/components/ui/Section";
import {GlobeIcon} from "@/components/icons/GlobeIcon";
import {ParticlesBackground} from "@/components/ui/ParticlesBackground";
import {GitHubIcon} from "@/components/icons/GitHubIcon";

export default function Home() {

    const contacts = RESUME_DATA.contact
    const edu = RESUME_DATA.education
    const skills = RESUME_DATA.skills
    const projects = RESUME_DATA.projects

    return (
        <div className="max-w-4xl  mx-auto my-4 lg:my-16 p-2 selection:bg-black selection:text-gray-200">


            <main className="blu p-12 border border-gray-400  print:border-0">


                <div className="lg:flex">

                    <div className="w-full lg:w-2/3">

                        <section className=" flex flex-col justify-between">

                            <h3 className="mb-2  font-bold text-2xl text-justify">{RESUME_DATA.name}</h3>
                            <p className="font-monospace text-sm text-gray-500 lg:w-3/4">{RESUME_DATA.summary}</p>
                            <p className="font-monospace text-sm text-gray-500 mt-2 flex items-center">
                                <span className="mr-2"><GlobeIcon className="my-0 p-0"/></span>{RESUME_DATA.location}
                            </p>
                        </section>

                    </div>

                    <div className="flex justify-center w-full lg:w-1/3 mt-4 lg:mt-0">
                        <div className=" flex justify-center flex-col lg:block w-full sm:w-2/3 lg:w-full mb-5">
                            <h5 className="font-bold text-lg text-center lg:text-right  mb-2 px-1">
                                Контакты
                            </h5>
                            <ul className="text-sm ">
                                {contacts.map((contacts) => (
                                    <li key={contacts.name}
                                        className="px-1 py-1 border-y border-transparent hover:border-gray-400 transition-all duration-150 ease-in-out ">
                                        <Link className=" flex items-center text-gray-600"
                                              href={contacts.url} target="_blank">
                                    <span className="h-5 w-5 mr-2">{contacts.icon &&
                                        <contacts.icon className="size-4"/>}</span>
                                            {contacts.name}
                                            <span
                                                className="text-gray-600 ml-auto">{contacts.url_name}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="">
                    <Section>
                        <h2 className="text-xl font-bold ">Обо мне</h2>
                        <p className="text-pretty font-monospace text-sm text-muted-foreground text-gray-500">
                            {RESUME_DATA.about}
                        </p>
                    </Section>

                    <Section>
                        <h2 className="text-xl font-bold ">Опыт работы</h2>
                        <p className="text-pretty italic font-monospace text-sm text-muted-foreground text-gray-500">
                            Здесь могла быть ваша компания... 
                        </p>
                    </Section>


                    <Section>
                        <h2 className="text-xl font-bold">Образование</h2>

                        {edu.map((edu) => (
                            <div key={edu.university+edu.end}
                                 className="rounded-lg bg-card text-card-foreground text-gray-700 mb-3">
                                <div className="flex flex-col space-y-1.5">
                                    <div className="flex items-center justify-between gap-x-2 text-base"><h3
                                        className="font-semibold leading-none text-gray-700">{edu.university}</h3>
                                        <div className="text-sm tabular-nums text-gray-500 ">{edu.start} - {edu.end}
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="text-pretty font-monospace text-sm text-muted-foreground mt-2 text-gray-500">
                                    {edu.speciality} ({edu.degree})
                                </div>
                            </div>
                        ))}

                    </Section>

                    <Section>
                        <h2 className="text-xl font-bold">Навыки</h2>

                        <div className=" flex flex-wrap gap-1 text-xs">
                            {skills.map((skills) => (
                                <span key={skills}
                                      className="inline-flex font-monospace items-center rounded-xl bg-gray-700 print:bg-gray-700 text-gray-100 print:text-gray-100 px-2 py-1 text-xs font-medium ring-1 ring-inset ring-gray-500/10">{skills}</span>
                            ))}
                        </div>
                    </Section>


                    <section className="flex min-h-0 flex-col gap-y-3 break-before-page scroll-mb-16"><h2
                        className="text-xl font-bold">Проекты</h2>

                        <div
                            className=" grid grid-cols-1 gap-3 print:grid-cols-3 print:gap-2 md:grid-cols-2 lg:grid-cols-3">
                            {projects.map((projects) => (

                                <div key={projects.title}
                                     className="rounded-lg bg-card text-card-foreground flex flex-col overflow-hidden border border-gray-400 p-3">
                                    <div className="flex flex-col space-y-1.5">
                                        <div className="space-y-1"><h3
                                            className="font-semibold inline-flex tracking-tight text-base">
                                            <Link
                                                href={projects.link.href} target="_blank"
                                                className="inline-flex  items-center gap-1 hover:underline">
                                                {projects.title} {projects.online &&
                                                <span className="size-1 rounded-full mx-1 bg-green-500"></span>}
                                            </Link>
                                            {projects.link.git &&
                                                <a className="ml-1 inline-flex  items-center gap-1 hover:underline "
                                                   href={projects.link.git}>
                                                    <GitHubIcon className="size-4"/>Git
                                                </a>
                                            }
                                        </h3>
                                            <p className="text-muted-foreground whitespace-pre-wrap font-monospace text-xs text-[10px]">{projects.description}</p>
                                        </div>
                                    </div>
                                    <div className="text-pretty font-mono text-sm text-muted-foreground mt-auto flex">
                                        <div className="mt-2 flex flex-wrap gap-1">

                                            {projects.techStack.map((techStack) => (
                                                <div key={projects.title + techStack}
                                                     className="inline-flex items-center  border font-semibold font-monospace transition-colors text-nowrap border-transparent rounded-xl bg-gray-100 px-1 py-0 text-[10px]">{techStack}
                                                </div>
                                            ))}


                                        </div>
                                    </div>
                                </div>

                            ))}

                        </div>


                    </section>

                </div>


            </main>

            <div className="print:hidden z-0">
                <ParticlesBackground/>
            </div>
        </div>


    );
}
