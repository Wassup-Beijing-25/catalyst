import { useState } from "react";
import Navbar from "../../components/shared/navbar/Navbar";
import ProjectCard from "../../components/shared/projectCard/ProjectCard";
import { motion } from "framer-motion";
interface Project {
  id: number;
  title: string;
  description: string;
  votes: { up: number; down: number };
  progress: { current: number; total: number };
  category: "Defi" | "Gaming" | "NFT" | "Earn" | "Learn" | "DAO";
}

const categories: Project["category"][] = [
  "Defi",
  "Gaming",
  "NFT",
  "Earn",
  "Learn",
  "DAO",
];

const sortOptions = ["Newest", "Oldest", "Trending"] as const;
type SortOption = (typeof sortOptions)[number];

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
  const [selectedCategory, setSelectedCategory] = useState<
    "All" | Project["category"]
  >("All");
  const [sortBy, setSortBy] = useState<SortOption>("Newest");

  // Apply filters
  const filtered = dummyProjects
    .filter(
      (p) => selectedCategory === "All" || p.category === selectedCategory
    )
    .sort((a, b) => {
      if (sortBy === "Newest") return b.id - a.id;
      if (sortBy === "Oldest") return a.id - b.id;
      if (sortBy === "Trending") {
        const aScore = a.votes.up - a.votes.down;
        const bScore = b.votes.up - b.votes.down;
        return bScore - aScore;
      }
      return 0;
    });

  return (
    <div className="min-h-screen bg-black text-white relative">
      <div className="w-full flex flex-col items-center">
        <Navbar />
      </div>

      {/* Background layer */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full gradient-bg grid-overlay" />
      </div>

      {/* Filters & Sort UI */}
      <div className="relative z-10 px-6 md:px-20 pt-40">
        <div className="flex flex-wrap gap-2 mb-8 justify-between items-center">
          {/* Category filters */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory("All")}
              className={`px-4 py-1 rounded-full text-sm border ${
                selectedCategory === "All"
                  ? "bg-gradient-to-r from-purple-600 to-indigo-600 border-transparent text-white shadow-lg"
                  : "border-gray-600 text-gray-300 hover:text-white hover:border-purple-500 hover:bg-[#222]"
              }`}
            >
              All
            </button>
            {categories.map((cat) => (
              <motion.button
                layout
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1 rounded-full text-sm font-medium capitalize border transition-all duration-300
      ${
        selectedCategory === cat
          ? "bg-gradient-to-r from-purple-600 to-indigo-600 border-transparent text-white shadow-lg"
          : "border-gray-600 text-gray-300 hover:text-white hover:border-purple-500 hover:bg-[#222]"
      }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>

          {/* Sort dropdown */}
          <select
            className="bg-[#111]/80 backdrop-blur-md border border-gray-700 rounded-lg text-sm px-3 py-2 focus:outline-none"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as SortOption)}
          >
            {sortOptions.map((option) => (
              <option key={option} value={option}>
                Sort by: {option}
              </option>
            ))}
          </select>
        </div>

        {/* Project cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filtered.map((project) => (
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
