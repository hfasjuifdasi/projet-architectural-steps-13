
import { useState } from "react";
import { ArrowLeft, Printer, Download } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface RecapWizardProps {
  selectedSteps: any[];
  isEnglish: boolean;
  onClose: () => void;
}

const RecapWizard = ({ selectedSteps, isEnglish, onClose }: RecapWizardProps) => {
  const navigate = useNavigate();
  
  // Mock data
  const projectData = {
    clientName: "Jean Dupont",
    address: "123 Rue de Paris, 75001 Paris",
    submissionDate: new Date().toLocaleDateString(),
    price: "15,000€",
  };

  const handleConfirm = () => {
    // Navigate to projects page with data
    navigate("/projects", { 
      state: { 
        projectData,
        selectedSteps,
        isEnglish 
      } 
    });
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <h2 className="text-2xl font-bold mb-6">
          {isEnglish ? "Project Summary" : "Récapitulatif du projet"}
        </h2>

        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
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

          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-4">
              {isEnglish ? "Selected Items" : "Éléments sélectionnés"}
            </h3>
            <div className="space-y-4">
              {selectedSteps.map((step) => (
                <div key={step.id} className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold">
                    {isEnglish ? step.titleEn : step.titleFr}
                  </h4>
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

        <div className="mt-8 flex justify-between">
          <button
            onClick={onClose}
            className="flex items-center space-x-2 px-6 py-3 text-secondary-DEFAULT hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>{isEnglish ? "Edit" : "Éditer"}</span>
          </button>
          <button
            onClick={handleConfirm}
            className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
          >
            {isEnglish ? "Confirm" : "Confirmer"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecapWizard;
