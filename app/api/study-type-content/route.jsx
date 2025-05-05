
import { db } from "@/configs/db";
import { StudyTypeContent } from "@/configs/schema";
import { NextResponse } from "next/server";
import { GenerateStudyTypeContentAiModel } from "@/configs/AiModel";

export async function POST(req) {
  const { chapters, courseId, type } = await req.json();
  let PROMPT = "";
        if (type === "Flashcard") {
          PROMPT = `Generate flashcards on the topic: "${chapters}". 
          Provide a maximum of 10 flashcards in JSON format, each with "front" and "back" fields.`;
        } else if (type === "Quiz") {
          PROMPT = `Generate a quiz on the topic: "${chapters}". 
          Provide questions in JSON format with each having "question", "options" (array of 4), and "answer".`;
        } else if (type === "Question/Answer") {
          PROMPT = `Generate Q&A pairs on the topic: "${chapters}". 
          Provide JSON format with each chapter having one "question" and "answer" fields.`;
        }
    

  try {
    // 1. Generate AI content
    const result = await GenerateStudyTypeContentAiModel.sendMessage(PROMPT);
    let content;
    try {
          const contentText = await result.response.text();
          content = JSON.parse(contentText);
        } catch (err) {
          console.error("Invalid JSON from AI:", err);
          return NextResponse.json({ error: "AI returned invalid JSON" }, { status: 500 });
        }

    
    console.log("Generated content:", content);

    // 2. Insert content directly to DB
    const insertResult = await db.insert(StudyTypeContent).values({
      courseId: courseId,
      content: content,
      type: type,
      status: 'Ready'  // optional: you can update the status
    }).returning({ id: StudyTypeContent.id });

    return NextResponse.json(insertResult[0].id);
    
  } catch (error) {
    console.error("Error saving study content:", error);
    return NextResponse.json({ error: "Failed to generate or save content." }, { status: 500 });
  }
}

export const runtime = 'nodejs';
