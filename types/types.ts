import React, { Dispatch, SetStateAction } from "react";

export interface ExamControllerProps {
  bookmark: Array<number | null>;
  currentQuestion: number;
  setCurrentQuestion: React.Dispatch<React.SetStateAction<number>>;
  selectedAnswers: Array<string | null>;
  handleAnswer: (answer: string) => void;
  handleBookmark: (question: number) => void;
  exam: {
    question: string;
    choices: {
      id: string;
      text: string;
    }[];
    answer: string;
  }[];
}

export interface PartLayoutProps {
  part: number;
  partTitle: string;
  questionId: number;
  question: string | string[];
  choices: {
    id: string;
    text: string;
  }[];
  directions?: string;
  bookmark: Array<number | null>;
  currentQuestion: number;
  selectedOption: string | null;
  selectedAnswers?: Array<string | null>;
  isSelectedAnswer?: (choice: string) => boolean;

  hasAudio?: boolean;

  selectedMasks?: Array<string | null>;
  isSelectedMask?: (mask: string) => boolean;

  imageUrl?: string;
  imageAlt?: string;
  isExamInProgress?: boolean;
  handleBookmark: (question: number) => void;
  handleAnswer: (answer: string) => void;
  handleMask?: (mask: string) => void;
  handleOptionClick?: (optionId: string) => void;
}


export type ActiveRegisterComponentState = 
  "RegisterMobileForm" | 
  "OtpForm" | 
  "FinishSignupForm" | 
  "SignupComplete";

export interface ActiveFormProps {
  setActiveComponent?: Dispatch<SetStateAction<ActiveRegisterComponentState>>;
}
