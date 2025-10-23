"use client";

import SingleProjectCard from "./components/SingleProjectCard";

export default function WorkPage() {
  const projects = [
    {
      title: "FitTrack",
      description: "Una app para que los profesionales del fitness gestionen las rutinas de sus clientes.",
      images: [
        "/images/fittrack1.jpg",
        "/images/fittrack2.jpg"
      ]
    }
    // Para añadir más, solo duplica y cambia los datos:
    // {
    //   title: "Otro Proyecto",
    //   description: "Descripción del proyecto",
    //   images: ["/images/img4.jpg", "/images/img5.jpg"]
    // }
  ];

  return (
    <div style={{
      display: "flex",
      flexWrap: "wrap",
      gap: "24px",
      justifyContent: "center",
      padding: "24px"
    }}>
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
