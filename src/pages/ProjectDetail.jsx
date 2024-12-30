import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';

const ProjectDetail = () => {
    const { id } = useParams();
    const project = projects.find(p => p.id === id);

    if (!project) {
        return <div>Project not found</div>;
    }

    return (
        <div className="container mx-auto px-4 py-16">
            <Link 
                to="/project" 
                className="text-blue-500 hover:text-rose-400 mb-8 inline-block"
            >
                ← Back to Projects
            </Link>
            
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-title text-blue-500 mb-6">{project.title}</h1>
                
                <div className="aspect-video mb-8 rounded-lg overflow-hidden">
                    <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="prose prose-lg max-w-none">
                    <p className="font-body text-gray-600">{project.fullDescription}</p>
                    
                    <h3 className="font-title text-blue-500 mt-8 mb-4">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                        {project.technologies.map(tech => (
                            <span 
                                key={tech} 
                                className="bg-blue-100 text-blue-500 px-3 py-1 rounded-full text-sm"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    <div className="flex gap-4 mt-8">
                        {project.github && (
                            <a 
                                href={project.github} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-blue-500 hover:text-rose-400"
                            >
                                View on GitHub
                            </a>
                        )}
                        {project.demo && (
                            <a 
                                href={project.demo} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-blue-500 hover:text-rose-400"
                            >
                                Live Demo
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail; 