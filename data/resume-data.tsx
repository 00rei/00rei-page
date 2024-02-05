import {GitHubIcon} from "@/components/icons/GitHubIcon";
import {TelegramIcon} from "@/components/icons/TelegramIcon";
import {EmailIcon} from "@/components/icons/EmailIcon";
import {PhoneIcon} from "@/components/icons/PhoneIcon";


export const RESUME_DATA = {
    name: "Верстунин Андрей",
    summary: "Fullstack Junior Developer",
    location: "Барнаул, Россия",
    about: "Как Fullstack разработчик, в качестве дипломной работы разработал и запустил АИС для стоматологического кабинета. Так же у меня есть пет-проекты, которые можно найти на этой странице. В данный момент ищу работу/стажировку на позицию Backend (или Fullstack) разработчика, готов выполнить тестовое задание. ",
    contact: [
        {
            name: "E-mail",
            url: "mailto:verstunin00@gmail.com",
            url_name: "verstunin00@gmail.com",
            icon: EmailIcon
        },
        {
            name: "Phone",
            url: "tel:+79133688973",
            url_name: "+7 913 368 8973",
            icon: PhoneIcon

        },
        {
            name: "Telegram",
            url: "https://t.me/napworld",
            url_name: "@napworld",
            icon: TelegramIcon
        },
        {
            name: "GitHub",
            url: "https://github.com/00rei",
            url_name: "@00rei",
            icon: GitHubIcon
        },
    ],
    education: [
        {
            university: "АлтГТУ им. И.И. Ползунова",
            speciality: "Прикладная информатика в экономике",
            degree: "магистратура",
            start: "2022",
            end: "по н.в.",
        },
        {
            university: "АлтГТУ им. И.И. Ползунова",
            speciality: "Прикладная информатика в экономике",
            degree: "бакалавриат",
            start: "2017",
            end: "2022",
        },
    ],
    skills: [
        "Python",
        "FastAPI",
        "SQLAlchemy",
        "Django",
        "JavaScript",
        "TypeScript",
        "React/Next.js",
        "PostgreSQL",
        "Linux",
        "Docker",
        "Nginx",
    ],
    projects: [
        {
            title: "Dental Family",
            techStack: [
                "Python",
                "Django",
                "Bootstrap",

            ],
            description: "АИС для стоматологического кабинета",
            link: {
                label: "dentalfamily22.ru",
                href: "https://dentalfamily22.ru/",
                git: "https://github.com/00rei/django_dental",
            },
            online: true
        },
        {
            title: "ASCII art + QR code",
            techStack: [
                "Python",
                "FastAPI",
                "TypeScript",
                "Next.js"
            ],
            description: "ASCII art генератор // \nQR-code генератор",
            link: {
                label: "create",
                href: "/create",
                git: ""
            },
            online: true

        },
    ]


}