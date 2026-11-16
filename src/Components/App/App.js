import { useEffect } from "react";

function App() {
  useEffect(() => {
    window.location.replace("https://moeabdulla.com/");
  }, []);

  // Return an empty div to prevent any content from rendering
  return null;
}

export default App;
