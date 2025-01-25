import resumePDF from '../assets/YuQingQuek_resume.pdf';
import { FaDownload } from 'react-icons/fa';

function Resume() {
    return (
        <div className="px-4 py-6 sm:py-14">
            <div className="max-w-4xl mx-auto">
                {/* Download button - only visible on mobile */}
                <div className="mb-6 flex justify-center sm:hidden">
                    <a 
                        href={resumePDF}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm gap-2 px-4 py-1 border-stone-950 border-2 text-black rounded-lg hover:text-rose-400 hover:border-rose-400 transition-colors font-body"
                    >
                        <FaDownload className="w-3 h-3" />
                        Download Resume
                    </a>
                </div>
                <div className="w-full h-[85vh] rounded-2xl overflow-hidden bg-white">
                    <iframe
                        src={resumePDF}
                        className="w-full h-full"
                        title="Resume"
                    />
                </div>
            </div>
        </div>
    );
}

export default Resume;