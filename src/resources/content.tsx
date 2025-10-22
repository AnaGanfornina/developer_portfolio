import { About, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Ana",
  lastName: "Ganfornina Arques",
  name: `Ana Ganfornina`,
  role: "iOS Develop",
  avatar: "/images/avatar.jpg",
  email: "aganforques@gmail.com",
  location: "Europe/Madrid", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["Spanish", "English", "French"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/AnaGanfornina",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/ana-ganfornina-arques/?locale=en_US",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building bridges between design and code</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Once UI</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I'm Ana, a design engineer at{" "}
      <Logo
        dark
        icon="/trademarks/wordmark-dark.svg"
        style={{ display: "inline-flex", top: "0.25em", marginLeft: "-0.25em" }}
      />
      , where I craft intuitive
      <br /> user experiences. After hours, I build my own projects.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Software Developer specialized in mobile applications for iOS and
        Android.
        I have a strong background in performing arts, which allows me to
        combine technical expertise with creative skills to develop innovative
        and visually engaging projects.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
       {
       company: "KeepCoding Bootcamp",
        timeframe: "2024 – 2025",
        role: "Mobile Developer (iOS & Android)",
        achievements: [
          <>Development of native mobile applications using Swift, SwiftUI, and Kotlin.</>,
          <>Creation of a final cross-platform app project for the Bootcamp showcase.</>,
        ],
        images: [],
      },
      {
        company: "Cía. Teatro Vándalo",
        timeframe: "2024 – 2025",
        role: "Projection and Lighting Designer, Touring Theater Technician",
        achievements: [
          <>Responsible for the design and operation of stage lighting and projections during tours.</>,
          <>Collaborated with directors to create visually cohesive scenic experiences.</>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Cía. Escenantropía",
        timeframe: "2023",
        role: "Lighting Designer & Touring Technician – Play “En un lugar de la Ñ”",
        achievements: [
          <>Design and implementation of the lighting setup for the touring play.</>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Bootcamp in Mobile App Development (iOS & Android) – KeepCoding",
        description: <>Comprehensive program focused on Swift, Kotlin, and app architectures.</>,
      },
      {
        name: "Bachelor’s Degree in Dramatic Arts – Scenography Specialization",
        description: <>Training in stage design, visual storytelling, and production design.</>,
      },
      {
        name: "Higher Vocational Diploma in Audiovisual and Show Production",
        description: <>Focus on lighting, sound, and stage management for live performances.</>,
      },
      {
        name: "Elementary Degree in Music",
        description: <>Studies in rhythm, harmony, and musical interpretation.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "iOS Development",
        description: <>Swift, SwiftUI, UIKit, CoreData, SwiftData, SQLite, Combine, Async/Await.</>,
        tags: [
          { name: "Swift", icon: "swift" },
          { name: "SwiftUI", icon: "swift" },
          { name: "Xcode", icon: "apple" },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [],
       },
      {
        title: "Android Development",
        description: <>Kotlin, Jetpack Compose, MVVM, Clean Architecture, Repository pattern.</>,
        tags: [
          { name: "Kotlin", icon: "kotlin" },
          { name: "Jetpack Compose", icon: "android" },
        ],
        images: [],
      },
      {
        title: "Frameworks & Tools",
        description: <>Postman, Vapor, KeyChain, RxSwift, Photoshop, Figma, AutoCAD, SketchUp, Blender, Final Cut.</>,
        tags: [
          { name: "Figma", icon: "figma" },
          { name: "Photoshop", icon: "photoshop" },
          { name: "AutoCAD", icon: "autocad" },
        ],
        images: [],
      },
      {
        title: "Architectures & Patterns",
        description: <>MVVM, MVC, VIPER, Clean Architecture, Delegate, Repository, Singleton, Builder.</>,
        tags: [
          { name: "MVVM", icon: "code" },
          { name: "Clean Architecture", icon: "layers" },
        ],
        images: [],
      },
    ],
  },
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, work, gallery };
