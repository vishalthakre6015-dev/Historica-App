import React, { useState } from 'react';
import { HISTORICAL_TRIVIA } from '../data/historicalSites';
import { X, BookOpen, CheckCircle2, XCircle, Award, RotateCcw, ArrowRight, HelpCircle } from 'lucide-react';

interface HistoryTriviaModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HistoryTriviaModal: React.FC<HistoryTriviaModalProps> = ({ isOpen, onClose }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  if (!isOpen) return null;

  const currentQ = HISTORICAL_TRIVIA[currentQuestionIndex];

  const handleSelectOption = (index: number) => {
    if (isAnswerSubmitted) return;
    setSelectedOption(index);
  };

  const handleSubmitAnswer = () => {
    if (selectedOption === null) return;
    setIsAnswerSubmitted(true);
    if (selectedOption === currentQ.correctIndex) {
      setScore(prev => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex + 1 < HISTORICAL_TRIVIA.length) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswerSubmitted(false);
    } else {
      setQuizFinished(true);
    }
  };

  const handleResetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setIsAnswerSubmitted(false);
    setScore(0);
    setQuizFinished(false);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      
      <div 
        className="relative w-full max-w-2xl bg-[#F8F6F0] rounded-2xl border border-stone-300 shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#F2EFE8] border-b border-stone-200">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-amber-800" />
            <h3 className="font-editorial text-lg font-medium text-stone-900">
              Curator's Historical Inquiry
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-stone-500 hover:text-stone-900 rounded-lg hover:bg-stone-200 transition-colors cursor-pointer"
            aria-label="Close quiz"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8">
          
          {!quizFinished ? (
            <div className="space-y-6">
              
              {/* Question Progress Header */}
              <div className="flex items-center justify-between text-xs text-stone-500 border-b border-stone-200 pb-2">
                <span className="font-semibold uppercase tracking-wider text-amber-800">
                  Question {currentQuestionIndex + 1} of {HISTORICAL_TRIVIA.length}
                </span>
                <span className="tabular-nums">
                  Score: <strong className="text-stone-900">{score}</strong> / {HISTORICAL_TRIVIA.length}
                </span>
              </div>

              {/* Question Text */}
              <h4 className="font-editorial text-xl sm:text-2xl text-stone-900 leading-snug">
                {currentQ.question}
              </h4>

              {/* Multiple Choice Options */}
              <div className="space-y-2.5">
                {currentQ.options.map((option, idx) => {
                  let optionStyle = 'bg-white border-stone-200 text-stone-700 hover:border-amber-400';
                  
                  if (selectedOption === idx && !isAnswerSubmitted) {
                    optionStyle = 'bg-amber-50 border-amber-500 text-amber-950 font-medium ring-1 ring-amber-500';
                  }

                  if (isAnswerSubmitted) {
                    if (idx === currentQ.correctIndex) {
                      optionStyle = 'bg-emerald-50 border-emerald-500 text-emerald-950 font-medium ring-1 ring-emerald-500';
                    } else if (selectedOption === idx) {
                      optionStyle = 'bg-rose-50 border-rose-400 text-rose-950';
                    } else {
                      optionStyle = 'bg-stone-50 border-stone-200 text-stone-400 opacity-60';
                    }
                  }

                  return (
                    <button
                      key={idx}
                      disabled={isAnswerSubmitted}
                      onClick={() => handleSelectOption(idx)}
                      className={`w-full p-4 rounded-xl border text-left text-xs sm:text-sm transition-all cursor-pointer flex items-start gap-3 ${optionStyle}`}
                    >
                      <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center font-mono text-xs shrink-0 mt-0.5">
                        {String.fromCharCode(65 + idx)}
                      </span>
                      <span className="leading-snug">{option}</span>
                    </button>
                  );
                })}
              </div>

              {/* Explanation Box when submitted */}
              {isAnswerSubmitted && (
                <div className={`p-4 rounded-xl border text-xs sm:text-sm animate-in fade-in duration-150 ${
                  selectedOption === currentQ.correctIndex 
                    ? 'bg-emerald-50/80 border-emerald-200 text-emerald-950'
                    : 'bg-stone-100 border-stone-200 text-stone-800'
                }`}>
                  <div className="flex items-center gap-1.5 font-semibold mb-1">
                    {selectedOption === currentQ.correctIndex ? (
                      <>
                        <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                        <span>Accurate Historical Analysis</span>
                      </>
                    ) : (
                      <>
                        <XCircle className="w-4 h-4 text-rose-700" />
                        <span>Curator's Correction</span>
                      </>
                    )}
                  </div>
                  <p className="leading-relaxed">{currentQ.explanation}</p>
                </div>
              )}

              {/* Action Buttons */}
              <div className="pt-2 flex justify-end gap-3">
                {!isAnswerSubmitted ? (
                  <button
                    disabled={selectedOption === null}
                    onClick={handleSubmitAnswer}
                    className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-stone-900 hover:bg-stone-800 disabled:opacity-40 disabled:cursor-not-allowed rounded-lg transition-colors cursor-pointer"
                  >
                    Confirm Answer
                  </button>
                ) : (
                  <button
                    onClick={handleNextQuestion}
                    className="flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-amber-800 hover:bg-amber-900 rounded-lg transition-colors cursor-pointer"
                  >
                    <span>{currentQuestionIndex + 1 < HISTORICAL_TRIVIA.length ? 'Next Mystery' : 'Review Score'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

            </div>
          ) : (
            /* Quiz Completion Screen */
            <div className="text-center py-8 space-y-6">
              <div className="w-16 h-16 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center mx-auto">
                <Award className="w-8 h-8" />
              </div>

              <div>
                <h4 className="font-editorial text-2xl font-semibold text-stone-900 mb-1">
                  Inquiry Concluded
                </h4>
                <p className="text-stone-600 text-sm">
                  You scored <strong className="text-amber-900 text-lg font-bold">{score}</strong> out of {HISTORICAL_TRIVIA.length} on ancient engineering mysteries.
                </p>
                <p className="text-xs text-stone-500 mt-2 max-w-sm mx-auto">
                  {score >= 4 
                    ? 'Remarkable erudition! You possess the discerning eye of an imperial antiquarian.'
                    : 'A commendable inquiry into the engineering wonders of antiquity. Continue your exploration through the monuments archive!'}
                </p>
              </div>

              <div className="flex items-center justify-center gap-3 pt-4">
                <button
                  onClick={handleResetQuiz}
                  className="flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-stone-800 bg-white hover:bg-stone-100 border border-stone-300 rounded-lg transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Retake Inquiry</span>
                </button>

                <button
                  onClick={onClose}
                  className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-stone-900 hover:bg-stone-800 rounded-lg transition-colors cursor-pointer"
                >
                  Return to Archive
                </button>
              </div>
            </div>
          )}

        </div>

      </div>

    </div>
  );
};
