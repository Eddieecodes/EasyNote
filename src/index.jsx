import { useState } from "react";
const Index = () => {
  const [SavedText, setSavedText] = useState("");

  function handleChange(e) {
    setSavedText(e.target.value);
  }
  function handleSubmit() {
    console.log(SavedText);
    console.log(setSavedText);
  }

  return (
    <>
      <div className="mt-20">
        <h1 className="font-bold  sm:text-3xl sm:font-bold  lg:text-4xl">
          Saves text, Jot notes, Save links with EasyNote
        </h1>
        <form>
          <input
            type="text"
            name="name"
            value={SavedText}
            placeholder="Enter your text, jottings or links"
            onChange={handleChange}
            className="rounded-lg border-gray-600 w-56 sm:w-80 lg:w-96 h-12 p-2 border-solid border-2 bg-transparent mt-3"
            // onFocus={handleInputFocus}
          ></input>
          <button
            className="text-blue-700 font-bold ml-3"
            onClick={handleSubmit}
          >
            Save
          </button>
        </form>
      </div>
    </>
  );
};

export default Index;
