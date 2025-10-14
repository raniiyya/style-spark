import React, { useState } from 'react';
import StyleModal from './StyleModal';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isCompleted, setIsCompleted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [quizResult, setQuizResult] = useState(null);

  const questions = [
    {
      id: 1,
      question: "Pick a color you wear the most:",
      options: ["Black", "White", "Blue", "Red", "Green", "Neutral tones"]
    },
    {
      id: 2,
      question: "What describes your personality best?",
      options: ["Bold and confident", "Minimal and refined", "Creative and artistic", "Classic and timeless", "Trendy and modern", "Eccentric and unique"]
    },
    {
      id: 3,
      question: "Choose a texture you like:",
      options: ["Denim", "Silk", "Leather", "Cotton", "Wool", "Linen"]
    },
    {
      id: 4,
      question: "What's your go-to outfit for a night out?",
      options: ["Little black dress", "Jeans and blazer", "Statement piece", "Vintage finds", "Designer labels", "Comfortable chic"]
    },
    {
      id: 5,
      question: "How do you prefer to accessorize?",
      options: ["Minimal jewelry", "Bold statement pieces", "Vintage accessories", "Trendy items", "No accessories", "Mix of everything"]
    },
    {
      id: 6,
      question: "What's your ideal shopping experience?",
      options: ["Online browsing", "Thrift store hunting", "High-end boutiques", "Fast fashion", "Designer showrooms", "Local markets"]
    },
    {
      id: 7,
      question: "Which fashion era inspires you most?",
      options: ["1920s Art Deco", "1950s Classic", "1970s Bohemian", "1980s Bold", "1990s Grunge", "2000s Y2K"]
    },
    {
      id: 8,
      question: "What's your approach to fashion trends?",
      options: ["Always follow them", "Selectively adopt", "Ignore completely", "Create my own", "Mix old and new", "Stick to classics"]
    },
    {
      id: 9,
      question: "How do you feel about mixing patterns?",
      options: ["Love it", "Occasionally", "Never", "Only subtle mixing", "Bold combinations", "Depends on the occasion"]
    },
    {
      id: 10,
      question: "What's your fashion philosophy?",
      options: ["Comfort first", "Style over comfort", "Quality over quantity", "Express yourself", "Fit in with trends", "Stand out from crowd"]
    }
  ];

  const handleAnswerSelect = (answer) => {
    setAnswers({
      ...answers,
      [currentQuestion]: answer
    });
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      handleQuizSubmission();
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleQuizSubmission = () => {
    setIsSubmitting(true);
    
    // Generate style result based on answers (no API call needed)
    const mockStyleResult = generateMockStyleResult(answers);
    setQuizResult(mockStyleResult);
    setIsCompleted(true);
    setShowModal(true);
    setIsSubmitting(false);
  };

  const generateMockStyleResult = (answers) => {
    // Generate a mock style result based on answers
    const styleTypes = [
      {
        name: "Old Money Style",
        description: "Classic, sophisticated fashion inspired by traditional wealth and elegance. Think timeless pieces, quality fabrics, and understated luxury.",
        image1: "/images/oldmoney1.jpg",
        image2: "/images/oldmoney2.jpg", 
        image3: "/images/oldmoney3.jpg",
        tags: ["old money", "luxury", "elegant", "sophisticated"],
        style_data: {
          colors: ["#1F2937", "#D4AF37", "#F5F5DC", "#8B4513"],
          typography: { fontFamily: "Lora", fontSize: "16px" },
          effects: ["elegant", "luxury", "timeless", "sophisticated"]
        },
        likes_count: 1250,
        downloads_count: 340
      },
      {
        name: "Stockholm Style",
        description: "Minimalist Scandinavian aesthetic characterized by clean lines, neutral colors, and functional design. Effortless and chic.",
        image1: "/images/stockholm1.jpg",
        image2: "/images/stockholm2.jpg",
        image3: "/images/stockholm3.jpg",
        tags: ["stockholm", "minimal", "scandinavian", "clean"],
        style_data: {
          colors: ["#F8FAFC", "#E2E8F0", "#64748B", "#1E293B"],
          typography: { fontFamily: "Poppins", fontSize: "14px" },
          effects: ["minimal", "clean", "functional", "scandinavian"]
        },
        likes_count: 890,
        downloads_count: 210
      },
      {
        name: "Streetwear",
        description: "Urban fashion influenced by hip-hop culture, skateboarding, and street art. Bold graphics, oversized fits, and casual-cool vibes.",
        image1: "/images/streetwear1.jpg",
        image2: "/images/streetwear2.jpg",
        image3: "/images/streetwear3.jpg",
        tags: ["streetwear", "urban", "hip-hop", "casual"],
        style_data: {
          colors: ["#000000", "#FFFFFF", "#FF0000", "#00FF00"],
          typography: { fontFamily: "Poppins", fontSize: "18px" },
          effects: ["urban", "bold", "casual", "street"]
        },
        likes_count: 1560,
        downloads_count: 420
      }
    ];

    // Simple logic to determine style based on answers
    let styleIndex = 0;
    if (answers[0]?.includes("Black") || answers[1]?.includes("Minimal")) {
      styleIndex = 0; // Old Money Style
    } else if (answers[0]?.includes("Red") || answers[1]?.includes("Bold")) {
      styleIndex = 1; // Stockholm Style
    } else {
      styleIndex = 2; // Streetwear
    }

    return styleTypes[styleIndex];
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setIsCompleted(false);
    setShowModal(false);
    setQuizResult(null);
    setIsSubmitting(false);
  };

  const getProgressPercentage = () => {
    return ((currentQuestion + 1) / questions.length) * 100;
  };

  if (isCompleted) {
    return (
      <div className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-blue-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-lora">
              Quiz Complete! 🎉
            </h2>
            <p className="text-xl text-gray-600 mb-6">
              Thank you for taking our fashion style quiz! We've analyzed your preferences and found your perfect style match.
            </p>
            
            {quizResult && (
              <div className="mb-8 p-6 bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl border border-pink-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-2 font-lora">
                  Your Style Match: {quizResult.name}
                </h3>
                <p className="text-gray-600">{quizResult.description}</p>
              </div>
            )}
            
            <div className="flex gap-4 justify-center">
              <button
                onClick={resetQuiz}
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-full font-semibold hover:from-blue-600 hover:to-green-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Take Quiz Again
              </button>
              {quizResult && (
                <button
                  onClick={() => setShowModal(true)}
                  className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full font-semibold hover:from-pink-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Explore Style
                </button>
              )}
            </div>
          </div>
        </div>
        
        {/* Style Modal */}
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
    <div className="py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-lora">
            Style Preference Quiz
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover your unique style preferences through our 10-question quiz. 
            Your answers will help us recommend the perfect style challenges for you.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 border border-blue-200">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span className="font-medium">Question {currentQuestion + 1} of {questions.length}</span>
              <span className="font-medium">{Math.round(getProgressPercentage())}% Complete</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
              <div
                className="bg-gradient-to-r from-blue-500 to-green-500 h-3 rounded-full transition-all duration-500 ease-out shadow-sm"
                style={{ width: `${getProgressPercentage()}%` }}
              ></div>
            </div>
            <div className="mt-2 text-xs text-gray-500 text-center">
              {currentQuestion === 0 && "Let's discover your fashion style!"}
              {currentQuestion > 0 && currentQuestion < questions.length - 1 && "Great choices so far!"}
              {currentQuestion === questions.length - 1 && "Almost done! Final question."}
            </div>
          </div>

          {/* Question */}
          <div className="mb-8">
            <div className="transition-all duration-500 ease-in-out">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 transform transition-all duration-300">
                {questions[currentQuestion].question}
              </h3>
              
              {/* Answer Options */}
              <div className="space-y-3">
                {questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(option)}
                    className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-300 transform hover:scale-[1.02] ${
                      answers[currentQuestion] === option
                        ? 'border-blue-500 bg-blue-50 text-blue-700 scale-[1.02] shadow-md'
                        : 'border-gray-200 hover:border-blue-300 hover:bg-blue-25 hover:shadow-sm'
                    }`}
                  >
                    <span className="font-medium">{option}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between">
            <button
              onClick={prevQuestion}
              disabled={currentQuestion === 0}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                currentQuestion === 0
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-gray-500 text-white hover:bg-gray-600'
              }`}
            >
              Previous
            </button>
            
            <button
              onClick={nextQuestion}
              disabled={!answers[currentQuestion] || isSubmitting}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                !answers[currentQuestion] || isSubmitting
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-blue-500 to-green-500 text-white hover:from-blue-600 hover:to-green-600 shadow-lg hover:shadow-xl'
              }`}
            >
              {isSubmitting ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Analyzing...
                </div>
              ) : (
                currentQuestion === questions.length - 1 ? 'Complete Quiz' : 'Next Question'
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
