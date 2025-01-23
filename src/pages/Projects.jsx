import { projects } from '../data/projects';
import ProjectGrid from '../components/project/ProjectGrid';

function Projects() {
    return (
        <div className="px-4 py-8">
            <div className="md:max-w-6xl mx-auto">
                <ProjectGrid projects={projects} />
            </div>
        </div>
    );
}

export default Projects; 