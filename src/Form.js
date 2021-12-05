import { useState } from "react";
export default function Form({ setName }) {
  const [content, setContent] = useState(" ");
  return (
    <div>
      <p> Enter your first name and an API will guess your age!</p>
      <input
        onChange={(e) => {
          setContent(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setName(content);
        }}
      >
        Get Age
      </button>
    </div>
  );
}
