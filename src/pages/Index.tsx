import { useState } from "react";
import { ArrowLeft, Send, CheckSquare, Square, ChevronDown, ChevronUp } from "lucide-react";

interface SubTask {
  id: string;
  titleFr: string;
  titleEn: string;
  isSelected: boolean;
  description?: {
    fr: string;
    en: string;
  };
  tasks?: {
    id: string;
    titleFr: string;
    titleEn: string;
    isSelected: boolean;
    descriptionFr: string;
    descriptionEn: string;
  }[];
}

interface Step {
  id: number;
  titleFr: string;
  titleEn: string;
  isSelected: boolean;
  isExpanded: boolean;
  subTasks?: SubTask[];
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
      subTasks: [
        {
          id: "1.1",
          titleFr: "Architecte",
          titleEn: "Architect",
          isSelected: false,
          tasks: [
            {
              id: "1.1.1",
              titleFr: "Visite de compréhension des demandes",
              titleEn: "Visit for understanding requirements",
              isSelected: false,
              descriptionFr: "L'architecte doit effectuer une visite sur site pour comprendre les besoins du client et évaluer les contraintes techniques et réglementaires.",
              descriptionEn: "The architect must conduct a site visit to understand the client's needs and evaluate technical and regulatory constraints."
            },
            {
              id: "1.1.2",
              titleFr: "Analyse des plans existants",
              titleEn: "Analysis of existing plans",
              isSelected: false,
              descriptionFr: "Vérifier les plans de l'immeuble pour identifier la structure du mur porteur et son rôle dans la stabilité du bâtiment.",
              descriptionEn: "Check building plans to identify the load-bearing wall structure and its role in building stability."
            },
            {
              id: "1.1.3",
              titleFr: "Consultation des règles d'urbanisme",
              titleEn: "Consultation of urban planning rules",
              isSelected: false,
              descriptionFr: "S'assurer que les travaux envisagés sont conformes au PLU (Plan Local d'Urbanisme) ou au POS (Plan d'Occupation des Sols).",
              descriptionEn: "Ensure that the planned work complies with local urban planning regulations."
            },
            {
              id: "1.1.4",
              titleFr: "Devis Architecte pour la réalisation",
              titleEn: "Architect's quote for implementation",
              isSelected: false,
              descriptionFr: "Devis Architecte pour la réalisation",
              descriptionEn: "Architect's quote for implementation"
            }
          ]
        },
        {
          id: "1.2",
          titleFr: "BET Structure (Bureau d'Études Techniques)",
          titleEn: "Technical Design Office",
          isSelected: false,
          tasks: [
            {
              id: "1.2.1",
              titleFr: "Rapport de faisabilité",
              titleEn: "Feasibility report",
              isSelected: false,
              descriptionFr: "Le BET doit fournir un rapport détaillé sur la faisabilité technique de l'ouverture, en tenant compte des charges supportées par le mur et des solutions de renforcement possibles.",
              descriptionEn: "The Technical Office must provide a detailed report on the technical feasibility of the opening."
            },
            {
              id: "1.2.2",
              titleFr: "Assurances",
              titleEn: "Insurance",
              isSelected: false,
              descriptionFr: "Vérifier que le BET dispose des assurances professionnelles nécessaires (responsabilité civile décennale, etc.).",
              descriptionEn: "Verify that the Technical Office has the necessary professional insurance."
            },
            {
              id: "1.2.3",
              titleFr: "Visite technique",
              titleEn: "Technical visit",
              isSelected: false,
              descriptionFr: "A la demande de l'Architecte Si nécessaire, une visite peut être requise pour des analyses techniques (sondages, carottages, etc.). Prix de la visite [250€/visite] (non compris dans ce devis)",
              descriptionEn: "If requested by the Architect, a visit may be required for technical analysis. Price: [250€/visit] (not included in this quote)"
            }
          ]
        },
        {
          id: "1.3",
          titleFr: "Société de construction",
          titleEn: "Construction company",
          isSelected: false,
          description: {
            fr: "Si des sondages ou carottages sont nécessaires, la société de construction peut être sollicitée pour ces interventions techniques.",
            en: "If surveys or core sampling are necessary, the construction company may be called upon for these technical interventions."
          }
        }
      ]
    },
    {
      id: 2,
      titleFr: "Demandes administratives",
      titleEn: "Administrative requests",
      isSelected: false,
      isExpanded: false,
      subTasks: [
        {
          id: "2.1",
          titleFr: "Architecte",
          titleEn: "Architect",
          isSelected: false,
          tasks: [
            {
              id: "2.1.1",
              titleFr: "Permis de construire ou déclaration préalable",
              titleEn: "Building permit or prior declaration",
              isSelected: false,
              descriptionFr: "L'architecte doit préparer et déposer le dossier de permis de construire ou de déclaration préalable auprès de la mairie. Ce dossier doit inclure les plans, les calculs structurels, et les justificatifs techniques.",
              descriptionEn: "The architect must prepare and submit the building permit application or prior declaration to the city hall."
            },
            {
              id: "2.1.2",
              titleFr: "Autorisation de la copropriété",
              titleEn: "Co-ownership authorization",
              isSelected: false,
              descriptionFr: "Si le mur est commun ou mitoyen, l'architecte doit obtenir l'accord de la copropriété en présentant les travaux lors d'une assemblée générale.",
              descriptionEn: "If the wall is shared, the architect must obtain co-ownership approval by presenting the work at a general assembly."
            }
          ]
        },
        {
          id: "2.2",
          titleFr: "BET Structure",
          titleEn: "Technical Design Office",
          isSelected: false,
          description: {
            fr: "Le BET n'intervient pas directement dans cette étape, sauf si des calculs structurels supplémentaires sont nécessaires pour le dossier administratif.",
            en: "The Technical Office is not directly involved in this step, unless additional structural calculations are needed for the administrative file."
          }
        },
        {
          id: "2.3",
          titleFr: "Société de construction",
          titleEn: "Construction company",
          isSelected: false,
          description: {
            fr: "Aucune intervention n'est requise à ce stade.",
            en: "No intervention is required at this stage."
          }
        }
      ]
    },
    {
      id: 3,
      titleFr: "Étude technique",
      titleEn: "Technical study",
      isSelected: false,
      isExpanded: false,
      subTasks: [
        {
          id: "3.1",
          titleFr: "Architecte",
          titleEn: "Architect",
          isSelected: false,
          tasks: [
            {
              id: "3.1.1",
              titleFr: "Analyse des plans existants",
              titleEn: "Analysis of existing plans",
              isSelected: false,
              descriptionFr: "Vérifier les plans de l'immeuble pour identifier la structure du mur porteur et son rôle dans la stabilité du bâtiment.",
              descriptionEn: "Check building plans to identify the load-bearing wall structure and its role in building stability."
            },
            {
              id: "3.1.2",
              titleFr: "Consultation des règles d'urbanisme",
              titleEn: "Consultation of urban planning rules",
              isSelected: false,
              descriptionFr: "S'assurer que les travaux envisagés sont conformes au PLU (Plan Local d'Urbanisme) ou au POS (Plan d'Occupation des Sols).",
              descriptionEn: "Ensure that the planned work complies with local urban planning regulations."
            }
          ]
        },
        {
          id: "3.2",
          titleFr: "BET Structure",
          titleEn: "Technical Design Office",
          isSelected: false,
          tasks: [
            {
              id: "3.2.1",
              titleFr: "Rapport de faisabilité",
              titleEn: "Feasibility report",
              isSelected: false,
              descriptionFr: "Le BET doit fournir un rapport détaillé sur la faisabilité technique de l'ouverture, en tenant compte des charges supportées par le mur et des solutions de renforcement possibles.",
              descriptionEn: "The Technical Office must provide a detailed report on the technical feasibility of the opening."
            },
            {
              id: "3.2.2",
              titleFr: "Assurances",
              titleEn: "Insurance",
              isSelected: false,
              descriptionFr: "Vérifier que le BET dispose des assurances professionnelles nécessaires (responsabilité civile décennale, etc.).",
              descriptionEn: "Verify that the Technical Office has the necessary professional insurance."
            }
          ]
        },
        {
          id: "3.3",
          titleFr: "Société de construction",
          titleEn: "Construction company",
          isSelected: false,
          description: {
            fr: "Aucune intervention n'est requise à ce stade.",
            en: "No intervention is required at this stage."
          }
        }
      ]
    },
    {
      id: 4,
      titleFr: "Démarches en copropriété",
      titleEn: "Co-ownership procedures",
      isSelected: false,
      isExpanded: false,
      subTasks: [
        {
          id: "4.1",
          titleFr: "Architecte",
          titleEn: "Architect",
          isSelected: false,
          tasks: [
            {
              id: "4.1.1",
              titleFr: "Permis de construire ou déclaration préalable",
              titleEn: "Building permit or prior declaration",
              isSelected: false,
              descriptionFr: "L'architecte doit préparer et déposer le dossier de permis de construire ou de déclaration préalable auprès de la mairie. Ce dossier doit inclure les plans, les calculs structurels, et les justificatifs techniques.",
              descriptionEn: "The architect must prepare and submit the building permit application or prior declaration to the city hall."
            },
            {
              id: "4.1.2",
              titleFr: "Autorisation de la copropriété",
              titleEn: "Co-ownership authorization",
              isSelected: false,
              descriptionFr: "Si le mur est commun ou mitoyen, l'architecte doit obtenir l'accord de la copropriété en présentant les travaux lors d'une assemblée générale.",
              descriptionEn: "If the wall is shared, the architect must obtain co-ownership approval by presenting the work at a general assembly."
            }
          ]
        },
        {
          id: "4.2",
          titleFr: "BET Structure",
          titleEn: "Technical Design Office",
          isSelected: false,
          tasks: [
            {
              id: "4.2.1",
              titleFr: "Rapport de faisabilité",
              titleEn: "Feasibility report",
              isSelected: false,
              descriptionFr: "Le BET doit fournir un rapport détaillé sur la faisabilité technique de l'ouverture, en tenant compte des charges supportées par le mur et des solutions de renforcement possibles.",
              descriptionEn: "The Technical Office must provide a detailed report on the technical feasibility of the opening."
            },
            {
              id: "4.2.2",
              titleFr: "Assurances",
              titleEn: "Insurance",
              isSelected: false,
              descriptionFr: "Vérifier que le BET dispose des assurances professionnelles nécessaires (responsabilité civile décennale, etc.).",
              descriptionEn: "Verify that the Technical Office has the necessary professional insurance."
            }
          ]
        },
        {
          id: "4.3",
          titleFr: "Société de construction",
          titleEn: "Construction company",
          isSelected: false,
          description: {
            fr: "Aucune intervention n'est requise à ce stade.",
            en: "No intervention is required at this stage."
          }
        }
      ]
    },
    {
      id: 5,
      titleFr: "Coordination avec les professionnels",
      titleEn: "Coordination with professionals",
      isSelected: false,
      isExpanded: false,
      subTasks: [
        {
          id: "5.1",
          titleFr: "Architecte",
          titleEn: "Architect",
          isSelected: false,
          tasks: [
            {
              id: "5.1.1",
              titleFr: "Permis de construire ou déclaration préalable",
              titleEn: "Building permit or prior declaration",
              isSelected: false,
              descriptionFr: "L'architecte doit préparer et déposer le dossier de permis de construire ou de déclaration préalable auprès de la mairie. Ce dossier doit inclure les plans, les calculs structurels, et les justificatifs techniques.",
              descriptionEn: "The architect must prepare and submit the building permit application or prior declaration to the city hall."
            },
            {
              id: "5.1.2",
              titleFr: "Autorisation de la copropriété",
              titleEn: "Co-ownership authorization",
              isSelected: false,
              descriptionFr: "Si le mur est commun ou mitoyen, l'architecte doit obtenir l'accord de la copropriété en présentant les travaux lors d'une assemblée générale.",
              descriptionEn: "If the wall is shared, the architect must obtain co-ownership approval by presenting the work at a general assembly."
            }
          ]
        },
        {
          id: "5.2",
          titleFr: "BET Structure",
          titleEn: "Technical Design Office",
          isSelected: false,
          tasks: [
            {
              id: "5.2.1",
              titleFr: "Rapport de faisabilité",
              titleEn: "Feasibility report",
              isSelected: false,
              descriptionFr: "Le BET doit fournir un rapport détaillé sur la faisabilité technique de l'ouverture, en tenant compte des charges supportées par le mur et des solutions de renforcement possibles.",
              descriptionEn: "The Technical Office must provide a detailed report on the technical feasibility of the opening."
            },
            {
              id: "5.2.2",
              titleFr: "Assurances",
              titleEn: "Insurance",
              isSelected: false,
              descriptionFr: "Vérifier que le BET dispose des assurances professionnelles nécessaires (responsabilité civile décennale, etc.).",
              descriptionEn: "Verify that the Technical Office has the necessary professional insurance."
            }
          ]
        },
        {
          id: "5.3",
          titleFr: "Société de construction",
          titleEn: "Construction company",
          isSelected: false,
          description: {
            fr: "Aucune intervention n'est requise à ce stade.",
            en: "No intervention is required at this stage."
          }
        }
      ]
    },
    {
      id: 6,
      titleFr: "Respect des normes et réglementations",
      titleEn: "Compliance with standards and regulations",
      isSelected: false,
      isExpanded: false,
      subTasks: [
        {
          id: "6.1",
          titleFr: "Architecte",
          titleEn: "Architect",
          isSelected: false,
          tasks: [
            {
              id: "6.1.1",
              titleFr: "Permis de construire ou déclaration préalable",
              titleEn: "Building permit or prior declaration",
              isSelected: false,
              descriptionFr: "L'architecte doit préparer et déposer le dossier de permis de construire ou de déclaration préalable auprès de la mairie. Ce dossier doit inclure les plans, les calculs structurels, et les justificatifs techniques.",
              descriptionEn: "The architect must prepare and submit the building permit application or prior declaration to the city hall."
            },
            {
              id: "6.1.2",
              titleFr: "Autorisation de la copropriété",
              titleEn: "Co-ownership authorization",
              isSelected: false,
              descriptionFr: "Si le mur est commun ou mitoyen, l'architecte doit obtenir l'accord de la copropriété en présentant les travaux lors d'une assemblée générale.",
              descriptionEn: "If the wall is shared, the architect must obtain co-ownership approval by presenting the work at a general assembly."
            }
          ]
        },
        {
          id: "6.2",
          titleFr: "BET Structure",
          titleEn: "Technical Design Office",
          isSelected: false,
          tasks: [
            {
              id: "6.2.1",
              titleFr: "Rapport de faisabilité",
              titleEn: "Feasibility report",
              isSelected: false,
              descriptionFr: "Le BET doit fournir un rapport détaillé sur la faisabilité technique de l'ouverture, en tenant compte des charges supportées par le mur et des solutions de renforcement possibles.",
              descriptionEn: "The Technical Office must provide a detailed report on the technical feasibility of the opening."
            },
            {
              id: "6.2.2",
              titleFr: "Assurances",
              titleEn: "Insurance",
              isSelected: false,
              descriptionFr: "Vérifier que le BET dispose des assurances professionnelles nécessaires (responsabilité civile décennale, etc.).",
              descriptionEn: "Verify that the Technical Office has the necessary professional insurance."
            }
          ]
        },
        {
          id: "6.3",
          titleFr: "Société de construction",
          titleEn: "Construction company",
          isSelected: false,
          description: {
            fr: "Aucune intervention n'est requise à ce stade.",
            en: "No intervention is required at this stage."
          }
        }
      ]
    },
    {
      id: 7,
      titleFr: "Suivi des travaux",
      titleEn: "Work monitoring",
      isSelected: false,
      isExpanded: false,
      subTasks: [
        {
          id: "7.1",
          titleFr: "Architecte",
          titleEn: "Architect",
          isSelected: false,
          tasks: [
            {
              id: "7.1.1",
              titleFr: "Permis de construire ou déclaration préalable",
              titleEn: "Building permit or prior declaration",
              isSelected: false,
              descriptionFr: "L'architecte doit préparer et déposer le dossier de permis de construire ou de déclaration préalable auprès de la mairie. Ce dossier doit inclure les plans, les calculs structurels, et les justificatifs techniques.",
              descriptionEn: "The architect must prepare and submit the building permit application or prior declaration to the city hall."
            },
            {
              id: "7.1.2",
              titleFr: "Autorisation de la copropriété",
              titleEn: "Co-ownership authorization",
              isSelected: false,
              descriptionFr: "Si le mur est commun ou mitoyen, l'architecte doit obtenir l'accord de la copropriété en présentant les travaux lors d'une assemblée générale.",
              descriptionEn: "If the wall is shared, the architect must obtain co-ownership approval by presenting the work at a general assembly."
            }
          ]
        },
        {
          id: "7.2",
          titleFr: "BET Structure",
          titleEn: "Technical Design Office",
          isSelected: false,
          tasks: [
            {
              id: "7.2.1",
              titleFr: "Rapport de faisabilité",
              titleEn: "Feasibility report",
              isSelected: false,
              descriptionFr: "Le BET doit fournir un rapport détaillé sur la faisabilité technique de l'ouverture, en tenant compte des charges supportées par le mur et des solutions de renforcement possibles.",
              descriptionEn: "The Technical Office must provide a detailed report on the technical feasibility of the opening."
            },
            {
              id: "7.2.2",
              titleFr: "Assurances",
              titleEn: "Insurance",
              isSelected: false,
              descriptionFr: "Vérifier que le BET dispose des assurances professionnelles nécessaires (responsabilité civile décennale, etc.).",
              descriptionEn: "Verify that the Technical Office has the necessary professional insurance."
            }
          ]
        },
        {
          id: "7.3",
          titleFr: "Société de construction",
          titleEn: "Construction company",
          isSelected: false,
          description: {
            fr: "Aucune intervention n'est requise à ce stade.",
            en: "No intervention is required at this stage."
          }
        }
      ]
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

  const toggleSelection = (stepId: number, subTaskId?: string, taskId?: string) => {
    setSteps(steps.map((step) => {
      if (step.id !== stepId) return step;

      let newStep = { ...step };
      
      if (!subTaskId) {
        // Toggle main step
        newStep.isSelected = !step.isSelected;
        // If selecting main step, select all subtasks
        if (newStep.isSelected && newStep.subTasks) {
          newStep.subTasks = newStep.subTasks.map(subTask => ({
            ...subTask,
            isSelected: true,
            tasks: subTask.tasks?.map(task => ({ ...task, isSelected: true }))
          }));
        }
        // If deselecting main step, deselect all subtasks
        if (!newStep.isSelected && newStep.subTasks) {
          newStep.subTasks = newStep.subTasks.map(subTask => ({
            ...subTask,
            isSelected: false,
            tasks: subTask.tasks?.map(task => ({ ...task, isSelected: false }))
          }));
        }
      } else if (subTaskId && !taskId && step.subTasks) {
        // Toggle subtask
        newStep.subTasks = step.subTasks.map(subTask => {
          if (subTask.id !== subTaskId) return subTask;
          
          const newSubTask = { ...subTask, isSelected: !subTask.isSelected };
          
          // If selecting subtask, select all tasks
          if (newSubTask.isSelected && newSubTask.tasks) {
            newSubTask.tasks = newSubTask.tasks.map(task => ({
              ...task,
              isSelected: true
            }));
          }
          // If deselecting subtask, deselect all tasks
          if (!newSubTask.isSelected && newSubTask.tasks) {
            newSubTask.tasks = newSubTask.tasks.map(task => ({
              ...task,
              isSelected: false
            }));
          }
          
          return newSubTask;
        });

        // Update main step selection based on subtasks
        newStep.isSelected = newStep.subTasks.some(st => st.isSelected);
      } else if (subTaskId && taskId && step.subTasks) {
        // Toggle individual task
        newStep.subTasks = step.subTasks.map(subTask => {
          if (subTask.id !== subTaskId) return subTask;
          
          const newTasks = subTask.tasks?.map(task => 
            task.id === taskId ? { ...task, isSelected: !task.isSelected } : task
          );
          
          return {
            ...subTask,
            tasks: newTasks,
            isSelected: newTasks?.some(t => t.isSelected) || false
          };
        });

        // Update main step selection based on subtasks
        newStep.isSelected = newStep.subTasks.some(st => st.isSelected);
      }

      return newStep;
    }));
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
                  {step.subTasks ? (
                    <div className="space-y-6">
                      {step.subTasks.map((subTask) => (
                        <div key={subTask.id} className="pl-8">
                          <div className="flex items-center space-x-4 mb-4">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                toggleSelection(step.id, subTask.id);
                              }}
                              className="text-primary hover:text-primary/80 transition-colors"
                            >
                              {subTask.isSelected ? (
                                <CheckSquare className="h-5 w-5" />
                              ) : (
                                <Square className="h-5 w-5" />
                              )}
                            </button>
                            <h4 className="text-md font-semibold text-gray-800">
                              {isEnglish ? subTask.titleEn : subTask.titleFr}
                            </h4>
                          </div>
                          
                          {subTask.description && (
                            <p className="text-gray-700 ml-9 mb-4">
                              {isEnglish ? subTask.description.en : subTask.description.fr}
                            </p>
                          )}

                          {subTask.tasks && (
                            <div className="space-y-4 ml-9">
                              {subTask.tasks.map((task) => (
                                <div key={task.id}>
                                  <div className="flex items-center space-x-4 mb-2">
                                    <button
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        toggleSelection(step.id, subTask.id, task.id);
                                      }}
                                      className="text-primary hover:text-primary/80 transition-colors"
                                    >
                                      {task.isSelected ? (
                                        <CheckSquare className="h-4 w-4" />
                                      ) : (
                                        <Square className="h-4 w-4" />
                                      )}
                                    </button>
                                    <h5 className="text-sm font-medium text-gray-800">
                                      {isEnglish ? task.titleEn : task.titleFr}
                                    </h5>
                                  </div>
                                  <p className="text-sm text-gray-600 ml-8">
                                    {isEnglish ? task.descriptionEn : task.descriptionFr}
                                  </p>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-700">
                      {isEnglish
                        ? "Detailed information about this step will be added."
                        : "Les informations détaillées pour cette étape seront ajoutées."}
                    </p>
                  )}
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
