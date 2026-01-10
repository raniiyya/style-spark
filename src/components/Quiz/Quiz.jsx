import { useState } from "react";
import StyleModal from "../StyleModal/StyleModal.jsx";
import { stylesData } from "../../stylesData.js";
import { questions } from "./questions.js";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isCompleted, setIsCompleted] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [quizResult, setQuizResult] = useState(null);

  const handleAnswerSelect = (answer) => {
    setAnswers({ ...answers, [currentQuestion]: answer });
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1)
      setCurrentQuestion(currentQuestion + 1);
    else handleQuizSubmission();
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) setCurrentQuestion(currentQuestion - 1);
  };

  const handleQuizSubmission = () => {
    const allAnswers = Object.values(answers).join(" ").toLowerCase();
    let selectedStyle = stylesData[0];

    if (allAnswers.includes("minimal") || allAnswers.includes("neutral"))
      selectedStyle = stylesData.find((s) => s.key === "minimalist");
    else if (
      allAnswers.includes("old money") ||
      allAnswers.includes("understated")
    )
      selectedStyle = stylesData.find((s) => s.key === "oldmoney");
    else if (
      allAnswers.includes("confident") ||
      allAnswers.includes("powerful")
    )
      selectedStyle = stylesData.find((s) => s.key === "corporatechic");
    else if (allAnswers.includes("street") || allAnswers.includes("casual"))
      selectedStyle = stylesData.find((s) => s.key === "casualchic");
    else if (allAnswers.includes("romantic") || allAnswers.includes("soft"))
      selectedStyle = stylesData.find((s) => s.key === "romantic");
    else if (allAnswers.includes("sporty") || allAnswers.includes("active"))
      selectedStyle = stylesData.find((s) => s.key === "sporty");
    else if (allAnswers.includes("vintage"))
      selectedStyle = stylesData.find((s) => s.key === "vintage");
    else if (allAnswers.includes("y2k"))
      selectedStyle = stylesData.find((s) => s.key === "y2k");
    else if (allAnswers.includes("boho"))
      selectedStyle = stylesData.find((s) => s.key === "boho");

    setQuizResult(selectedStyle);
    setIsCompleted(true);
    setShowModal(true);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setIsCompleted(false);
    setQuizResult(null);
    setShowModal(false);
  };

  const getProgressPercentage = () =>
    ((currentQuestion + 1) / questions.length) * 100;

  if (isCompleted) {
    return (
      <div
        id="quiz"
        className="py-20 bg-gradient-to-br from-blue-50 to-green-50"
      >
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-blue-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-lora">
              Quiz Complete! 🎉
            </h2>
            <p className="text-xl text-gray-600 mb-6">
              Your answers have been analyzed! Click below to explore your style
              in detail.
            </p>
            <div className="flex gap-4 justify-center">
              <button onClick={resetQuiz} className="btn-primary">
                Take Quiz Again
              </button>
              {quizResult && (
                <button
                  onClick={() => setShowModal(true)}
                  className="btn-primary"
                >
                  Explore Style
                </button>
              )}
            </div>
          </div>
        </div>

        {quizResult && (
          <StyleModal
            isOpen={showModal}
            onClose={() => setShowModal(false)}
            style={quizResult}
          />
        )}
      </div>
    );
  }

  return (
    <div id="quiz" className="py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-lora">
            Style Preference Quiz
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover your unique style preferences through this 6-question quiz.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 border border-blue-200">
          <div className="mb-8">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span className="font-medium">
                Question {currentQuestion + 1} of {questions.length}
              </span>
              <span className="font-medium">
                {Math.round(getProgressPercentage())}% Complete
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
              <div
                className="bg-black h-full rounded-full transition-all duration-500 ease-out shadow-sm"
                style={{ width: `${getProgressPercentage()}%` }}
              ></div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              {questions[currentQuestion].question}
            </h3>
            <div className="space-y-3">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(option)}
                  className={`w-full p-4 text-left border-2 transition-all duration-300 transform hover:scale-[1.02] ${
                    answers[currentQuestion] === option
                      ? "border-blue-500 bg-blue-50 text-blue-700 scale-[1.02] shadow-md"
                      : "border-gray-200 hover:border-blue-300 hover:bg-blue-25 hover:shadow-sm"
                  }`}
                >
                  <span className="font-medium">{option}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="flex justify-between">
            <button
              onClick={prevQuestion}
              disabled={currentQuestion === 0}
              className={`btn-primary ${
                currentQuestion === 0 &&
                "cursor-not-allowed bg-white hover:bg-white text-black hover:shadow-none"
              }`}
            >
              Previous
            </button>
            <button
              onClick={nextQuestion}
              disabled={!answers[currentQuestion]}
              className={`btn-primary`}
            >
              {currentQuestion === questions.length - 1
                ? "Complete Quiz"
                : "Next Question"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
