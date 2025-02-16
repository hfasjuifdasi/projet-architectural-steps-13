
import { useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft, Printer, Download } from "lucide-react";
import { useRef } from "react";

const Projects = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { projectData, selectedSteps, isEnglish } = location.state || {};
  const contentRef = useRef<HTMLDivElement>(null);

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPDF = () => {
    // In a real application, you would implement PDF generation here
    // For now, we'll just show an alert
    alert(isEnglish ? "PDF download will be implemented" : "Le téléchargement PDF sera implémenté");
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

        <div ref={contentRef} className="bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-8">
            {isEnglish ? "Project Details" : "Détails du projet"}
          </h1>

          <div className="grid grid-cols-2 gap-6 mb-8">
            <div>
              <p className="font-semibold">{isEnglish ? "Client Name" : "Nom du client"}</p>
              <p>{projectData.clientName}</p>
            </div>
            <div>
              <p className="font-semibold">{isEnglish ? "Address" : "Adresse"}</p>
              <p>{projectData.address}</p>
            </div>
            <div>
              <p className="font-semibold">{isEnglish ? "Submission Date" : "Date de soumission"}</p>
              <p>{projectData.submissionDate}</p>
            </div>
            <div>
              <p className="font-semibold">{isEnglish ? "Estimated Price" : "Prix estimé"}</p>
              <p>{projectData.price}</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-6">
            {isEnglish ? "Selected Items" : "Éléments sélectionnés"}
          </h2>

          <div className="space-y-6">
            {selectedSteps
              .filter(step => step.isSelected)
              .map((step) => (
                <div key={step.id} className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold">
                    {isEnglish ? step.titleEn : step.titleFr}
                  </h3>
                  {step.subTasks && (
                    <ul className="ml-4 mt-2 space-y-2">
                      {step.subTasks
                        .filter((subTask: any) => subTask.isSelected)
                        .map((subTask: any) => (
                          <li key={subTask.id}>
                            <p className="font-medium">
                              {isEnglish ? subTask.titleEn : subTask.titleFr}
                            </p>
                            {subTask.tasks && (
                              <ul className="ml-4 mt-1">
                                {subTask.tasks
                                  .filter((task: any) => task.isSelected)
                                  .map((task: any) => (
                                    <li key={task.id} className="text-sm text-gray-600">
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
