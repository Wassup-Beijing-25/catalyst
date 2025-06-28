import Navbar from "../../components/shared/navbar/Navbar";
import ProjectCard from "../../components/shared/projectCard/ProjectCard";

interface Project {
  id: number;
  title: string;
  description: string;
  votes: { up: number; down: number };
  progress: { current: number; total: number };
  category: "Defi" | "Gaming" | "NFT" | "Earn" | "Learn" | "DAO";
}

const dummyProjects: Project[] = [
  {
    id: 1,
    title: "AI Chatbot Project",
    description: "Built with GPT, Node.js and Tailwind",
    votes: { up: 54, down: 3 },
    progress: { current: 72, total: 100 },
    category: "Learn",
  },
  {
    id: 2,
    title: "E-commerce Dashboard",
    description: "React + Express + MongoDB Admin Panel",
    votes: { up: 30, down: 5 },
    progress: { current: 48, total: 80 },
    category: "Earn",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "Responsive with Tailwind + Framer Motion",
    votes: { up: 90, down: 1 },
    progress: { current: 100, total: 100 },
    category: "DAO",
  },
  {
    id: 4,
    title: "Face Recognition App",
    description: "AWS Rekognition + React Native integration",
    votes: { up: 65, down: 2 },
    progress: { current: 60, total: 100 },
    category: "NFT",
  },
  {
    id: 5,
    title: "Real Estate Lead Manager",
    description: "Tracks leads & sales with powerful filters",
    votes: { up: 40, down: 0 },
    progress: { current: 25, total: 50 },
    category: "Defi",
  },
  {
    id: 6,
    title: "Resort Booking System",
    description: "Book rooms, activities & check availability",
    votes: { up: 70, down: 4 },
    progress: { current: 80, total: 100 },
    category: "Gaming",
  },
];

const ProjectList = () => {
  return (
    <div className="min-h-screen bg-black text-white relative">
      <div className="w-full flex flex-col items-center">
        <Navbar />
      </div>

      {/* Background layer */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full gradient-bg grid-overlay" />
      </div>

      <div className="relative z-10 px-6 md:px-20 pt-40">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {dummyProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              votes={project.votes}
              progress={project.progress}
              category={project.category}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
