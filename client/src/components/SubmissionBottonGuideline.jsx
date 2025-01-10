import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GuidelinesDropdown from '../components/guidelinsDropdown'; // Correct the import path

const SubmissionBottonGuideline = ({ title, sections }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const navigate = useNavigate();

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleSubmissionClick = () => {
        navigate('/submittable', { state: { title, sections } });
    };

    return (
        <div className="m-10">
            <div className="category panel-btn relative p-4 border-b border-gray-300 flex justify-between items-center">
                {/* Title on the left */}
                <div className="inline-block middle title-column text-left">
                    <div className="header-3 word-wrap text-lg font-bold text-[#BF0000]" id={title.replace(/\s/g, '-')}>
                        <a target="_top" href="#" className="text-lg font-bold text-[#BF0000]">
                            {title}
                        </a>
                    </div>
                </div>

                {/* Right side: Guidelines button and Submit button */}
                <div className="inline-block middle flex items-center space-x-4">
                    {/* Dropdown Button */}
                    <div className="relative inline-block text-left">
                        <button
                            type="button"
                            className="inline-flex justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                            onClick={toggleDropdown}
                            aria-expanded={isDropdownOpen}
                            aria-controls={`${title.replace(/\s/g, '-')}-guidelines`}
                        >
                            Guidelines
                            <svg
                                className={`-mr-1 h-5 w-5 text-gray-400 transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
                    </div>

                    {/* Submit Button */}
                    <div className="inline-block middle submit-column">
                        <button
                            className="btn org-primary link-color-inverted bg-[#BF0000] text-white py-2 px-4 rounded hover:bg-opacity-30"
                            onClick={handleSubmissionClick}
                            aria-label="Submit work"
                        >
                            <span>Submit</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Dropdown content */}
            {isDropdownOpen && (
                <GuidelinesDropdown title={title} sections={sections} /> // Corrected prop name
            )}
        </div>
    );
};

export default SubmissionBottonGuideline;
