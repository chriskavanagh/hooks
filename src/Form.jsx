import React, { useState } from "react";

const userInputValue = initialValue => {
  const [value, setValue] = useState(initialValue);

  return {
    value: value,
    onChange: e => setValue(e.target.value),
    reset: () => setValue("")
  };
};

export default ({ onSubmit }) => {
  const {reset, ...text} = userInputValue("");
  console.log(text)

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        onSubmit(text.value);
        reset();
      }}
    >
      <input {...text} />
    </form>
  );
};
