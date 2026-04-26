import { useState } from 'react';
import {
  TrendingUp,
  BarChart3,
  AlertCircle,
  CheckCircle,
  Clock,
  Zap,
  Target,
  Award,
  ArrowRight,
  Download,
  Share2,
  Calendar,
} from 'lucide-react';
import './results.css';

const Results = () => {
  const testData = {
    testId: 'APT-001',
    testName: 'Quantitative Aptitude - Mock Test 5',
    category: 'Aptitude',
    date: new Date().toLocaleDateString(),
    totalQuestions: 30,
    answeredQuestions: 28,
    correctAnswers: 21,
    incorrectAnswers: 7,
    totalTime: 3600, 
    timeSpent: 2640, 
    marksObtained: 84,
    totalMarks: 120,
  };

  const [activeTab, setActiveTab] = useState('overview');

  const calculateMetrics = () => {
    const accuracy = (testData.correctAnswers / testData.answeredQuestions) * 100;
    const percentage = (testData.marksObtained / testData.totalMarks) * 100;
    const avgPerformance = 65;
    const performanceGap = percentage - avgPerformance;

    return {
      accuracy: accuracy.toFixed(1),
      percentage: percentage.toFixed(1),
      avgPerformance,
      performanceGap: performanceGap.toFixed(1),
      unanswered: testData.totalQuestions - testData.answeredQuestions,
    };
  };

  const metrics = calculateMetrics();

  const categoryBreakdown = [
    {
      name: 'Number System',
      attempted: 5,
      correct: 4,
      totalMarks: 20,
      score: 16,
      difficulty: 'medium',
    },
    {
      name: 'Percentage & Profit Loss',
      attempted: 6,
      correct: 5,
      totalMarks: 24,
      score: 20,
      difficulty: 'hard',
    },
    {
      name: 'Ratio & Proportion',
      attempted: 4,
      correct: 3,
      totalMarks: 16,
      score: 12,
      difficulty: 'easy',
    },
    {
      name: 'Time & Work',
      attempted: 5,
      correct: 4,
      totalMarks: 20,
      score: 16,
      difficulty: 'hard',
    },
    {
      name: 'Speed, Distance & Time',
      attempted: 4,
      correct: 3,
      totalMarks: 16,
      score: 12,
      difficulty: 'medium',
    },
    {
      name: 'Average & Mixture',
      attempted: 4,
      correct: 2,
      totalMarks: 16,
      score: 8,
      difficulty: 'hard',
    },
  ];

  const weakAreas = [
    {
      topic: 'Average & Mixture',
      accuracy: 50,
      recommendation:
        'Focus on understanding weighted averages. Practice 10-15 questions daily.',
      priority: 'high',
    },
    {
      topic: 'Percentage & Profit Loss',
      accuracy: 83,
      recommendation:
        'Good progress. Review profit/loss calculations with discounts.',
      priority: 'medium',
    },
    {
      topic: 'Speed, Distance & Time',
      accuracy: 75,
      recommendation:
        'Practice relative speed problems and boat/stream questions.',
      priority: 'medium',
    },
  ];

  const timeAnalysis = {
    avgTimePerQuestion: ((testData.timeSpent / testData.answeredQuestions) * 1000).toFixed(0),
    timePerCorrect: ((testData.timeSpent / testData.correctAnswers) * 1000).toFixed(0),
    questionsInFirstHalf: 18,
    correctInFirstHalf: 15,
    questionsInSecondHalf: 10,
    correctInSecondHalf: 6,
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}m ${secs}s`;
  };

  const getPerformanceLevel = (percentage) => {
    if (percentage >= 90) return { level: 'Excellent', color: 'excellent' };
    if (percentage >= 75) return { level: 'Good', color: 'good' };
    if (percentage >= 60) return { level: 'Average', color: 'average' };
    return { level: 'Below Average', color: 'poor' };
  };

  const perfLevel = getPerformanceLevel(metrics.percentage);

  const getCategoryColor = (accuracy) => {
    if (accuracy >= 80) return 'color-excellent';
    if (accuracy >= 60) return 'color-good';
    if (accuracy >= 40) return 'color-average';
    return 'color-poor';
  };

  return (
    <div className="results-container">
      <div className="results-header">
        <div className="results-header-content">
          <h1>Test Results</h1>
          <p className="test-info">
            <Calendar size={16} />
            {testData.testName} • {testData.date}
          </p>
        </div>
        <div className="results-actions">
          <button className="btn-action">
            <Download size={18} />
            Download PDF
          </button>
          <button className="btn-action">
            <Share2 size={18} />
            Share
          </button>
        </div>
      </div>

      <div className="score-card">
        <div className="score-main">
          <div className="score-display">
            <span className="score-number">{metrics.percentage}%</span>
            <span className="score-label">Overall Score</span>
          </div>
          <div className={`performance-badge ${perfLevel.color}`}>
            <Award size={20} />
            <div>
              <div className="badge-title">{perfLevel.level}</div>
              <div className="badge-subtitle">
                {testData.marksObtained}/{testData.totalMarks} Marks
              </div>
            </div>
          </div>
        </div>

        <div className="score-stats">
          <div className="stat-item">
            <span className="stat-label">Correct</span>
            <span className="stat-value stat-correct">
              {testData.correctAnswers}/{testData.answeredQuestions}
            </span>
            <span className="stat-percent">{metrics.accuracy}%</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Incorrect</span>
            <span className="stat-value stat-incorrect">
              {testData.incorrectAnswers}
            </span>
            <span className="stat-percent">
              {((testData.incorrectAnswers / testData.answeredQuestions) * 100).toFixed(1)}%
            </span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Unanswered</span>
            <span className="stat-value stat-unanswered">
              {metrics.unanswered}
            </span>
            <span className="stat-percent">
              {((metrics.unanswered / testData.totalQuestions) * 100).toFixed(1)}%
            </span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Time Spent</span>
            <span className="stat-value stat-time">
              {formatTime(testData.timeSpent)}
            </span>
            <span className="stat-percent">
              {((testData.timeSpent / testData.totalTime) * 100).toFixed(0)}% Used
            </span>
          </div>
        </div>

        <div className="comparison-section">
          <div className="comparison-item">
            <TrendingUp size={20} className="comparison-icon" />
            <div className="comparison-text">
              <span className="comparison-label">Your Score</span>
              <span className="comparison-value comparison-positive">
                +{metrics.performanceGap} vs Average
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="results-tabs">
        <button
          className={`tab-button ${activeTab === 'overview' ? 'active' : ''}`}
          onClick={() => setActiveTab('overview')}
        >
          <BarChart3 size={18} />
          Performance Analysis
        </button>
        <button
          className={`tab-button ${activeTab === 'breakdown' ? 'active' : ''}`}
          onClick={() => setActiveTab('breakdown')}
        >
          <Target size={18} />
          Category Breakdown
        </button>
        <button
          className={`tab-button ${activeTab === 'improvement' ? 'active' : ''}`}
          onClick={() => setActiveTab('improvement')}
        >
          <Zap size={18} />
          Improvement Plan
        </button>
      </div>

      <div className="tab-content">
        {activeTab === 'overview' && (
          <div className="tab-pane active">
            <div className="content-grid">
              <div className="analysis-card">
                <div className="card-header">
                  <Clock size={20} />
                  <h3>Time Management</h3>
                </div>
                <div className="analysis-content">
                  <div className="metric-row">
                    <span className="metric-label">Average Time per Question</span>
                    <span className="metric-value">{timeAnalysis.avgTimePerQuestion} ms</span>
                  </div>
                  <div className="metric-row">
                    <span className="metric-label">Average Time per Correct Answer</span>
                    <span className="metric-value">{timeAnalysis.timePerCorrect} ms</span>
                  </div>
                  <div className="time-distribution">
                    <div className="time-segment">
                      <span className="segment-label">First Half</span>
                      <div className="progress-bar">
                        <div
                          className="progress-fill"
                          style={{
                            width: `${
                              (timeAnalysis.correctInFirstHalf /
                                timeAnalysis.questionsInFirstHalf) *
                              100
                            }%`,
                          }}
                        ></div>
                      </div>
                      <span className="segment-value">
                        {timeAnalysis.correctInFirstHalf}/{timeAnalysis.questionsInFirstHalf}
                      </span>
                    </div>
                    <div className="time-segment">
                      <span className="segment-label">Second Half</span>
                      <div className="progress-bar">
                        <div
                          className="progress-fill"
                          style={{
                            width: `${
                              (timeAnalysis.correctInSecondHalf /
                                timeAnalysis.questionsInSecondHalf) *
                              100
                            }%`,
                          }}
                        ></div>
                      </div>
                      <span className="segment-value">
                        {timeAnalysis.correctInSecondHalf}/{timeAnalysis.questionsInSecondHalf}
                      </span>
                    </div>
                  </div>
                  <div className="insight-box insight-info">
                    <AlertCircle size={18} />
                    <div>
                      <strong>Tip:</strong> You spent more time on harder questions. Focus on
                      speed with accuracy to maximize your score.
                    </div>
                  </div>
                </div>
              </div>

              <div className="analysis-card">
                <div className="card-header">
                  <BarChart3 size={20} />
                  <h3>Performance Metrics</h3>
                </div>
                <div className="analysis-content">
                  <div className="metrics-grid">
                    <div className="metric-box">
                      <span className="metric-label">Accuracy</span>
                      <span className="metric-large">{metrics.accuracy}%</span>
                      <div className="mini-bar">
                        <div
                          className="mini-bar-fill"
                          style={{ width: `${metrics.accuracy}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="metric-box">
                      <span className="metric-label">Completion Rate</span>
                      <span className="metric-large">
                        {(
                          (testData.answeredQuestions / testData.totalQuestions) *
                          100
                        ).toFixed(0)}
                        %
                      </span>
                      <div className="mini-bar">
                        <div
                          className="mini-bar-fill"
                          style={{
                            width: `${
                              (testData.answeredQuestions / testData.totalQuestions) * 100
                            }%`,
                          }}
                        ></div>
                      </div>
                    </div>
                    <div className="metric-box">
                      <span className="metric-label">Performance vs Avg</span>
                      <span className={`metric-large ${metrics.performanceGap >= 0 ? 'positive' : 'negative'}`}>
                        {metrics.performanceGap >= 0 ? '+' : ''}
                        {metrics.performanceGap}%
                      </span>
                      <div className="mini-bar">
                        <div
                          className="mini-bar-fill"
                          style={{
                            width: `${Math.min(
                              100,
                              Math.max(0, metrics.performanceGap + 50)
                            )}%`,
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'breakdown' && (
          <div className="tab-pane active">
            <div className="breakdown-table">
              <div className="table-header">
                <div className="col-topic">Topic</div>
                <div className="col-stats">Attempted</div>
                <div className="col-stats">Correct</div>
                <div className="col-stats">Score</div>
                <div className="col-accuracy">Accuracy</div>
              </div>
              {categoryBreakdown.map((category, idx) => {
                const accuracy = (category.correct / category.attempted) * 100;
                return (
                  <div key={idx} className="table-row">
                    <div className="col-topic">
                      <div className="topic-name">{category.name}</div>
                      <span className={`difficulty-badge ${category.difficulty}`}>
                        {category.difficulty.charAt(0).toUpperCase() +
                          category.difficulty.slice(1)}
                      </span>
                    </div>
                    <div className="col-stats">{category.attempted}</div>
                    <div className="col-stats">
                      <span className="correct-count">{category.correct}</span>
                    </div>
                    <div className="col-stats">
                      {category.score}/{category.totalMarks}
                    </div>
                    <div className={`col-accuracy ${getCategoryColor(accuracy)}`}>
                      <div className="accuracy-bar">
                        <div
                          className="accuracy-fill"
                          style={{ width: `${accuracy}%` }}
                        ></div>
                      </div>
                      <span className="accuracy-text">{accuracy.toFixed(0)}%</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {activeTab === 'improvement' && (
          <div className="tab-pane active">
            <div className="improvement-grid">
              {weakAreas.map((area, idx) => (
                <div key={idx} className="improvement-card">
                  <div className="card-header-improvement">
                    <h3>{area.topic}</h3>
                    <span className={`priority-badge priority-${area.priority}`}>
                      {area.priority.charAt(0).toUpperCase() + area.priority.slice(1)}
                    </span>
                  </div>

                  <div className="improvement-content">
                    <div className="accuracy-display">
                      <span className="label">Current Accuracy</span>
                      <div className="accuracy-circle">
                        <span className="accuracy-percent">{area.accuracy}%</span>
                        <div
                          className="circle-fill"
                          style={{
                            background: `conic-gradient(#6b46ff ${area.accuracy * 3.6}deg, #e5e7eb ${area.accuracy * 3.6}deg)`,
                          }}
                        ></div>
                      </div>
                    </div>

                    <div className="recommendation-box">
                      <Zap size={18} />
                      <div>
                        <strong>Recommendation:</strong>
                        <p>{area.recommendation}</p>
                      </div>
                    </div>
                  </div>

                  <div className="card-footer">
                    <button className="btn-practice">
                      Practice This Topic <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="next-steps-section">
              <div className="section-title">
                <CheckCircle size={24} />
                <h3>Next Steps</h3>
              </div>

              <div className="steps-list">
                <div className="step-item">
                  <div className="step-number">1</div>
                  <div className="step-content">
                    <h4>Focus on Weak Areas</h4>
                    <p>
                      Start with "Average & Mixture" as it has the lowest accuracy (50%).
                      Allocate 30-45 minutes daily.
                    </p>
                  </div>
                </div>

                <div className="step-item">
                  <div className="step-number">2</div>
                  <div className="step-content">
                    <h4>Speed Optimization</h4>
                    <p>
                      Your average time per question is {timeAnalysis.avgTimePerQuestion}ms.
                      Aim to reduce it to 90-100ms while maintaining accuracy.
                    </p>
                  </div>
                </div>

                <div className="step-item">
                  <div className="step-number">3</div>
                  <div className="step-content">
                    <h4>Retake Mock Test</h4>
                    <p>
                      Take another similar test in 3-4 days to measure improvement. Your
                      goal should be {Math.round(metrics.percentage + 10)}%+.
                    </p>
                  </div>
                </div>

                <div className="step-item">
                  <div className="step-number">4</div>
                  <div className="step-content">
                    <h4>Review Wrong Answers</h4>
                    <p>
                      Go through all {testData.incorrectAnswers} incorrect answers to
                      understand the concepts and avoid similar mistakes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="results-cta">
        <div className="cta-content">
          <h3>Ready to improve your score?</h3>
          <p>Continue practicing with personalized recommendations based on your performance.</p>
        </div>
        <div className="cta-actions">
          <button className="btn btn-secondary">
            <ArrowRight size={18} />
            Take Another Test
          </button>
          <button className="btn btn-outline">Review Solutions</button>
        </div>
      </div>
    </div>
  );
};

export default Results;
