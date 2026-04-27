import React from "react";
import "./coding.css";

const Coding = () => {
  const questions = [
    {
      id: 1,
      title: "Print Hello World",
      difficulty: "Easy",
      answer: `#include <stdio.h>
int main() {
  printf("Hello World");
  return 0;
}`
    },
    {
      id: 2,
      title: "Sum of Two Numbers",
      difficulty: "Easy",
      answer: `#include <stdio.h>
int main() {
  int a = 5, b = 10;
  printf("%d", a + b);
  return 0;
}`
    },
    {
      id: 3,
      title: "Palindrome Number",
      difficulty: "Medium",
      answer: `#include <stdio.h>
int main() {
  int n = 121, rev = 0, temp = n;
  while(temp != 0) {
    rev = rev * 10 + temp % 10;
    temp /= 10;
  }
  if(n == rev)
    printf("Palindrome");
  else
    printf("Not Palindrome");
  return 0;
}`
    }
  ];

  return (
    <div className="coding-container">
      <h1>Coding Practice</h1>

      {questions.map((q) => (
        <div className="card" key={q.id}>
          <h3>{q.title}</h3>
          <p><strong>Difficulty:</strong> {q.difficulty}</p>

          <details>
            <summary>View Answer</summary>
            <pre>
              <code>{q.answer}</code>
            </pre>
          </details>
        </div>
      ))}
    </div>
  );
};

export default coding;
