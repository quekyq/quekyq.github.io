import { Link } from 'react-router-dom';

const ProjectCard = ({ id, title, shortDescription, image }) => {
    return (
        <Link to={`/project/${id}`} className="group">
            <div className="bg-white rounded-lg overflow-hidden border-stone-950 border-4 transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
                <div className="aspect-video overflow-hidden">
                    <img 
                        src={image} 
                        alt={title} 
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                </div>
                <div className="p-6">
                    <h3 className="text-xl font-title uppercase font-bold text-black mb-2">{title}</h3>
                    <p className="text-gray-600 text-sm font-body">{shortDescription}</p>
                </div>
            </div>
        </Link>
    );
};

export default ProjectCard; 