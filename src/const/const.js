import { date } from "astro/zod";

export const studies = [
  {
    title: "Ingeniero en Informática",
    corporation: "CEUTEC (San Pedro Sula) ",
    date: "2024",
  },
  {
    title: "Técnico en Ciencias de la Computación",
    corporation: "CAD Sistemas",
    date: "1992",
  },
];

export const IconKeys = {
  angular: "angular",
  astro: "astro",
  css: "css",
  dart: "dart",
  firebase: "firebase",
  flutter: "flutter",
  git: "git",
  github: "github",
  html: "html",
  javascript: "javascript",
  materialui: "materialui",
  mongodb: "mongodb",
  nestjs: "nestjs",
  nodejs: "nodejs",
  sqlserver: "sqlserver",
  tailwind: "tailwind",
  typescript: "typescript",

  // zustand: "zustand",
  // shadcn: "shadcn",
  // reactQuery: "reactQuery",
  // vite: "vite",
  // react: "react",
  // nextjs: "nextjs",
  // redux: "redux",
  // styled: "styled",
  // radix: "radix",
  // stripe: "stripe",
  // here add more icon keys
};

export const skills = [
  {
    title: "HTML",
    icon: IconKeys.html,
  },
  {
    title: "CSS",
    icon: IconKeys.css,
  },
  {
    title: "Javascript",
    icon: IconKeys.javascript,
  },
  {
    title: "Astro",
    icon: IconKeys.astro,
  },
  {
    title: "Typescript",
    icon: IconKeys.typescript,
  },
  {
    title: "Angular",
    icon: IconKeys.angular,
  },
  {
    title: "NestJS",
    icon: IconKeys.nestjs,
  },
  {
    title: "Flutter",
    icon: IconKeys.flutter,
  },
  {
    title: "Dart",
    icon: IconKeys.dart,
  },
  {
    title: "Tailwind",
    icon: IconKeys.tailwind,
  },
  {
    title: "Material UI",
    icon: IconKeys.materialui,
  },
  {
    title: "NodeJS",
    icon: IconKeys.nodejs,
  },
  {
    title: "MongoDB",
    icon: IconKeys.mongodb,
  },
  {
    title: "SQL Server",
    icon: IconKeys.sqlserver,
  },
  {
    title: "Git",
    icon: IconKeys.git,
  },
  {
    title: "Github",
    icon: IconKeys.github,
  },

  // {
  //   title: "Firebase",
  //   icon: IconKeys.firebase,
  // },
  // {
  //   title: "React Js",
  //   icon: IconKeys.react,
  // },
  // {
  //   title: "Next Js",
  //   icon: IconKeys.nextjs,
  // },
  // {
  //   title: "Redux Js",
  //   icon: IconKeys.redux,
  // },
  // {
  //   title: "Styled Components",
  //   icon: IconKeys.styled,
  // },
  // {
  //   title: "Radix UI",
  //   icon: IconKeys.radix,
  // },
  // {
  //   title: "React Query",
  //   icon: IconKeys.reactQuery,
  // },
  // {
  //   title: "Vite",
  //   icon: IconKeys.vite,
  // },
  // {
  //   title: "Zustand",
  //   icon: IconKeys.zustand,
  // },
  // {
  //   title: "Shadcn UI",
  //   icon: IconKeys.shadcn,
  // },
];


export const projects_web = [
  {
    img: "/projects/orientaplus.webp",
    title: "OrientaPlus",
    link: "https://youtu.be/TCjMLckmYLY?feature=share",
    description: `Proyecto FullStack para la gestión de departamento de orientación educativa, integra un asistente con IA`,
    technologies: [
      {
        icon: IconKeys.typescript,
      },
      {
        icon: IconKeys.nestjs,
      },
      {
        icon: IconKeys.angular,
      },
      {
        icon: IconKeys.mongodb,
      },
      {
        icon: IconKeys.tailwind,
      },
    ],
  },
  {
    img: "/projects/sgah.webp",
    title: "SGAH",
    link: "https://youtu.be/hnQYIqbG25I",
    description: `Sistema para la gestión de alimentación hospitalaria para múltiples salas y tipos de alimentación.`,
    technologies: [
      {
        icon: IconKeys.typescript,
      },
      {
        icon: IconKeys.nestjs,
      },
      {
        icon: IconKeys.angular,
      },
      {
        icon: IconKeys.sqlserver,
      },
      {
        icon: IconKeys.tailwind,
      },
    ],
  },
];

export const projects_movil = [
  {
    img: "/projects/terrakai.jpg",
    title: "TerraKAI",
    link: "https://youtube.com/shorts/yuatUGcrthc?feature=share",
    description: `Aplicación móvil para la gestión de agencias de bienes raíces.`,
    technologies: [
      {
        icon: IconKeys.dart,
      },
      {
        icon: IconKeys.flutter,
      },
      {
        icon: IconKeys.firebase,
      },
    ],
  },
  {
    img: "/projects/autodealer.jpg",
    title: "Auto Dealer",
    link: "https://youtube.com/shorts/ryv4M4wodjs?feature=share",
    description: "Aplicación móvil para la gestión de dealer de autos.",
    technologies: [
      {
        icon: IconKeys.dart,
      },
      {
        icon: IconKeys.flutter,
      },
      {
        icon: IconKeys.firebase,
      },
    ],
  },
  {
    img: "/projects/orientaplus_movil.jpg",
    title: "OrientaPlus Móvil",
    link: "https://youtube.com/shorts/puuyvKNYnUs?feature=share",
    description: "Aplicación móvil para consultas de orientación educativa.",
    technologies: [
      {
        icon: IconKeys.angular,
      },
      {
        icon: IconKeys.ionic,
      },
      {
        icon: IconKeys.nestjs,
      },
    ],
  },
];

export const certifications = [
  {
    img: "../../public/certifications/unifi.png",
    title: "UniFi Network Professional",
    date: "2024",
  },
  {
    img: "../../public/certifications/Genexus.png",
    title: "GeneXus 17 Analyst",
    date: "2022",
  },
  {
    img: "../../public/certifications/Genexus.png",
    title: "GeneXus 17 Junior Analyst",
    date: "2022",
  },
  {
    img: "../../public/certifications/Lenel.jpg",
    title: "Lenel Certified Professional",
    date: "2019",
  },
  {
    img: "../../public/certifications/Milestone.png",
    title: "Mlestone Certified Engineer",
    date: "2019",
  },
  {
    img: "../../public/certifications/Mikrotik.png",
    title: "MikroTik Certified Network Associate",
    date: "2019",
  },
  {
    img: "../../public/certifications/Kantech.png",
    title: "kantech - Entrapass Corporate Edition",
    date: "2019",
  },

];
