import { IRepo } from "@/App";
import ProjectInfoCard from "./ProjectInfoCard";
import { motion } from 'framer-motion';
import LoadingRepos from "./LoadingRepos";

interface CarouselProps {
    repos: IRepo[];
}

const ProjectsCarousel = ({ repos }: CarouselProps) => {
    return repos.length === 0 ? (
        <LoadingRepos />
    ) : (
        <div className="flex justify-center mt-5">
            <div className="flex flex-wrap justify-evenly gap-6 w-full max-w-6xl">
                {repos.map((repo, index) => (
                    <motion.div
                        key={repo.id}
                        className="relative"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ scale: 1.05, boxShadow: "0px 0px 10px rgba(59, 130, 246, 0.5)" }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <ProjectInfoCard repos={[repo]} />
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default ProjectsCarousel;