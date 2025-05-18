import React, { useEffect, useRef, useState } from 'react';

const ResumePage = () => {
  const [resumeData, setResumeData] = useState(null);
  const [isExporting, setIsExporting] = useState(false);
  const resumeRef = useRef();

  useEffect(() => {
    const storedData = localStorage.getItem("resumeFormData");
    if (storedData) {
      try {
        const parsedData = JSON.parse(storedData);
        setResumeData(parsedData);
      } catch (err) {
        console.error("Invalid JSON in localStorage:", err);
      }
    }
  }, []);

  const handlePrint = () => {
    setIsExporting(true);
    setTimeout(() => {
      window.print();
      setIsExporting(false);
    }, 300);
  };

  if (!resumeData) return <div className="text-center p-4">Loading resume data...</div>;

  const { personalDetails, education, experience, others } = resumeData;

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="print:hidden flex gap-4 mb-4">
        <button
          onClick={handlePrint}
          disabled={isExporting}
          className={`py-2 px-4 rounded font-sans flex items-center justify-center gap-2 ${
            isExporting ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 text-white'
          }`}
        >
          {isExporting ? (
            <>
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Preparing...
            </>
          ) : (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
              </svg>
              Print Resume
            </>
          )}
        </button>
      </div>

      {/* Resume Content */}
      <div
        ref={resumeRef}
        className="bg-white shadow-md w-full p-8 mb-6 font-serif print:shadow-none print:p-0"
        style={{
          maxWidth: "8.5in",
          minHeight: "11in",
          boxSizing: "border-box",
          margin: "0 auto"
        }}
      >
        {/* Header */}
        <div className="mb-6 text-center avoid-break">
          <h1 className="text-3xl font-serif mb-2">{personalDetails.fullName}</h1>
          <div className="text-sm text-gray-700">
            {personalDetails.email} | {personalDetails.phone}
          </div>
          <div className="text-sm text-gray-700">
            <a href={personalDetails.linkedIn}>{personalDetails.linkedIn}</a>
          </div>
        </div>

        <hr className="border-t border-gray-300 mb-6" />

        {/* Objective */}
        {others.objective && (
          <div className="mb-6 avoid-break">
            <div className="text-sm text-gray-700">{others.objective}</div>
            <hr className="border-t border-gray-300 mt-6" />
          </div>
        )}

        {/* Skills */}
        <div className="mb-8 avoid-break">
          <h2 className="text-lg font-bold mb-4 text-center">Skills</h2>
          <div className="mb-4 mx-10 text-sm">
            <ul className="flex flex-wrap gap-1">
              {others.skills
                .split(',')
                .map(item => item.trim())
                .filter(item => item !== '')
                .map((item, index) => (
                  <li key={index} className="bg-gray-200 px-4 py-1 rounded-lg">
                    {item}
                  </li>
                ))}
            </ul>
          </div>
          <hr className="border-t border-gray-300 mb-6" />
        </div>

        {/* Education */}
        <div className="mb-8 avoid-break">
          <h2 className="text-lg font-bold text-center mb-4">EDUCATION</h2>
          <div className="mb-4">
            <div className="flex justify-between items-start">
              <div className="font-bold">{education.institution}</div>
              <div className="text-right">{education.startDate} - {education.endDate}</div>
            </div>
            <div className="ml-4">
              <div>{education.degree}</div>
              <div className="ml-6 font-extralight">
                <ul className="list-disc">
                  {education.learnings
                    .split('.')
                    .map(item => item.trim())
                    .filter(item => item !== '')
                    .map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Experience */}
        <div className="mb-8 avoid-break">
          <h2 className="text-lg font-bold text-center mb-4">EXPERIENCE</h2>
          <div className="mb-4">
            <div className="flex justify-between items-start">
              <div className="font-bold">{experience.company}</div>
              <div className="text-right">
                {new Date(experience.startDate + "-01").toLocaleString('default', {
                  month: 'long',
                  year: 'numeric'
                })} - {experience.endDate
                  ? new Date(experience.endDate + "-01").toLocaleString('default', {
                      month: 'long',
                      year: 'numeric'
                    })
                  : "Present"}
              </div>
            </div>
            <div className="ml-4">
              <div className="uppercase text-sm font-semibold">{experience.jobTitle}</div>
              <div className="text-sm italic">{experience.location}</div>
              <div className="ml-6 font-extralight">
                <ul className="list-disc">
                  {experience.responsibilities
                    .split('.')
                    .map(item => item.trim())
                    .filter(item => item !== '')
                    .map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Other Info */}
        <div className="mb-8 avoid-break">
          <h2 className="text-lg font-bold text-center mb-4">ADDITIONAL DETAILS</h2>
          <ul className="ml-10 text-md">
            <li>
              <strong>Languages:</strong> {others.language}
            </li>
            {others.hobbies && <li><strong>Hobbies:</strong> {others.hobbies}</li>}
            {others.certification && <li><strong>Certification:</strong> {others.certification}</li>}
          </ul>
        </div>
      </div>

      {/* Print Styles */}
      <style>{`
        @media print {
          @page {
            size: letter portrait;
            margin: 0.5in;
          }
          body {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          .print\\:hidden {
            display: none !important;
          }
          .avoid-break {
            break-inside: avoid;
            page-break-inside: avoid;
          }
        }
      `}</style>
    </div>
  );
};

export default ResumePage;
