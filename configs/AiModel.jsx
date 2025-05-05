const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
  ChatSession,
} = require("@google/generative-ai");

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};


const generationConfig2 = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};



    export  const GenerateCourseLayout_AI = model.startChat({
    generationConfig,
    history: [
      {
        role: "user",
        parts: [
          {text: "Generate A course Tutorial on the Following detail with field as a course name, Description, along with the chapter name, about, duration : Chategory : 'Programming',  Topic: Python, Level : Intermediate, Duration : 2 hours, No of chapters: 5 , in JSON format "},
        ],
      },
      {
        role: "model",
        parts: [
          {text: "```json\n{\n  \"course_name\": \"Intermediate Python Mastery\",\n  \"description\": \"Elevate your Python skills beyond the basics! This course delves into advanced Python concepts, equipping you with the tools and knowledge to build more sophisticated and efficient applications.\",\n  \"category\": \"Programming\",\n  \"topic\": \"Python\",\n  \"level\": \"Intermediate\",\n  \"duration\": \"2 hours\",\n  \"number_of_chapters\": 5,\n  \"chapters\": [\n    {\n      \"chapter_name\": \"Chapter 1: Functional Programming in Python\",\n      \"about\": \"Explore the core concepts of functional programming including pure functions, immutability, and higher-order functions. Learn to use `map`, `filter`, and `reduce` effectively, and understand the benefits of functional programming in Python.\",\n      \"duration\": \"30 minutes\"\n    },\n    {\n      \"chapter_name\": \"Chapter 2: Working with Iterators and Generators\",\n      \"about\": \"Dive deep into iterators and generators. Learn how to create your own iterators and generators for efficient data processing and memory management. Understand the `yield` keyword and its powerful applications.\",\n      \"duration\": \"25 minutes\"\n    },\n    {\n      \"chapter_name\": \"Chapter 3: Decorators and Metaclasses\",\n      \"about\": \"Unlock the power of decorators to modify the behavior of functions and classes without changing their core logic. Explore metaclasses to dynamically control class creation and customization.\",\n      \"duration\": \"25 minutes\"\n    },\n    {\n      \"chapter_name\": \"Chapter 4: Concurrency with Threads and Processes\",\n      \"about\": \"Learn about the differences between threads and processes in Python.  Explore how to use the `threading` and `multiprocessing` modules to achieve concurrency and parallelism in your applications.  Address common challenges like race conditions and deadlocks.\",\n      \"duration\": \"25 minutes\"\n    },\n    {\n      \"chapter_name\": \"Chapter 5: Advanced Data Structures and Algorithms\",\n      \"about\": \"Review and extend your knowledge of core data structures (lists, dictionaries, sets). Explore more advanced data structures like heaps, trees, and graphs. Implement and analyze the efficiency of common searching and sorting algorithms.\",\n      \"duration\": \"35 minutes\"\n    }\n  ]\n}\n```\n"},
        ],
      },
    ],
  });



  export const GenerateChapterContent_AI = model.startChat({
    generationConfig,
    history: [
      {
        role: "user",
        parts: [
          {text: "Explain the concept in details on the Topic : JAVA, Chapters : Chapter 1: Design Patterns (Part 1) , in JSON Format with list of array with field as title, explanation on given chapter in details, Code Example (Code field in <precode> format) if applicable"},
        ],
      },
      {
        role: "model",
        parts: [
          {text: "```json\n{\n  \"topic\": \"JAVA Design Patterns (Part 1)\",\n  \"chapters\": [\n    {\n      \"title\": \"Introduction to Design Patterns\",\n      \"explanation\": \"Design patterns are reusable solutions to commonly occurring problems in software design. They are not specific pieces of code but rather abstract templates or blueprints that can be adapted to solve similar design problems in different contexts. Design patterns promote code reuse, improve maintainability, and enhance the overall architecture of software systems. They capture the experience and best practices of seasoned developers, providing a common vocabulary for discussing and documenting design decisions.\",\n      \"code_example\": null\n    },\n    {\n      \"title\": \"Benefits of Using Design Patterns\",\n      \"explanation\": \"Utilizing design patterns offers several advantages:\\n\\n*   **Code Reusability:** Patterns promote the reuse of proven solutions, reducing development time and effort.\\n*   **Improved Maintainability:** Code becomes more modular and easier to understand, simplifying maintenance and modification.\\n*   **Enhanced Communication:** Patterns provide a common vocabulary for developers, facilitating communication and collaboration.\\n*   **Reduced Complexity:** Patterns help break down complex problems into smaller, more manageable components.\\n*   **Increased Flexibility:** Patterns enable systems to adapt more easily to changing requirements.\\n*   **Proven Solutions:** Patterns represent best practices and have been thoroughly tested and refined over time.\\n*   **Improves Code Readability:** Using design patterns makes the code more self documenting and easily understandable by other developers.\" ,\n      \"code_example\": null\n    },\n    {\n      \"title\": \"Types of Design Patterns\",\n      \"explanation\": \"Design patterns are generally categorized into three main types:\\n\\n*   **Creational Patterns:** These patterns deal with object creation mechanisms, providing ways to create objects in a flexible and controlled manner. Examples include Singleton, Factory Method, Abstract Factory, Builder, and Prototype.\\n*   **Structural Patterns:** These patterns focus on how classes and objects are composed to form larger structures. They address issues like how to create hierarchies of objects and how to represent complex relationships between objects. Examples include Adapter, Bridge, Composite, Decorator, Facade, Flyweight, and Proxy.\\n*   **Behavioral Patterns:** These patterns define how objects interact and communicate with each other. They focus on algorithms and the assignment of responsibilities between objects. Examples include Chain of Responsibility, Command, Interpreter, Iterator, Mediator, Memento, Observer, State, Strategy, Template Method, and Visitor.\",\n      \"code_example\": null\n    },\n    {\n      \"title\": \"The Singleton Pattern\",\n      \"explanation\": \"The Singleton pattern ensures that a class has only one instance and provides a global point of access to it.  This is useful when exactly one object is needed to coordinate actions across the system. Common examples include database connections, thread pools, and configuration settings.  The key aspects are:\\n\\n*   A private constructor to prevent direct instantiation from outside the class.\\n*   A static method or field to hold the single instance.\\n*   A global access point (usually a static method) to retrieve the instance.\",\n      \"code_example\": \"<pre><code>public class Singleton {\\n\\n    private static Singleton instance;\\n\\n    private Singleton() {\\n        // Private constructor to prevent instantiation from outside\\n    }\\n\\n    public static Singleton getInstance() {\\n        if (instance == null) {\\n            instance = new Singleton();\\n        }\\n        return instance;\\n    }\\n\\n    public void doSomething() {\\n        System.out.println(\\\"Singleton instance is doing something.\\\");\\n    }\\n\\n    public static void main(String[] args) {\\n        Singleton singleton1 = Singleton.getInstance();\\n        Singleton singleton2 = Singleton.getInstance();\\n\\n        System.out.println(singleton1 == singleton2); // Output: true\\n\\n        singleton1.doSomething(); // Output: Singleton instance is doing something.\\n    }\\n}\\n</code></pre>\"\n    },\n    {\n        \"title\": \"Thread-Safe Singleton Pattern\",\n        \"explanation\": \"The basic Singleton implementation is not thread-safe.  Multiple threads could simultaneously enter the `if (instance == null)` block, leading to multiple instances being created.  To address this, synchronization is required.  Several approaches exist:\\n\\n*   **Synchronized getInstance() method:**  Simplest, but adds overhead to every call, even after initialization.\\n*   **Double-Checked Locking:**  Reduces the overhead of synchronization after initialization, but requires careful implementation to avoid race conditions.\\n*   **Eager Initialization:** Creates the instance at class loading time, guaranteeing thread safety, but potentially creating an instance even if it's never used.\\n*   **Initialization-on-demand holder idiom:** Leverages JVM's class initialization guarantees to provide thread safety without explicit synchronization.\",\n        \"code_example\": \"<pre><code>// Initialization-on-demand holder idiom (recommended)\\npublic class ThreadSafeSingleton {\\n\\n    private ThreadSafeSingleton() {}\\n\\n    private static class SingletonHelper {\\n        private static final ThreadSafeSingleton INSTANCE = new ThreadSafeSingleton();\\n    }\\n\\n    public static ThreadSafeSingleton getInstance() {\\n        return SingletonHelper.INSTANCE;\\n    }\\n\\n    public void doSomething() {\\n        System.out.println(\\\"ThreadSafeSingleton instance is doing something.\\\");\\n    }\\n\\n    public static void main(String[] args) {\\n        ThreadSafeSingleton singleton1 = ThreadSafeSingleton.getInstance();\\n        ThreadSafeSingleton singleton2 = ThreadSafeSingleton.getInstance();\\n\\n        System.out.println(singleton1 == singleton2); // Output: true\\n\\n        singleton1.doSomething(); // Output: ThreadSafeSingleton instance is doing something.\\n    }\\n}\\n</code></pre>\"\n    },\n    {\n      \"title\": \"The Factory Method Pattern\",\n      \"explanation\": \"The Factory Method pattern defines an interface for creating an object, but lets subclasses decide which class to instantiate.  It promotes loose coupling by decoupling the client code from the concrete classes it needs to create.  This allows you to add new product types without modifying existing client code.  Key aspects:\\n\\n*   An abstract `Creator` class or interface defining the factory method.\\n*   Concrete `Creator` subclasses that implement the factory method to return specific `Product` types.\\n*   An abstract `Product` class or interface defining the common interface for all products.\\n*   Concrete `Product` subclasses that implement the `Product` interface.\",\n      \"code_example\": \"<pre><code>// Product Interface\\ninterface Product {\\n    void operate();\\n}\\n\\n// Concrete Products\\nclass ConcreteProductA implements Product {\\n    @Override\\n    public void operate() {\\n        System.out.println(\\\"ConcreteProductA is operating.\\\");\\n    }\\n}\\n\\nclass ConcreteProductB implements Product {\\n    @Override\\n    public void operate() {\\n        System.out.println(\\\"ConcreteProductB is operating.\\\");\\n    }\\n}\\n\\n// Creator Interface\\ninterface Creator {\\n    Product createProduct();\\n}\\n\\n// Concrete Creators\\nclass ConcreteCreatorA implements Creator {\\n    @Override\\n    public Product createProduct() {\\n        return new ConcreteProductA();\\n    }\\n}\\n\\nclass ConcreteCreatorB implements Creator {\\n    @Override\\n    public Product createProduct() {\\n        return new ConcreteProductB();\\n    }\\n}\\n\\n// Client\\npublic class FactoryMethodExample {\\n    public static void main(String[] args) {\\n        Creator creatorA = new ConcreteCreatorA();\\n        Product productA = creatorA.createProduct();\\n        productA.operate(); // Output: ConcreteProductA is operating.\\n\\n        Creator creatorB = new ConcreteCreatorB();\\n        Product productB = creatorB.createProduct();\\n        productB.operate(); // Output: ConcreteProductB is operating.\\n    }\\n}\\n</code></pre>\"\n    },\n    {\n      \"title\": \"Comparing Singleton and Factory Method\",\n      \"explanation\": \"While both Singleton and Factory Method patterns involve object creation, they serve different purposes:\\n\\n*   **Singleton:** Ensures only one instance of a class exists, providing a global access point.\\n*   **Factory Method:** Defines an interface for creating objects, allowing subclasses to choose the concrete class to instantiate, promoting loose coupling and flexibility in object creation.\\n\\nSingleton focuses on instance control, while Factory Method focuses on object creation abstraction and decoupling.\",\n      \"code_example\": null\n    }\n  ]\n}\n```"},
        ],
      },
    ],
  });


  




  
  export const GenerateStudyTypeContentAiModel = model.startChat({
    generationConfig,
    history: [
    {
      role: 'user',
      parts: [
        {
          text: `Generate the flashcard on the topic : Flutter Fundamentals, User Interface (UI) Development, Basic App Navigation in JSON format with Front back content, maximum 15`,
        },
      ],
    },
    {
      role: 'model',
      parts: [
        {
          text: `Here's my thinking process for generating the Flutter Fundamentals flashcards in JSON format:

1.  **Deconstruct the Request:**
    *   **Topic:** Flutter Fundamentals, User Interface (UI) Development, Basic App Navigation. This is a broad topic, so I need to break it down into key concepts.
    *   **Format:** JSON. This means the output must be valid JSON syntax.
    *   **Structure:** Flashcard format, specifically with "Front" and "Back" content for each card.
    *   **Quantity:** Maximum 15 flashcards. This requires selecting the *most* fundamental concepts within the topic areas.

2.  **Identify Key Concepts (Brainstorming/Filtering):**
    *   **Flutter Fundamentals:**
        *   What is Flutter? (SDK, UI toolkit)
        *   What language does Flutter use? (Dart)
        *   What is the core principle? (Everything is a Widget)
        *   Hot Reload / Hot Restart (Key development features)
        *   Stateless vs. Stateful Widgets (Fundamental building blocks)
        *   Widget Tree (How UIs are structured)
        *   \`main()\` function and \`runApp()\` (Starting point)
    *   **UI Development:**
        *   Basic layout widgets (\`Row\`, \`Column\`, \`Container\`, \`Center\`, \`Padding\`, \`Scaffold\`)
        *   Common UI widgets (\`Text\`, \`Image\`, \`Icon\`, \`Button\` variants like \`ElevatedButton\`, \`TextButton\`)
        *   \`MaterialApp\` / \`CupertinoApp\` (Root app structure)
        *   \`AppBar\` (Common UI element)
        *   \`BuildContext\` (Important concept for widget interaction)
        *   Styling (Themes, \`TextStyle\`) - Maybe too advanced for *basic*? Let's stick to core widgets first.
    *   **Basic App Navigation:**
        *   \`Navigator\` widget (Core navigation mechanism)
        *   \`Navigator.push()\` (Going to a new screen)
        *   \`Navigator.pop()\` (Going back)
        *   Routes (Named vs. Anonymous)
        *   Passing data between screens (Constructor arguments, \`Navigator.pushNamed\` arguments) - Maybe slightly beyond *basic*? Let's focus on push/pop first.
        *   \`MaterialPageRoute\` (Common way to define routes)

3.  **Select and Prioritize for ~15 Cards:**
    *   I need a mix covering all three areas.
    *   Focus on the *absolute essentials* someone starting Flutter needs to know.
    *   Combine related concepts where possible if it makes sense for a single card.

    *Initial Selection:*
    1.  What is Flutter?
    2.  What language? (Dart)
    3.  Core Principle (Widgets)
    4.  Stateless Widget
    5.  Stateful Widget
    6.  \`main()\` and \`runApp()\`
    7.  \`Scaffold\` Widget
    8.  \`Column\` Widget
    9.  \`Row\` Widget
    10. \`Container\` Widget
    11. \`Text\` Widget
    12. \`ElevatedButton\` Widget (Example interactive widget)
    13. \`Navigator.push()\`
    14. \`Navigator.pop()\`
    15. \`MaterialApp\`

    *Refinement:*
    *   Maybe add \`BuildContext\`? It's crucial. Let's swap out \`ElevatedButton\` for now, as \`push\`/\`pop\` imply interaction. Or maybe combine \`push\`/\`pop\` conceptually?
    *   How about Hot Reload? It's a key *fundamental*.
    *   Let's refine the list:

    1.  What is Flutter?
    2.  Dart Language
    3.  Core Principle: Widgets
    4.  Stateless Widget
    5.  Stateful Widget
    6.  \`main()\` & \`runApp()\`
    7.  Widget Tree
    8.  \`BuildContext\`
    9.  \`Scaffold\`
    10. \`Column\` & \`Row\` (Combine for layout axis)
    11. \`Container\` (Basic styling/layout block)
    12. \`Text\` (Displaying text)
    13. \`MaterialApp\` (Root app widget)
    14. \`Navigator.push()\` (Navigation forward)
    15. \`Navigator.pop()\` (Navigation back)

    This looks like a good, balanced set of 15 covering the fundamentals requested.

4.  **Formulate "Front" and "Back" Content:**
    *   **Front:** Should be a question, a term, or a concept name. Keep it concise.
    *   **Back:** Should be the answer or definition. Explain clearly but briefly. Include code snippets where helpful (like \`runApp()\`, \`Navigator.push()\`).

    *Example - Card 1:*
    *   Front: What is Flutter?
    *   Back: Google's UI toolkit for building natively compiled applications for mobile, web, and desktop from a single codebase.

    *Example - Card 10 (Column/Row):*
    *   Front: How do you arrange widgets vertically or horizontally?
    *   Back: Use \`Column\` for vertical arrangement and \`Row\` for horizontal arrangement. Both take a \`children\` list of widgets.

    *Example - Card 14 (Navigator.push):*
    *   Front: How do you navigate to a new screen (route) in Flutter?
    *   Back: Use \`Navigator.push(context, MaterialPageRoute(builder: (context) => NewScreen()))\`. It pushes a new route onto the navigation stack.

5.  **Construct the JSON:**
    *   The overall structure should be a JSON array \`[]\`.
    *   Each element in the array should be a JSON object \`{}\` representing a flashcard.
    *   Each flashcard object must have two key-value pairs: \`"Front": "..."\` and \`"Back": "..."\`.
    *   Ensure proper JSON syntax: double quotes for keys and string values, commas between elements in the array and key-value pairs within objects (except for the last one).

6.  **Review and Verify:**
    *   Check if the JSON is valid (e.g., using a validator or just careful inspection).
    *   Ensure all 15 cards are present.
    *   Confirm the content accurately reflects Flutter fundamentals, UI, and basic navigation.
    *   Check for clarity and conciseness on both front and back.
    *   Make sure it adheres to the "maximum 15" constraint.

This systematic process ensures all constraints of the request are met, the content is relevant and accurate, and the output format is correct.`,
        },
        {
          text: `\`\`\`json
[
  {
    "Front": "What is Flutter?",
    "Back": "Google's UI toolkit for building natively compiled applications for mobile, web, desktop, and embedded devices from a single codebase."
  },
  {
    "Front": "What programming language does Flutter use?",
    "Back": "Dart, an object-oriented, C-style syntax language also developed by Google."
  },
  {
    "Front": "What is the core principle of Flutter's UI?",
    "Back": "Everything is a Widget. UI is built by composing various simple widgets into a widget tree."
  },
  {
    "Front": "What is a StatelessWidget?",
    "Back": "A widget whose state does not change after it's built. It relies on configuration passed via its constructor and the BuildContext."
  },
  {
    "Front": "What is a StatefulWidget?",
    "Back": "A widget that has mutable state. It consists of two classes: the widget itself (subclass of StatefulWidget) and its associated State object (subclass of State)."
  },
  {
    "Front": "What is the function of the \`build\` method?",
    "Back": "It describes the part of the user interface represented by the widget. Flutter calls this method when the widget needs to be rendered or rebuilt."
  },
  {
    "Front": "What is the purpose of \`main()\` and \`runApp()\`?",
    "Back": "\`main()\` is the entry point of the Dart application. \`runApp()\` takes the root widget and attaches it to the screen, starting the Flutter framework."
  },
  {
    "Front": "What is a \`Scaffold\` widget?",
    "Back": "A basic Material Design visual layout structure. It provides APIs for showing drawers, snack bars, bottom sheets, app bars, etc."
  },
  {
    "Front": "How do you arrange widgets vertically?",
    "Back": "Using the \`Column\` widget. It takes a list of \`children\` widgets and arranges them top-to-bottom."
  },
  {
    "Front": "How do you arrange widgets horizontally?",
    "Back": "Using the \`Row\` widget. It takes a list of \`children\` widgets and arranges them left-to-right."
  },
  {
    "Front": "What is a \`Container\` widget?",
    "Back": "A convenience widget that combines common painting, positioning, and sizing widgets. Used for decoration (color, borders), padding, margin, constraints, etc."
  },
  {
    "Front": "How do you display text?",
    "Back": "Using the \`Text\` widget. Example: \`Text('Hello, Flutter!')\`."
  },
  {
    "Front": "What is the \`Navigator\` widget used for?",
    "Back": "Managing a stack of routes (screens). It allows pushing new routes onto the stack (navigating to a new screen) and popping routes off the stack (going back)."
  },
  {
    "Front": "How do you navigate to a new screen?",
    "Back": "Typically using \`Navigator.push(context, MaterialPageRoute(builder: (context) => NewScreen()))\`. This pushes a new route onto the navigator stack."
  },
  {
    "Front": "How do you return to the previous screen?",
    "Back": "Using \`Navigator.pop(context)\`. This removes the current route from the navigator stack, revealing the previous one."
  }
]
\`\`\``,
        },
      ],
    },
    {
      role: 'user',
      parts: [
        {
          text: `INSERT_INPUT_HERE`,
        },
      ],
    }

    
  ]});


  export const GenerateMockAiModel = model.startChat({
    generationConfig2,
    history: [
      {
      role: 'user',
      parts: [
        {
          text: `job position: full stack developer, job description: react, nodejs, mysql, Years of experience: 6, Based on this information please give me 5  interview questions along with answer in Json Format.  Give Question and answers as field in JSON`,
        },
      ],
    },
    {
      role: 'model',
      parts: [
        {
          text: `Here's a thinking process that leads to the JSON output of interview questions and answers:

1.  **Understand the Goal:** The user wants 5 interview questions and answers for a Full Stack Developer role with 6 years of experience, specifically mentioning React, Node.js, and MySQL. The output needs to be in JSON format, with "Question" and "Answer" as keys for each entry.

2.  **Identify Key Areas:** Based on the job description and experience level, the questions should cover:
    *   **Frontend (React):** Core concepts, state management, performance, maybe hooks or advanced patterns suitable for 6 years of experience.
    *   **Backend (Node.js):** Core concepts, asynchronous programming, API design, security, potentially ORMs or database interaction specifics.
    *   **Database (MySQL):** Schema design, querying, indexing, performance optimization, transactions.
    *   **Full Stack Integration:** How frontend and backend work together, API communication, deployment considerations.
    *   **Experience/Problem Solving:** Questions that gauge the candidate's depth of experience, architectural thinking, and ability to handle complex situations (expected from someone with 6 years).

3.  **Brainstorm Questions (Initial Draft - Mix of levels):**
    *   What is the Virtual DOM? (Too basic for 6 years)
    *   Explain \`useEffect\` hook. (Okay, but maybe needs more depth)
    *   How do you handle state management in a large React app? (Good)
    *   Describe the Node.js event loop. (Good fundamental)
    *   How do you handle errors in asynchronous Node.js code? (Good practical)
    *   What are promises vs. async/await? (Maybe a bit basic, but can lead to deeper discussion)
    *   How would you design a REST API for [specific scenario]? (Good, tests design skills)
    *   Explain different types of SQL joins. (Fundamental, maybe too simple alone)
    *   How do you optimize a slow MySQL query? (Excellent for experience)
    *   What is database indexing and why is it important? (Good)
    *   How do you secure a Node.js application? (Important)
    *   Describe a challenging project you worked on involving React, Node, and MySQL. (Good behavioral/experience)
    *   How do you handle authentication/authorization in a full-stack app? (Very relevant)
    *   What are microservices vs. monoliths? (Architectural, good for experience)
    *   How do you ensure data consistency between frontend and backend? (Good integration question)

4.  **Select and Refine 5 Questions for 6 Years Experience:** Aim for a mix of frontend, backend, database, integration, and higher-level thinking.

    *   **Question 1 (React - Advanced/State Management):** Instead of just \`useEffect\`, let's focus on a common challenge in larger apps. *Refinement:* "Describe strategies for managing complex state in a large React application. Discuss the pros and cons of different approaches like Context API, Redux, Zustand, or others you've used." (Covers core React, state management, and experience with different tools).
    *   **Question 2 (Node.js - Async & Error Handling):** Combine async nature with practical error handling. *Refinement:* "Explain the Node.js event loop and its non-blocking I/O model. How does this impact how you write code, particularly regarding error handling in asynchronous operations (e.g., database calls, external API requests)?" (Covers core Node, async, and practical error handling).
    *   **Question 3 (MySQL - Performance/Optimization):** Focus on a critical database skill. *Refinement:* "Imagine a specific MySQL query is performing slowly in production. Describe the steps you would take to diagnose the issue and optimize the query. Mention tools or techniques you might use (e.g., EXPLAIN, indexing, query rewriting)." (Covers practical MySQL, performance, and methodology).
    *   **Question 4 (Full Stack - Architecture/Integration):** Test architectural thinking and integration knowledge. *Refinement:* "Discuss how you would design and implement authentication and authorization for a web application using React, Node.js, and MySQL. What are the security considerations (e.g., JWT vs. sessions, password hashing, protecting routes)?" (Covers full stack scope, security, and design).
    *   **Question 5 (Experience/Problem Solving):** A classic behavioral question tailored to the stack. *Refinement:* "Describe a technically challenging project or feature you built using React, Node.js, and MySQL. What were the main challenges, how did you approach them, what was the outcome, and what did you learn?" (Gauges real-world experience, problem-solving, and learning).

5.  **Draft Answers for Each Question:** Keep the answers concise but comprehensive, reflecting the expected knowledge of a 6-year experienced developer.

    *   **Answer 1 (React State):** Mention Context API (simpler cases), Redux/Zustand (complex global state), pros/cons (boilerplate, performance, learning curve, dev tools). Emphasize choosing the right tool for the job.
    *   **Answer 2 (Node Event Loop/Async):** Explain event loop basics (single thread, non-blocking I/O, callback queue, phases). Explain impact (callbacks, Promises, async/await). Error handling: \`try...catch\` with \`async/await\`, \`.catch()\` for Promises, error-first callbacks (less common now), central error handling middleware (Express).
    *   **Answer 3 (MySQL Optimization):** Steps: Use \`EXPLAIN\` or \`EXPLAIN ANALYZE\`, check indexes (missing, unused, wrong type), analyze query structure (JOINs, WHERE clauses, subqueries), check table schema, consider caching. Mention potential server configuration tuning as a last resort.
    *   **Answer 4 (Auth):** Describe flow (login -> credential check -> token/session generation -> token/session storage -> subsequent request validation). Compare JWT (stateless, good for APIs/microservices) vs. Sessions (stateful, simpler server-side). Security: HTTPS, strong hashing (bcrypt), input validation, secure cookie flags (HttpOnly, Secure), RBAC/permission checks on backend.
    *   **Answer 5 (Challenging Project):** Structure: STAR method (Situation, Task, Action, Result). Mention specific technologies, the *challenge* (e.g., performance bottleneck, complex data modeling, third-party integration issue), the *actions* taken (debugging, research, refactoring, design choices), the *result* (problem solved, performance improved, feature launched), and *learnings* (technical or process-related). *Self-correction: Make the answer structure generic enough for the user to fill in their own specific example.*

6.  **Format as JSON:** Create a JSON array where each element is an object with "Question" and "Answer" keys, using the refined questions and drafted answers. Double-check syntax (quotes, commas, brackets, braces).

7.  **Final Review:** Read through the JSON output. Do the questions match the job requirements and experience level? Are the answers accurate and appropriate? Is the format correct? Does it meet all the user's requests? Yes.`,
        },
        {
          text: `\`\`\`json
[
  {
    "Question": "Describe your approach to managing complex application state in a large React application. Discuss the pros and cons of different state management libraries or patterns you've used (e.g., Redux, Zustand, Context API with useReducer).",
    "Answer": "For complex state in large React apps, I typically evaluate the specific needs. For global state shared across many distant components, Redux or Zustand are strong contenders. Redux offers mature dev tools and middleware but can have boilerplate. Zustand is simpler, less boilerplate, and hook-based. For state localized to a component tree, React's Context API combined with \`useReducer\` can be effective and avoids external dependencies, but performance can be a concern if not optimized (e.g., using \`React.memo\` or splitting contexts). My choice depends on the scale, team familiarity, performance needs, and the specific state shape. I prioritize developer experience and maintainability alongside performance. With 6 years of experience, I've learned to choose the right tool for the specific problem rather than defaulting to one solution."
  },
  {
    "Question": "Explain the Node.js event loop and its role in handling asynchronous operations. How does this non-blocking I/O model impact how you structure backend code, particularly when dealing with database interactions (MySQL) and external API calls?",
    "Answer": "The Node.js event loop allows Node to perform non-blocking I/O operations despite being single-threaded. When an async operation (like a DB query or API call) is initiated, Node offloads it to the system kernel or a thread pool. The event loop continues processing other tasks. Once the async operation completes, its callback (or Promise resolution/rejection) is placed in a queue, and the event loop executes it when the call stack is clear. This model requires structuring code using callbacks, Promises (\`.then/.catch\`), or ideally \`async/await\` (which uses Promises syntactically). For MySQL interactions, this means using an async-compatible library (like \`mysql2/promise\` or an ORM like Sequelize/TypeORM) and ensuring database calls are properly \`await\`ed within \`async\` functions to prevent blocking the main thread and handle results or errors correctly. Error handling using \`try...catch\` with \`async/await\` is crucial for robustness."
  },
  {
    "Question": "Imagine a specific MySQL query involving joins across multiple tables is identified as a performance bottleneck in your Node.js application. Describe the steps you would take to diagnose and optimize this query.",
    "Answer": "1. **Analyze the Query:** Use \`EXPLAIN\` (or \`EXPLAIN ANALYZE\` in newer MySQL versions) on the slow query to understand its execution plan. This shows how MySQL joins tables, which indexes are used (or not used), and the estimated rows scanned. 2. **Check Indexes:** Ensure appropriate indexes exist on columns used in \`JOIN\` conditions (\`ON\` clauses) and \`WHERE\` clauses. Look for missing indexes, unused indexes, or indexes with poor selectivity. Consider composite indexes if filtering involves multiple columns. 3. **Review Query Structure:** Evaluate if the query can be rewritten for better performance. This might involve simplifying joins, breaking down complex queries into smaller ones, avoiding \`SELECT *\`, or ensuring filters are applied as early as possible. 4. **Check Table Schema & Data:** Analyze data types and table structures. Sometimes denormalization or schema changes might be necessary, though that's a larger undertaking. 5. **Analyze Server/Application Load:** Check if the bottleneck is the query itself or broader system issues (e.g., insufficient server resources, connection pool exhaustion in Node.js). 6. **Consider Caching:** If the data doesn't change frequently, implement caching (e.g., Redis) at the application layer in Node.js to avoid hitting the database repeatedly. My focus would be data-driven, starting with \`EXPLAIN\` and index optimization as they often yield the biggest wins."
  },
  {
    "Question": "How would you design and implement a secure authentication and authorization system for a full-stack application using React, Node.js, and MySQL? Discuss token-based (e.g., JWT) vs. session-based approaches and key security considerations.",
    "Answer": "I'd typically opt for token-based authentication (JWT) for scalability, especially with potential microservices or mobile clients. **Flow:** 1. **Login:** User submits credentials (e.g., email/password) from React frontend. 2. **Verification (Node.js):** Backend validates credentials against hashed passwords stored in MySQL (using libraries like \`bcrypt\`). 3. **Token Generation (Node.js):** Upon success, generate a JWT containing user identifiers (e.g., user ID, role) and sign it using a secret key. Optionally generate a refresh token. 4. **Token Sending:** Send the JWT (and potentially refresh token) back to the React client. 5. **Token Storage (React):** Store the JWT securely (e.g., HttpOnly cookie for access token, potentially localStorage for non-sensitive data, or secure storage for refresh token). 6. **Authenticated Requests (React):** Include the JWT in the Authorization header (Bearer token) for subsequent API requests. 7. **Token Validation (Node.js):** Middleware on protected backend routes verifies the JWT signature and expiration. 8. **Authorization (Node.js):** Check user roles/permissions (extracted from the token or fetched from DB based on user ID) against the requirements for the requested resource/action. **JWT vs. Sessions:** JWTs are stateless (server doesn't need to store session state), good for distributed systems. Sessions are stateful (server stores session data), potentially simpler for basic apps but less scalable. **Security Considerations:** Use HTTPS always, strong password hashing (bcrypt), secure JWT secret management, short expiry for access tokens with refresh token mechanism, input validation, CSRF protection (especially if using cookies), rate limiting, and implement proper authorization checks on *every* protected backend endpoint."
  },
  {
    "Question": "Describe a challenging technical problem you encountered on a project involving React, Node.js, and MySQL. How did you diagnose the issue, what solutions did you consider, what was the final implementation, and what did you learn from it?",
    "Answer": "On a previous project building a real-time dashboard, we faced severe performance degradation as user concurrency increased. The React frontend became sluggish, Node.js CPU usage spiked, and MySQL response times climbed. **Diagnosis:** We used browser dev tools (profiler, network tab) to identify slow React re-renders caused by frequent large data updates. On the backend, Node.js profiling (e.g., \`node --prof\`) and application performance monitoring (APM) tools revealed bottlenecks in data aggregation logic executed on every request and slow, unindexed MySQL queries. **Solutions Considered:** 1. Frontend: Implementing virtualization/windowing for large lists, optimizing state updates (e.g., batching, selective re-renders with \`React.memo\`), using WebSockets for more efficient data delivery instead of polling. 2. Backend: Caching aggregated data (Redis), optimizing MySQL queries (adding indexes, rewriting joins), moving complex aggregations to background jobs or database views/procedures, implementing WebSockets for pushing updates. **Final Implementation:** We implemented \`React.memo\` and selective context updates on the frontend. On the backend, we introduced WebSocket communication (using Socket.IO) to push incremental data changes instead of sending the full dataset. We heavily optimized the key MySQL aggregation queries using \`EXPLAIN\` and added appropriate composite indexes. We also implemented caching in Redis for frequently accessed, less dynamic data subsets. **Learning:** This reinforced the importance of full-stack performance monitoring from the start, the benefits of efficient data transfer mechanisms like WebSockets for real-time features, and the critical impact of database indexing and query optimization. It also highlighted how bottlenecks can cascade across the stack and require a holistic approach to resolve."
  }
  ]
\`\`\``,
        },
      ],
    },
    {
      role: 'user',
      parts: [
        {
          text: `INSERT_INPUT_HERE`,
        },
      ],
    },

    ]});

//   const result = await ChatSession.sendMessage("INSERT_INPUT_HERE");
//   console.log(result.response.text());

// ✅ NEWLY ADDED: Chat instance for evaluating user answers
export const EvaluateAnswerAI = model.startChat({
  generationConfig: generationConfig2,
  history: [],
});
