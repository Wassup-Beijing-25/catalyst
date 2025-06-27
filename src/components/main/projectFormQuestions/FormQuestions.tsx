/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaProjectDiagram,
  FaGithub,
  FaLink,
  FaUser,
  FaInfoCircle,
  FaFileAlt,
} from "react-icons/fa";
import StickyButton from "../../shared/stickyButton/StickyButton";

interface Question {
  label: string;
  icon: any;
  name: string;
  placeholder: string;
  type: "text" | "email" | "url" | "textarea";
}

const questions: Question[] = [
  {
    label: "Project Title",
    icon: <FaProjectDiagram />,
    name: "projectTitle",
    placeholder: "My Awesome Project",
    type: "text",
  },
  {
    label: "Project Description",
    icon: <FaInfoCircle />,
    name: "description",
    placeholder: "Brief about your project...",
    type: "textarea",
  },
  {
    label: "GitHub Repository URL",
    icon: <FaGithub />,
    name: "github",
    placeholder: "https://github.com/user/project",
    type: "url",
  },
  {
    label: "Live Project URL (if any)",
    icon: <FaLink />,
    name: "liveUrl",
    placeholder: "https://project.com",
    type: "url",
  },
  {
    label: "Why do you need this grant?",
    icon: <FaFileAlt />,
    name: "reason",
    placeholder: "Explain your need for the grant...",
    type: "textarea",
  },
  {
    label: "Estimated Budget",
    icon: <FaFileAlt />,
    name: "budget",
    placeholder: "e.g., $5000",
    type: "text",
  },
  {
    label: "Team Members (if any)",
    icon: <FaUser />,
    name: "team",
    placeholder: "Alice, Bob, Charlie...",
    type: "text",
  },
];

const FormQuestions = () => {
  const [page, setPage] = useState<number>(0);
  const [formData, setFormData] = useState<Record<string, string>>({});

  const current = questions[page];

  const handleChange = (e: any) => {
    setFormData({ ...formData, [current.name]: e.target.value });
  };

  const handleNext = () => {
    if (page < questions.length - 1) setPage(page + 1);
  };

  const handleBack = () => {
    if (page > 0) setPage(page - 1);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // Call your backend API here
  };

  const progressPercentage = ((page + 1) / questions.length) * 100;

  return (
    <div className="mt-40 z-[1000]   flex justify-center items-center px-4 py-12">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-3xl z-[1000] px-10 pb-10 pt-16 rounded-2xl 
            bg-black/10 backdrop-blur-lg 
            border border-white/10 shadow-xl"
      >
        <div className="relative mb-20">
          {/* Progress bar background */}
          <div className="h-1 bg-purple-800/40 rounded-full overflow-hidden">
            <motion.div
              className="h-1 bg-purple-500 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progressPercentage}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>

          {/* Step circles */}
          <div className="flex justify-between items-center absolute top-[-14px] left-0 right-0 px-2">
            {questions.map((q, index) => (
              <div key={index} className="flex flex-col items-center w-full">
                <motion.div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                    index === page
                      ? "bg-purple-600 text-white scale-110"
                      : index < page
                      ? "bg-purple-400 text-white"
                      : "bg-purple-300 text-white"
                  }`}
                  transition={{ duration: 0.3 }}
                >
                  {index + 1}
                </motion.div>
                <span className="text-[10px] mt-1 text-white opacity-70">
                  {q.label.split(" ")[0]}
                </span>
              </div>
            ))}
          </div>
        </div>

        <motion.div
          key={current.name}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <label className="block text-3xl font-semibold mb-4 text-gray-200 flex items-center gap-3">
            {/* <span className="text-gray-200 text-2xl">{current.icon}</span>{" "} */}
            {current.label}
          </label>
          {current.type === "textarea" ? (
            <textarea
              name={current.name}
              placeholder={current.placeholder}
              value={formData[current.name] || ""}
              onChange={handleChange}
              className="w-full p-4 bg-white/10 border border-gray-900 rounded-2xl shadow-inner  min-h-[120px] resize-none"
              required
            />
          ) : (
            <input
              type={current.type}
              name={current.name}
              placeholder={current.placeholder}
              value={formData[current.name] || ""}
              onChange={handleChange}
              className="w-full p-4 bg-white/10 border-none rounded-2xl shadow-inner outline-none "
              required
            />
          )}
        </motion.div>

        <div className="flex justify-between items-center mt-10">
          <StickyButton
            onClick={handleBack}
            disabled={page === 0}
            className="flex items-center gap-2 text-white bg-gray-800 hover:bg-gray-900 px-8 py-3 rounded-2xl font-medium disabled:opacity-50"
          >
            Back
          </StickyButton>

          {page === questions.length - 1 ? (
            <StickyButton
              type="submit"
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold px-6 py-3 rounded-2xl shadow-lg"
            >
              Submit Application
            </StickyButton>
          ) : (
            <StickyButton
              onClick={handleNext}
              className="flex items-center gap-2 bg-purple-800 hover:bg-purple-900 text-white font-semibold px-8 py-3 rounded-2xl shadow-lg"
            >
              Next
            </StickyButton>
          )}
        </div>
      </form>
    </div>
  );
};

export default FormQuestions;
