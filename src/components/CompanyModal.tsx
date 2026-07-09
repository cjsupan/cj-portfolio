import { AnimatePresence, motion } from "motion/react";
import { X } from "lucide-react";
import { useEffect } from "react";
import type { About } from "../types/about";

interface CompanyModalProps {
  company: About | null;
  onClose: () => void;
}

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: 16, scale: 0.98 },
};

const CompanyModal = ({ company, onClose }: CompanyModalProps) => {
  useEffect(() => {
    if (!company) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [company, onClose]);

  return (
    <AnimatePresence>
      {company && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8 bg-black/60 backdrop-blur-sm"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={onClose}
        >
          <motion.div
            className="company-modal-scroll w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-background-light dark:bg-background-dark-alt border border-secondary-light/20 dark:border-secondary-dark/20 rounded-2xl p-8 md:p-10"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="sticky top-4 ml-auto flex w-10 h-10 items-center justify-center rounded-full bg-background-light dark:bg-background-dark-alt border border-secondary-light/30 dark:border-secondary-dark/30 text-secondary-light dark:text-secondary-dark hover:text-primary-light dark:hover:text-primary-dark hover:border-primary-light/40 dark:hover:border-primary-dark/40 shadow-md z-20 cursor-pointer"
            >
              <X size={20} />
            </button>

            <div className="flex items-start justify-between gap-4 mb-8">
              <div>
                <h3 className="text-3xl font-heading font-bold text-primary-light dark:text-primary-dark">
                  {company.company}
                </h3>
                <p className="text-md text-primary-light dark:text-primary-dark mt-1">
                  {company.title} · {company.type}
                </p>
                <p className="text-sm text-secondary-light dark:text-secondary-dark">
                  {company.date}
                </p>
              </div>
            </div>

            {/* Overview */}
            <div className="mb-8">
              <h4 className="text-sm font-medium uppercase tracking-widest text-secondary-light dark:text-secondary-dark mb-3">
                Overview
              </h4>
              <p className="text-lg text-primary-light dark:text-primary-dark leading-relaxed">
                {company.overview}
              </p>
            </div>

            {company.projects.map((project, i) => (
              <div key={i} className="mb-8 last:mb-0">
                <h5 className="text-lg font-heading font-semibold text-primary-light dark:text-primary-dark">
                  {project.name}
                </h5>
                <ul className="mt-2 flex flex-col gap-1.5 list-disc list-outside pl-5 marker:text-accent-light">
                  {project.description.map((point, j) => (
                    <li
                      key={j}
                      className="text-md text-secondary-light dark:text-secondary-dark leading-relaxed"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {company.technologies?.length > 0 && (
              <div>
                <h4 className="text-sm font-medium uppercase tracking-widest text-primary-light dark:text-secondary-dark mb-4">
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {company.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className={
                        "px-2 py-1 text-[10px] uppercase tracking-wider border rounded-sm border-primary-light dark:border-secondary-dark text-primary-light dark:text-secondary-dark"
                      }
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CompanyModal;
