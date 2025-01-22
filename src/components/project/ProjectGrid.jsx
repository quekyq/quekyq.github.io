import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function ProjectGrid({ projects }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8">
            {projects.map((project) => (
                <Link 
                    key={project.id} 
                    to={`/projects/${project.id}`}
                    className="group"
                >
                    <div className="flex flex-col gap-2">
                        <div className="aspect-video overflow-hidden rounded-lg ">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover rounded-lg border-2 border-stone-950 group-hover:border-rose-400 group-hover:bg-black/40 transition-all duration-100"
                            />
                            <h3 className="text-white font-title text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                    {project.title}
                                </h3>
                            
                        </div>
                        <div className="text-left">
                        
                            <h3 className="text-lg font-title text-stone-950">{project.title}</h3>
                            <p className="text-sm font-body text-stone-600">{project.description}</p>
                        </div>
                        
                    </div>
                </Link>
            ))}
        </div>
    );
}

ProjectGrid.propTypes = {
    projects: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            shortDescription: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default ProjectGrid; 