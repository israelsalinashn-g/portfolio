
export const studies = [
  {
    title: {
      'es': "Ingeniero en Informática",
      'en': "Bachelor’s Degree in Computer Engineering",
    },
    corporation: "CEUTEC (San Pedro Sula) ",
    date: "2024",
  },
  {
    title: {
      'es': "Técnico en Ciencias de la Computación",
      'en': "Computer Science Technician",
    },
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
    title: "Angular",
    icon: IconKeys.angular,
  },
  {
    title: "Astro",
    icon: IconKeys.astro,
  },
  {
    title: "CSS",
    icon: IconKeys.css,
  },
  {
    title: "Dart",
    icon: IconKeys.dart,
  },
  {
    title: "Flutter",
    icon: IconKeys.flutter,
  },
  {
    title: "Git",
    icon: IconKeys.git,
  },
  {
    title: "Github",
    icon: IconKeys.github,
  },
  {
    title: "HTML",
    icon: IconKeys.html,
  },
  {
    title: "Javascript",
    icon: IconKeys.javascript,
  },
  {
    title: "Material UI",
    icon: IconKeys.materialui,
  },
  {
    title: "MongoDB",
    icon: IconKeys.mongodb,
  },
  {
    title: "NestJS",
    icon: IconKeys.nestjs,
  },
  {
    title: "NodeJS",
    icon: IconKeys.nodejs,
  },
  {
    title: "Tailwind",
    icon: IconKeys.tailwind,
  },
  {
    title: "Typescript",
    icon: IconKeys.typescript,
  },
  {
    title: "SQL Server",
    icon: IconKeys.sqlserver,
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
    link2: "/videos/orientaplus_web.mp4",
    description: {
      'es': `Proyecto FullStack para la gestión de departamento de orientación educativa, integra un asistente con IA`,
      'en': `FullStack project for the management of the educational guidance department, integrates an AI assistant`,
    },
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
    link: "https://youtu.be/-IuVWy_9R7c",
    link2: "/videos/sgah_web_app.mp4",
    description: {
      'es': `Sistema para la gestión de alimentación hospitalaria para múltiples salas y tipos de alimentación.`,
      'en': `System for the management of hospital food for multiple rooms and types of food.`,
    },
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
    link2: "/videos/Terrakai-mockup3.mp4",
    description: {
      'es': `Aplicación móvil para la gestión de agencias de bienes raíces.`,
      'en': `Mobile application for the management of real estate agencies.`,
    },
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
    link2: "/videos/MejoresAutos-mockup3.mp4",
    description: {
      'es': "Aplicación móvil para la gestión de dealer de autos.",
      'en': "Mobile application for the management of car dealers.",
    },
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
    link2: "/videos/OrientaPlus_Movil.mp4",
    description: {
      'es': "Aplicación móvil para consultas de orientación educativa.",
      'en': "Mobile application for educational guidance consultations.",
    },
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
    img: "/certifications/unifi.png",
    title: "UniFi Network Professional",
    date: "2024",
  },
  {
    img: "/certifications/Genexus.png",
    title: "GeneXus 17 Analyst",
    date: "2022",
  },
  {
    img: "/certifications/Genexus.png",
    title: "GeneXus 17 Junior Analyst",
    date: "2022",
  },
  {
    img: "/certifications/Lenel.jpg",
    title: "Lenel Certified Professional",
    date: "2019",
  },
  {
    img: "/certifications/Milestone.png",
    title: "Milestone Certified Engineer",
    date: "2019",
  },
  {
    img: "/certifications/Mikrotik.png",
    title: "MikroTik Certified Network Associate",
    date: "2019",
  },
  {
    img: "/certifications/Kantech.png",
    title: "kantech - Entrapass Corporate Edition",
    date: "2019",
  },

];
