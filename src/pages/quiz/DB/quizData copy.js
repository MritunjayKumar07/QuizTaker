const quizData = {
  CSharp: {
    "Data_Types, Variables and Operators": {
      "Integer Data Types": {
        id: "1",
        metadata: {
          topic: "Integer Data Types",
          totalQuestions: 2,
          launchedBy: "Professor Eleanor Mitchell",
          launchDate: "2024-06-23",
        },
        questions: [
          {
            qid: "1",
            question:
              "How many Bytes are stored by ‘Long’ Data type in C# .net?",
            options: [
              { text: "8", isCorrect: true },
              { text: "4", isCorrect: false },
              { text: "2", isCorrect: false },
              { text: "1", isCorrect: false },
            ],
          },
          {
            qid: "2",
            question:
              "Choose “.NET class” name from which data type “UInt” is derived?",
            options: [
              { text: "System.Int16", isCorrect: false },
              { text: "System.UInt32", isCorrect: true },
              { text: "System.UInt64", isCorrect: false },
              { text: "System.UInt16", isCorrect: false },
            ],
          },
          {
            qid: "3",
            question: "Correct Declaration of Values to variables ‘a’ and ‘b’?",
            options: [
              { text: "int a = 32, b = 40.6;", isCorrect: false },
              { text: "int a = 42; b = 40;", isCorrect: false },
              { text: "int a = 32; int b = 40;", isCorrect: true },
              { text: "int a = b = 42;", isCorrect: false },
            ],
          },
          {
            qid: "4",
            question:
              "Choose“ What will be the error in the following C# code?",
            code: `Static Void Main(String[] args)
              {
               const int m = 100;
               int n = 10;
               const int k = n / 5 * 100 * n ;
               Console.WriteLine(m * k);
               Console.ReadLine();
              }`,
            options: [
              { text: "‘k’ should not be declared constant", isCorrect: false },
              {
                text: "Expression assigned to ‘k’ should be constant in nature",
                isCorrect: true,
              },
              { text: "Expression (m * k) is invalid", isCorrect: false },
              { text: "‘m ‘ is declared in invalid format", isCorrect: false },
            ],
          },
          {
            qid: "5",
            question:
              "Arrange the following data type in order of increasing magnitude sbyte, short, long, int.",
            //code: ``,
            options: [
              { text: "long < short < int < sbyte", isCorrect: false },
              {
                text: "sbyte < short < int < long",
                isCorrect: true,
              },
              { text: "short < sbyte < int < long", isCorrect: false },
              { text: "short < int < sbyte < long", isCorrect: false },
            ],
          },
          // {
          //   qid: "",
          //   question: "",
          //   //code: ``,
          //   options: [
          //     { text: "", isCorrect: false },
          //     {
          //       text: "",
          //       isCorrect: true,
          //     },
          //     { text: "", isCorrect: false },
          //     { text: "", isCorrect: false },
          //   ],
          // },
          //Add question hear:-
        ],
      },
      // "Floating and Decimal Data Types": {},
      // "Char Types and String Literals": {},
      // "Initialization of Variables": {},
      // "Scope and Lifetime of Variables": {},
      // "Type Conversion in Expressions": {},
      // "Arithmetic Operators": {},
      // "Relational and Logical Operators": {},
      // "Bit-wise and Conditional Operators": {},
    },
    // "Looping Statements": {
    //   "IF Statements": {},
    //   "Switch Statements": {},
    //   "For Loop Statements": {},
    //   "While Loop Statements": {},
    //   "Do While Loop Statements": {},
    //   "Continue, Goto statements": {},
    // },
    // Classes: {
    //   "Fundamentals of Class": {},
    //   "Reference Variables and Assignment": {},
    //   "Methods in Class": {},
    //   "Constructors in Class": {},
    //   "Destructors in Class": {},
    // },
    // "Arrays and Strings": {
    //   "Array and Initialization": {},
    //   "Basic Operation on Strings": {},
    //   "String Class with Description": {},
    //   "Comparison of Strings": {},
    //   "Searching and Modifying Strings": {},
    //   "Operation on Characters": {},
    //   "Public & Private Access Modifier": {},
    //   "Use of Ref and Out Parameters": {},
    //   "Use of Variable Arguements": {},
    // },
    // "Object Oriented Concepts": {
    //   Polymorphism: {},
    //   "Constructor Overloading": {},
    //   Structures: {},
    //   "Abstract Class & Methods": {},
    //   Enumerations: {},
    //   "Fundamentals of Inheritance": {},
    //   "Interfaces Introduction": {},
    //   "Interfaces Implementation": {},
    //   "Inheritance Implementation": {},
    //   "Introduction of Overloaded Operators": {},
    //   "Method Overloading": {},
    //   Recursion: {},
    //   "Method Overriding": {},
    // },
    // "Indexers and Exception Handling": {
    //   "Introduction of Indexers": {},
    //   "Implementation of Exception Handling": {},
    //   "Introduction of Properties": {},
    //   "Exceptions of Type Finally and Built in": {},
    //   "Properties and its Applications": {},
    //   "Try & Catch in Detail": {},
    //   "Fundamentals of Exception Handling": {},
    // },
    // "Console I/O Operations and Stream Classes": {
    //   Attributes: {},
    //   "Introduction of Console I/O Operations": {},
    //   "Reading Console Input Operations": {},
    //   "Writing Console Output Operations": {},
    //   "Introduction of Stream Classes": {},
    //   "Byte Stream": {},
    //   "Character Stream": {},
    // },
    // "Delegates, Generics and LINQ": {
    //   "Fundamental of Delegates": {},
    //   "Fundamental of LINQ": {},
    //   "Delegates in Detail": {},
    //   "Operation and Query with LINQ": {},
    //   "Fundamental of Generics": {},
    //   "Introduction of Array Class": {},
    //   "Generic Methods": {},
    //   "Runtime Type": {},
    // },
    // "Reflections, Multithreaded Programming, Collection Classes and Mathematical Functions":
    //   {
    //     "Introduction of Reflections": {},
    //     "Collection Classes": {},
    //     "Maths Class": {},
    //     "Rounding Functions in C#": {},
    //     "Multi-threaded Programming – 1": {},
    //     "Multi-threaded Programming – 2": {},
    //     Iterators: {},
    //   },
    // "Namespaces, Preprocessors and Networking": {
    //   "Fundamentals of Namespaces": {},
    //   "Fundamentals of Preprocessors": {},
    //   "Method with Parameters": {},
    //   "Fundamental of Networking": {},
    //   "URI Class": {},
    //   "Network Errors Handling": {},
    //   "Type Interface": {},
    // },
    // "Miscellaneous topics": {
    //   "Unsafe Code & Pointers Basics": {},
    //   "Pointers Operation – 1": {},
    //   "Pointers Operation – 2": {},
    //   "Accessor Controls of Class": {},
    //   "Introduction of String Formatting": {},
    //   "String Formatting – 1": {},
    //   "String Formatting – 2": {},
    // },
    // Array: {
    //   Array01: {
    //     id: "1",
    //     metadata: {
    //       topic: "C# Programming - Arrays",
    //       totalQuestions: 2,
    //       launchedBy: "Professor Eleanor Mitchell",
    //       launchDate: "2024-06-23",
    //     },
    //     questions: [
    //       {
    //         qid: "C-sharp-array-01",
    //         question: "What will be the output of the following code?",
    //         code: `
    //           int[] numbers = { 10, 20, 30 };
    //           Console.WriteLine(numbers[1]);
    //         `,
    //         options: [
    //           { text: "10", isCorrect: false },
    //           { text: "20", isCorrect: true },
    //           { text: "30", isCorrect: false },
    //           { text: "Error", isCorrect: false },
    //         ],
    //       },
    //       {
    //         qid: "C-sharp-array-02",
    //         question: "How do you declare a multidimensional array in C#?",
    //         options: [
    //           { text: "int[,] arr = new int[3,2];", isCorrect: true },
    //           { text: "int[,,] arr = new int[3,2];", isCorrect: false },
    //           { text: "int[][] arr = new int[3][2];", isCorrect: false },
    //           { text: "int[,,] arr = new int[3][2];", isCorrect: false },
    //         ],
    //       },
    //     ],
    //   },
    //   Array02: {
    //     id: "2",
    //     metadata: {
    //       topic: "C# Programming - Arrays",
    //       totalQuestions: 2,
    //       launchedBy: "Professor Eleanor Mitchell",
    //       launchDate: "2024-06-23",
    //     },
    //     questions: [
    //       {
    //         qid: "C-sharp-array-01",
    //         question: "What will be the output of the following code?",
    //         code: `
    //           int[] numbers = { 10, 20, 30 };
    //           Console.WriteLine(numbers[1]);
    //         `,
    //         options: [
    //           { text: "10", isCorrect: false },
    //           { text: "20", isCorrect: true },
    //           { text: "30", isCorrect: false },
    //           { text: "Error", isCorrect: false },
    //         ],
    //       },
    //       {
    //         qid: "C-sharp-array-02",
    //         question: "How do you declare a multidimensional array in C#?",
    //         options: [
    //           { text: "int[,] arr = new int[3,2];", isCorrect: true },
    //           { text: "int[,,] arr = new int[3,2];", isCorrect: false },
    //           { text: "int[][] arr = new int[3][2];", isCorrect: false },
    //           { text: "int[,,] arr = new int[3][2];", isCorrect: false },
    //         ],
    //       },
    //     ],
    //   },
    // },
    // More topics like Method, OOPs can be added similarly
  },
  CPlusPlus: {
    // Structure for C++ topics can follow a similar pattern
  },
};

export default quizData;
