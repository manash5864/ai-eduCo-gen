/** @type { import ("drizzle-kit").Config } */
export default {
  schema: "./configs/schema.jsx",
  dialect: "postgresql",
  dbCredentials: {
    url: 'postgresql://AI_course_owner:npg_CYWiULJD45rF@ep-spring-tree-a5qhfasm-pooler.us-east-2.aws.neon.tech/AI_course?sslmode=require',
  }
};
