import pic from "../assets/picc.png";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = {
    FrontEnd: [
      {
        title: 'Project A',
        description: 'As a dedicated and innovative developer, I specialize in full-stack development with a solid foundation in both front-end and back-end technologies. I am currently pursuing an Integrated MTech in Computer Science Engineering from Jaypee Institute of Information Technology, Noida.',
        image: pic,
        technologies: ['React', 'CSS', 'JavaScript']
      },
      {
        title: 'Project B',
        description: 'As a dedicated and innovative developer, I specialize in full-stack development with a solid foundation in both front-end and back-end technologies. I am currently pursuing an Integrated MTech in Computer Science Engineering from Jaypee Institute of Information Technology, Noida.',
        image: pic,
        technologies: ['HTML', 'CSS', 'JavaScript']
      },
    ],
    BackEnd: [
      {
        title: 'Project C',
        description: 'As a dedicated and innovative developer, I specialize in full-stack development with a solid foundation in both front-end and back-end technologies. I am currently pursuing an Integrated MTech in Computer Science Engineering from Jaypee Institute of Information Technology, Noida.',
        image: pic,
        technologies: ['Node.js', 'Express', 'MongoDB']
      },
      {
        title: 'Project D',
        description: 'As a dedicated and innovative developer, I specialize in full-stack development with a solid foundation in both front-end and back-end technologies. I am currently pursuing an Integrated MTech in Computer Science Engineering from Jaypee Institute of Information Technology, Noida.',
        image: pic,
        technologies: ['Python', 'Django', 'PostgreSQL']
      },
    ],
    DevOps: [
      {
        title: 'Project E',
        description: 'As a dedicated and innovative developer, I specialize in full-stack development with a solid foundation in both front-end and back-end technologies. I am currently pursuing an Integrated MTech in Computer Science Engineering from Jaypee Institute of Information Technology, Noida.',
        image: pic,
        technologies: ['Docker', 'Kubernetes', 'AWS']
      },
      {
        title: 'Project F',
        description: 'As a dedicated and innovative developer, I specialize in full-stack development with a solid foundation in both front-end and back-end technologies. I am currently pursuing an Integrated MTech in Computer Science Engineering from Jaypee Institute of Information Technology, Noida.',
        image: pic,
        technologies: ['Jenkins', 'Terraform', 'Azure']
      },
    ],
  };

  return (
    <section id="projects">
      <div className="border-b border-neutral-900 pb-4  mt-20">
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.5 }}
          className="my-20 text-center text-4xl">Projects</motion.h1>
        <div>
          {Object.keys(projects).map((category, index) => (
            <div key={index}>
              <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 0 }}
                transition={{ duration: 1.5 }}
                className="text-2xl mb-4">{category}</motion.h2>
              <div className="mb-8 flex flex-wrap lg:justify-center">
                {projects[category].map((project, projectIndex) => (
                  <div key={projectIndex} className="mb-8 flex flex-wrap lg:justify-center">
                    <motion.div
                      whileInView={{ opacity: 1, x: 0 }}
                      initial={{ opacity: 0, x: -100 }}
                      transition={{ duration: 0.5 }}
                      className="w-full lg:w-1/4">
                      <img
                        src={project.image}
                        width={150}
                        height={150}
                        alt={project.title}
                        className="mb-6 rounded"
                      />
                    </motion.div>
                    <motion.div
                      whileInView={{ opacity: 1, x: 0 }}
                      initial={{ opacity: 0, x: 100 }}
                      transition={{ duration: 0.5 }}
                      className="w-full max-w-xl lg:w-3/4">
                      <h6 className="mb-2 font-semibold">{project.title}</h6>
                      <p className="mb-4 text-neutral-400">{project.description}</p>
                      <div className="mb-4">
                        {project.technologies.map((tech, index) => (
                          <span key={index} className="mr-2 rounded bg-neutral-900 text-white px-2 py-1 font-medium text-purple-800">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div >
    </section>
  );
}

export default Projects;
