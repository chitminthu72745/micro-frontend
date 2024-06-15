import { lazy, Suspense } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages";
const RemoteAppOne = lazy(() => import("sharedComp1/RemoteApp1") as any);
const RemoteAppTwo = lazy(() => import("sharedComp2/RemoteApp2") as any);

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/app1/*"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <RemoteAppOne />
              </Suspense>
            }
          />
          <Route
            path="/app2/*"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <RemoteAppTwo />
              </Suspense>
            }
          />
          <Route
            path="/"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Index />
              </Suspense>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
