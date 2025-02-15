
import { useState } from "react";
import { ArrowLeft, Send, CheckSquare, Square, ChevronDown, ChevronUp } from "lucide-react";

interface Step {
  id: number;
  titleFr: string;
  titleEn: string;
  isSelected: boolean;
  isExpanded: boolean;
}

const Index = () => {
  const [isEnglish, setIsEnglish] = useState(false);
  const [steps, setSteps] = useState<Step[]>([
    {
      id: 1,
      titleFr: "Vérification du statut du mur porteur",
      titleEn: "Load-bearing wall status verification",
      isSelected: false,
      isExpanded: false,
    },
    {
      id: 2,
      titleFr: "Demandes administratives",
      titleEn: "Administrative requests",
      isSelected: false,
      isExpanded: false,
    },
    {
      id: 3,
      titleFr: "Étude technique",
      titleEn: "Technical study",
      isSelected: false,
      isExpanded: false,
    },
    {
      id: 4,
      titleFr: "Démarches en copropriété",
      titleEn: "Co-ownership procedures",
      isSelected: false,
      isExpanded: false,
    },
    {
      id: 5,
      titleFr: "Coordination avec les professionnels",
      titleEn: "Coordination with professionals",
      isSelected: false,
      isExpanded: false,
    },
    {
      id: 6,
      titleFr: "Respect des normes et réglementations",
      titleEn: "Compliance with standards and regulations",
      isSelected: false,
      isExpanded: false,
    },
    {
      id: 7,
      titleFr: "Suivi des travaux",
      titleEn: "Work monitoring",
      isSelected: false,
      isExpanded: false,
    },
  ]);

  const toggleLanguage = () => setIsEnglish(!isEnglish);

  const toggleStep = (id: number) => {
    setSteps(
      steps.map((step) =>
        step.id === id ? { ...step, isExpanded: !step.isExpanded } : step
      )
    );
  };

  const toggleSelection = (id: number) => {
    setSteps(
      steps.map((step) =>
        step.id === id ? { ...step, isSelected: !step.isSelected } : step
      )
    );
  };

  return (
    <div className="min-h-screen bg-white p-6 md:p-12 animate-fade-in">
      <div className="max-w-4xl mx-auto">
        {/* Language Toggle */}
        <button
          onClick={toggleLanguage}
          className="mb-8 px-4 py-2 text-sm font-medium text-secondary-DEFAULT hover:text-primary transition-colors"
        >
          {isEnglish ? "FR" : "EN"}
        </button>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          {isEnglish
            ? "Steps to progress on the load-bearing wall opening project"
            : "Étapes pour avancer sur le projet d'une OMP"}
        </h1>

        {/* Introduction */}
        <p className="text-lg text-gray-700 mb-12">
          {isEnglish
            ? "To create an opening in a load-bearing wall while respecting best practices, it is essential to follow a rigorous and detailed approach. Here are the project steps:"
            : "Pour réaliser une ouverture dans un mur porteur tout en respectant les règles de l'art, il est essentiel de suivre une démarche rigoureuse et détaillée. Voici les étape du projet :"}
        </p>

        {/* Steps */}
        <div className="space-y-4 mb-12">
          {steps.map((step) => (
            <div
              key={step.id}
              className="border border-gray-200 rounded-lg overflow-hidden hover:border-primary transition-colors"
            >
              <div
                className="flex items-center justify-between p-6 cursor-pointer bg-white hover:bg-gray-50 transition-colors"
                onClick={() => toggleStep(step.id)}
              >
                <div className="flex items-center space-x-4">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleSelection(step.id);
                    }}
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    {step.isSelected ? (
                      <CheckSquare className="h-6 w-6" />
                    ) : (
                      <Square className="h-6 w-6" />
                    )}
                  </button>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {isEnglish ? step.titleEn : step.titleFr}
                  </h3>
                </div>
                {step.isExpanded ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </div>
              {step.isExpanded && (
                <div className="p-6 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-700">
                    {isEnglish
                      ? "Detailed information about this step will be added."
                      : "Les informations détaillées pour cette étape seront ajoutées."}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Conclusion */}
        <div className="bg-accent rounded-lg p-6 mb-12">
          <p className="text-gray-700">
            {isEnglish
              ? "To create an opening in a load-bearing wall while respecting best practices, it is essential to follow a rigorous approach and coordinate the interventions of the architect, structural engineering firm, and construction company. Each step, from verifying the wall status to work completion, must be carefully planned and executed to ensure safety, compliance, and work quality."
              : "Pour réaliser une ouverture dans un mur porteur en respectant les règles de l'art, il est essentiel de suivre une démarche rigoureuse et de coordonner les interventions de l'architecte, du BET Structure, et de la société de construction. Chaque étape, de la vérification du statut du mur à la réception des travaux, doit être soigneusement planifiée et exécutée pour garantir la sécurité, la conformité, et la qualité des travaux."}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between items-center">
          <button className="flex items-center space-x-2 px-6 py-3 text-secondary-DEFAULT hover:text-primary transition-colors">
            <ArrowLeft className="h-5 w-5" />
            <span>{isEnglish ? "Back" : "Retour"}</span>
          </button>
          <button className="flex items-center space-x-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
            <span>{isEnglish ? "Submit request" : "Soumettre la demande"}</span>
            <Send className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
