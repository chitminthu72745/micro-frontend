import { lazy, Suspense } from "react";
import "./App.css";
const RemoteApp = lazy(() => import("sharedComp1/RemoteApp") as any);

function App() {
  return (
    <>
      <h1>React Container</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <RemoteApp />
      </Suspense>
    </>
  );
}

export default App;
