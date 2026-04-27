<<<<<<< HEAD
import React, { useState } from "react";
import reasoningData from "../../Data/reasoningData.json";

const Reasoning = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [view, setView] = useState("topics");

  const topics = Object.keys(reasoningData);

  const data = selectedTopic ? reasoningData[selectedTopic] : null;
  const question = data ? data.questions[currentQ] : null;

  const handleTopicClick = (topic) => {
    setSelectedTopic(topic);
    setCurrentQ(0);
    setScore(0);
    setSelected(null);
    setAnswered(false);
    setView("quiz");
  };

  const handleAnswer = (index) => {
    if (answered) return;
    setSelected(index);
    setAnswered(true);
    if (index === question.answer) setScore((s) => s + 1);
  };

  const handleNext = () => {
    if (currentQ + 1 < data.questions.length) {
      setCurrentQ((q) => q + 1);
      setSelected(null);
      setAnswered(false);
    } else {
      setView("result");
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "700px", margin: "0 auto", fontFamily: "sans-serif" }}>

      {/* TOPICS */}
      {view === "topics" && (
        <>
          <h2>🧩 Reasoning Topics</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "14px" }}>
            {topics.map((topic, i) => (
              <div key={i} onClick={() => handleTopicClick(topic)}
                style={{ padding: "20px", background: "#f0f0f0", borderRadius: "10px", textAlign: "center", cursor: "pointer" }}>
                <div style={{ fontSize: "1.8rem" }}>{reasoningData[topic].icon}</div>
                <p style={{ margin: "8px 0 0", fontWeight: "bold" }}>{topic}</p>
              </div>
            ))}
          </div>
        </>
      )}

      {/* QUIZ */}
      {view === "quiz" && question && (
        <>
          <button onClick={() => setView("topics")} style={{ marginBottom: "16px", cursor: "pointer" }}>← Back</button>
          <h3>{selectedTopic} — Q{currentQ + 1}/{data.questions.length}</h3>
          <p style={{ fontSize: "1.1rem" }}>{question.q}</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
            {question.options.map((opt, i) => {
              let bg = "#f5f5f5";
              if (answered && i === question.answer) bg = "#c8f7c5";
              if (answered && i === selected && i !== question.answer) bg = "#ffd5d5";
              return (
                <div key={i} onClick={() => handleAnswer(i)}
                  style={{ padding: "12px", background: bg, borderRadius: "8px", cursor: "pointer", border: "1px solid #ddd" }}>
                  <b>{["A", "B", "C", "D"][i]}.</b> {opt}
                </div>
              );
            })}
          </div>
          {answered && (
            <div style={{ marginTop: "14px" }}>
              <p>{selected === question.answer ? "✅ Correct!" : ` Wrong! Correct: ${question.options[question.answer]}`}</p>
              <button onClick={handleNext} style={{ padding: "10px 24px", background: "#667eea", color: "#fff", border: "none", borderRadius: "8px", cursor: "pointer" }}>
                {currentQ + 1 < data.questions.length ? "Next →" : "See Result"}
              </button>
            </div>
          )}
        </>
      )}

      {/* RESULT */}
      {view === "result" && (
        <div style={{ textAlign: "center", padding: "40px" }}>
          <h2>Quiz Done! 🎉</h2>
          <p style={{ fontSize: "1.4rem" }}>Score: <b>{score} / {data.questions.length}</b></p>
          <button onClick={() => handleTopicClick(selectedTopic)}
            style={{ marginRight: "10px", padding: "10px 20px", background: "#667eea", color: "#fff", border: "none", borderRadius: "8px", cursor: "pointer" }}>
            🔁 Retry
          </button>
          <button onClick={() => setView("topics")}
            style={{ padding: "10px 20px", background: "#eee", border: "none", borderRadius: "8px", cursor: "pointer" }}>
            🏠 Topics
          </button>
        </div>
      )}

    </div>
  );
};

export default Reasoning;
=======

>>>>>>> d654a7d1f60be5eeb8a8771bbf7a085d6a04a79d
