"use client";
import SingleProjectCard from "./components/SingleProjectCard";

export default function WorkPage() {
  const projects = [
    {
      title: "FitTrack Pro",
      description: "A fitness app that allows professionals to manage their clients’ routines intuitively and efficiently.",
      images: [
        "/images/fittrack1.jpg",
        "/images/fittrack2.jpg"
      ]
    },
    // Puedes añadir más proyectos aquí:
    // {
    //   title: "NutriBalance",
    //   description: "Plataforma de nutrición personalizada con seguimiento en tiempo real.",
    //   images: [
    //     "/images/nutri1.jpg",
    //     "/images/nutri2.jpg"
    //   ]
    // }
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "24px",
        padding: "40px 24px",
        minHeight: "100vh"
      }}
    >
      {projects.map((project, i) => (
        <SingleProjectCard
          key={i}
          title={project.title}
          description={project.description}
          images={project.images}
        />
      ))}
    </div>
  );
}