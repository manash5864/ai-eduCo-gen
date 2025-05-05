// import { db } from "@/configs/db";
// import { StudyTypeContent } from "@/configs/schema";
// import { inngest } from "@/inngest/client";
// import { NextResponse } from "next/server";

// export async function POST(req) {
//     const {chapters, courseId, type} = await req.json();

//     //const PROMPT = 'Generate a flashcard on the topic : '+chapters+' in JSON format with front back content, Maximum 15';

//   const PROMPT = `Generate a ${type} on the topic: "${chapters}" in JSON format with front back content, Maximum 15`; 
     
// const result = await GenerateStudyTypeContentAiModel.sendMessage(PROMPT);
//      const content = JSON.parse(result.response.text());
//      console.log('content', content)
//     //insert record to db, updating status to generating.....
//     const insertresult = await db.insert(StudyTypeContent).values({
//         courseId:courseId,
//         content:content,
//         type:type
        
//     }).returning({id:StudyTypeContent.id}); 

//     //triger the inngest function
//     inngest.send({
//         name: 'studyType.content',
//         data: {
//             studyType:type,
//             prompt:PROMPT,
//             courseId:courseId,
//             recordId:result[0].id
//         }
//     })
//     return NextResponse.json(insertresult[0].id)
// }



// app/api/studytype/route.js
// import { db } from "@/configs/db";
// import { StudyTypeContent } from "@/configs/schema";
// import { NextResponse } from "next/server";
// import { GenerateStudyTypeContentAiModel } from "@/configs/AiModel";

// export async function POST(req) {
//   try {
//     const { chapters, courseId, type } = await req.json();

//     const PROMPT = `Generate a ${type} on the topic: "${chapters}" in JSON format. 
//     For Flashcards: Include a maximum of 15 cards with "front" and "back" fields.
//     For Quizzes: Include "question", "options" (array), and "answer".
//     For Q&A: Include "question" and "answer" fields.`;

//     const result = await GenerateStudyTypeContentAiModel.sendMessage(PROMPT);
//     const content = JSON.parse(result.response.text());

//     // Insert into DB with full content
//     const insertResult = await db.insert(StudyTypeContent).values({
//       courseId,
//       type,
//       content,         // ✅ Properly saving JSON
//       status: 'Completed',
//     }).returning({ id: StudyTypeContent.id });

//     return NextResponse.json({ id: insertResult[0].id, status: "Success" });
//   } catch (error) {
//     console.error("Error saving study type content:", error);
//     return NextResponse.json({ error: "Failed to save content" }, { status: 500 });
//   }
// }





import { db } from "@/configs/db";
import { StudyTypeContent } from "@/configs/schema";
import { NextResponse } from "next/server";
import { GenerateStudyTypeContentAiModel } from "@/configs/AiModel";

export async function POST(req) {
  const { chapters, courseId, type } = await req.json();

  // const PROMPT = `Generate a ${type} on the topic: "${chapters}" in JSON format. 
  //   if Flashcards: Include a maximum of 15 cards with "front" and "back" fields.
  //   if Quiz: Include "question", "options" (array), and "answer".
  //   if Q&A: Include "question" and "answer" fields.`;
  // console.log("bsah",type)
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
    const contentText = await result.response.text();
    const content = JSON.parse(contentText); // Ensure valid JSON
    
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

