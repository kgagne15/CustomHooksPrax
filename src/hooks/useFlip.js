import { useState } from "react";

function useFlipState() {
  const [state, setState] = useState(true);
  const flipCard = () => {
    setState(state => !state);
  };

  return [state, flipCard]
}

export default useFlipState; 