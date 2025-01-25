import { FaDownload } from 'react-icons/fa';
import resumePDF from '../assets/YuQingQuek_resume.pdf';

function Resume() {
    return (
        <div className="px-4 py-8 sm:py-16">
            <div className="max-w-4xl mx-auto">
                {/* PDF Viewer */}
                <div className="w-full h-[85vh] rounded-2xl overflow-hidden">
                    <object
                        data={`${resumePDF}#view=FitW`}
                        type="application/pdf"
                        className="w-full h-full"
                    >
                        <iframe
                            src={`https://docs.google.com/viewer?url=${window.location.origin}${resumePDF}&embedded=true`}
                            className="w-full h-full"
                            title="Resume"
                        />
                    </object>
                </div>
            </div>
        </div>
    );
}

export default Resume;