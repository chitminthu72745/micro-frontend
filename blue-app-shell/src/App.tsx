import { lazy, Suspense } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages";
const RemoteApp = lazy(() => import("sharedComp1/RemoteApp1") as any);

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/app1/*"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <RemoteApp />
              </Suspense>
            }
          />
          <Route path="/" element={<Index />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
