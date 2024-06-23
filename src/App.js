import { Routes, Route } from "react-router-dom";
// import Home from "./pages/home/Home";
import Quiz from "./pages/quiz/detail";
import Quizlist from "./pages/quiz/quizlist/Quizlist";
import NoPage from "./pages/no-page/NoPage";
import Index from "./pages/quiz/detail";

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" index element={<Quizlist />} />
        <Route
          path="/detail/:topicKey/:subtopicKey"
          index
          element={<Index />}
        />
        <Route path="/quiz/:name" element={<Quiz />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </div>
  );
}

export default App;
