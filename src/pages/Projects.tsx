
import { useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft, Printer, Download } from "lucide-react";
import { useRef } from "react";
import html2pdf from "html2pdf.js";

const Projects = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { projectData, selectedSteps, isEnglish } = location.state || {};
  const contentRef = useRef<HTMLDivElement>(null);

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPDF = () => {
    if (contentRef.current) {
      const opt = {
        margin: [10, 10],
        filename: isEnglish ? 'project-details.pdf' : 'details-projet.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
      };

      html2pdf().set(opt).from(contentRef.current).save();
    }
  };

  if (!projectData) {
    return (
      <div className="min-h-screen bg-white p-6 md:p-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-4">
            {isEnglish ? "No project data available" : "Aucune donnée de projet disponible"}
          </h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white p-6 md:p-12">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => navigate("/")}
            className="flex items-center space-x-2 text-secondary-DEFAULT hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>{isEnglish ? "Back" : "Retour"}</span>
          </button>
          <div className="flex space-x-4">
            <button
              onClick={handlePrint}
              className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Printer className="h-5 w-5" />
              <span>{isEnglish ? "Print" : "Imprimer"}</span>
            </button>
            <button
              onClick={handleDownloadPDF}
              className="flex items-center space-x-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
            >
              <Download className="h-5 w-5" />
              <span>{isEnglish ? "Download PDF" : "Télécharger PDF"}</span>
            </button>
          </div>
        </div>

        <div ref={contentRef} className="bg-white p-4 rounded-lg shadow-lg">
          <h1 className="text-xl font-bold mb-2">
            {isEnglish ? "Project Details" : "Détails du projet"}
          </h1>

          <div className="grid grid-cols-2 gap-2 mb-3">
            <div>
              <p className="text-xs font-semibold text-gray-600">{isEnglish ? "Client Name" : "Nom du client"}</p>
              <p className="text-sm">{projectData.clientName}</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-600">{isEnglish ? "Address" : "Adresse"}</p>
              <p className="text-sm">{projectData.address}</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-600">{isEnglish ? "Submission Date" : "Date de soumission"}</p>
              <p className="text-sm">{projectData.submissionDate}</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-600">{isEnglish ? "Estimated Price" : "Prix estimé"}</p>
              <p className="text-sm">{projectData.price}</p>
            </div>
          </div>

          <h2 className="text-lg font-bold mb-2">
            {isEnglish ? "Selected Items" : "Éléments sélectionnés"}
          </h2>

          <div className="space-y-2">
            {selectedSteps
              .filter(step => step.isSelected)
              .map((step) => (
                <div key={step.id} className="border-l-2 border-primary pl-2">
                  <h3 className="text-sm font-semibold">
                    {isEnglish ? step.titleEn : step.titleFr}
                  </h3>
                  {step.subTasks && (
                    <ul className="ml-2">
                      {step.subTasks
                        .filter((subTask: any) => subTask.isSelected)
                        .map((subTask: any) => (
                          <li key={subTask.id}>
                            <p className="text-sm font-medium">
                              {isEnglish ? subTask.titleEn : subTask.titleFr}
                            </p>
                            {subTask.tasks && (
                              <ul className="ml-2">
                                {subTask.tasks
                                  .filter((task: any) => task.isSelected)
                                  .map((task: any) => (
                                    <li key={task.id} className="text-xs text-gray-600">
                                      {isEnglish ? task.titleEn : task.titleFr}
                                    </li>
                                  ))}
                              </ul>
                            )}
                          </li>
                        ))}
                    </ul>
                  )}
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
