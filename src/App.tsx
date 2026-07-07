import { BrowserRouter, Route, Routes, Navigate } from "react-router";
import { HelmetProvider } from "react-helmet-async";
import Home from "./pages/Home";
import LaunchApp from "./pages/LaunchApp";
import GettingStarted from "./pages/GettingStarted";
import STEPWAT2 from "./pages/STEPWAT2";
import TermsOfUse from "./pages/TermsOfUse";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Contact from "./pages/Contact";

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/app" element={<LaunchApp />} />
          <Route path="/getting-started" element={<GettingStarted />} />
          <Route path="/stepwat2" element={<STEPWAT2 />} />
          <Route path="/terms" element={<TermsOfUse />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
