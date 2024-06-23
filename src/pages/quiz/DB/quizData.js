// quizData.js
export default async function quizData() {
  const url = "https://quiz-api-thdi.onrender.com/QuizTest";

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data; // Return the entire array of data, not just data[0]
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Re-throw the error to propagate it further
  }
}
