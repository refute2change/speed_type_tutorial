import { useState } from "react";

function useTypingLogic() {
  const [currentWord, setCurrentWord] = useState("");

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Primary Flush: Catches standard spacebar hits instantly
    if (e.key === " ") {
      e.preventDefault();
      // Only submit if there is actual text (optional, but good UX)
      if (currentWord.length > 0) {
          console.log("Word submitted (Key):", currentWord);
          setCurrentWord(""); 
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;

    // Backup Flush: Catches IME/Mobile spaces that onKeyDown missed
    if (val.endsWith(" ")) {
      const cleanWord = val.trim();
      if (cleanWord.length > 0) {
          console.log("Word submitted (Change):", cleanWord);
          setCurrentWord("");
      }
    } else {
      setCurrentWord(val);
    }
  };

  return {
    currentWord,
    handleKeyDown,
    handleChange
  };
}

export function TypingSection() {
    const { currentWord, handleKeyDown, handleChange } = useTypingLogic();

    return (
        <div>
            <p>Type below:</p>
            <input 
                type="text" 
                name="typingInput" 
                value={currentWord}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                className="border p-2 rounded" // specific tailwind classes help visibility
                autoComplete="off" // Turn off browser suggestions for games
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck="false"
            />
        </div>
    );
}