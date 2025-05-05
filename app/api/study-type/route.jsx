

import { StudyTypeContent } from "@/configs/schema";
 import { db } from "@/configs/db";
 // your table schema
import { eq } from "drizzle-orm";

export async function POST(req) {
  try {
    const { courseId, studyType } = await req.json();

    if (studyType === 'ALL') {
      const allContent = await db
        .select()
        .from(StudyTypeContent)
        .where(eq(StudyTypeContent.courseId, courseId));

      return Response.json(allContent);
    }
    return Response.json([]);
  } catch (error) {
    console.log("Error fetching study materials", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
