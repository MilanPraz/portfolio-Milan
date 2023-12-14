"use client";

import { useRef, useState, useTransition } from "react";
import ProjectCard from "../sub/ProjectCard";
import ProjectTag from "../sub/ProjectTag";
import { motion, useInView } from "framer-motion";

const projectData = [
  {
    id: 1,
    title: "Job Portal Website",
    description:
      "This is a job portal website which is fully a MERN Stack Project",
    image: "/project-1.png",
    tag: ["all", "web"],
    gitUrl: "https://github.com/MilanPraz/jobholic-app",
    previewUrl: "https://jobholic-app.vercel.app/",
  },
  {
    id: 2,
    title: "Uptown Websiite",
    description:
      "This is a Real Estate Marketplaces website which is fully a MERN Stack Project",
    image: "/project-2.png",
    tag: ["all", "web"],
    gitUrl: "https://github.com/MilanPraz/uptown-frontend",
    previewUrl: "https://uptown-self.vercel.app/",
  },
  {
    id: 3,
    title: "Foodmandu",
    description: "This is a foodmandu app clone",
    image: "/foodmandu.png",
    tag: ["all", "mobile"],
    gitUrl: "https://github.com/MilanPraz/uptown-frontend",
    previewUrl: "https://uptown-self.vercel.app/",
  },
];

function ProjectSection() {
  const [isPending, startTransition] = useTransition();
  const [tab, setTab] = useState("all");

  const ref = useRef(null);
  console.log(ref);
  const isInView = useInView(ref, { once: true });
  console.log(isInView);

  function handleTabChange(id) {
    startTransition(() => {
      setTab(id);
    });
  }

  const filteredProjects = projectData.filter((project) =>
    project.tag.includes(tab)
  );
  // console.log(filteredProjects);

  const cardVariant = {
    initial: { opacity: 0, y: 50 },
    animate: { y: 0, opacity: 1 },
  };
  return (
    <section id="projects">
      <h2 className=" text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className=" text-white flex flex-row gap-4 items-center justify-center py-6">
        <ProjectTag
          handleTabChange={() => handleTabChange("all")}
          active={tab === "all"}
        >
          All
        </ProjectTag>
        <ProjectTag
          handleTabChange={() => handleTabChange("web")}
          active={tab === "web"}
        >
          Web
        </ProjectTag>
        <ProjectTag
          handleTabChange={() => handleTabChange("mobile")}
          active={tab === "mobile"}
        >
          Mobile
        </ProjectTag>
      </div>
      <div
        ref={ref}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
      >
        {filteredProjects.map((project, index) => (
          <motion.li
            key={project.id}
            variants={cardVariant}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.3 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </div>
    </section>
  );
}

export default ProjectSection;
