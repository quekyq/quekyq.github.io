import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';

const Project = () => {
    return (
        <div className="px-4 py-8">
            <div className="rounded-lg  min-h-[80vh] w-full p-8">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project) => (
                            <ProjectCard key={project.id} {...project} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;