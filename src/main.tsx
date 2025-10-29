import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Forçar novo deploy para purgar o cache - 29/10

//ReactDOM.createRoot(document.getElementById('root')!).render(
//  <React.StrictMode>
//    <App />
//  </React.StrictMode>,
//)

createRoot(document.getElementById("root")!).render(<App />);
