"use server";

import { getSession } from "./actions";

const GET_EXAM_URL = process.env.GET_EXAM_URL



export async function getExamList() {
    const session = await getSession();

    try {
      const response = await fetch(GET_EXAM_URL, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${session.accessToken}`,
        },
      });
  
      const examList = await response.json();
      console.log("examlist", examList)
      return examList.data;

    } catch (error) {
      console.error(error);
    }
  }

export async function getQuestionList(examId: string   ) {
    const session = await getSession();

    // const testtoken="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImRmNTU5MTljLTUwN2MtNGVmNy1hNTAyLWYyZWRlMDliNDdhYyIsInRva2VuSWQiOiI5MzEzZDc2My0wYjJhLTRlNGEtYjljMi01YmY3OTI0M2VjM2EiLCJpYXQiOjE3MDk2OTIwNjAsImV4cCI6MTcwOTc3ODQ2MH0.ZznJZ92rSNH0O42dA8ea0GEwvTe3kjc2VoYG96bgYo0"
    
    console.log("${GET_EXAM_URL}${examId}", `${GET_EXAM_URL}${examId}`)

    try {
      const response = await fetch(`${GET_EXAM_URL}${examId}` , {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${session.accessToken}`,
        },

        
      });

      if(response.status === 401){
        console.log("401 Unauthorized")
      } else{

      const questionList = await response.json();
      const questions = questionList.questions;
      console.log("questionList", questionList)
      console.log("question", questions)
      return questions;
    }

    } catch (error) {
      console.error(error);
    }
}

// array of submited answer that has array of questionId and answerId  
interface Answer {
  questionId: string;
  answerId: string;
}

interface SubmitAnswersProps {
    answer: Answer[]
}

// submit all the answers to POST /api/exam/:id/submit
export async function submitAnswers(examId: string, answers: SubmitAnswersProps) {
  const session = await getSession();

  try {
    const response = await fetch(`${GET_EXAM_URL}${examId}/submit`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${session.accessToken}`,
      },
      body: JSON.stringify(answers),
    });

    const result = await response.json();
    console.log("result", result)
    return result;

  } catch (error) {
    console.error(error);
  }
}