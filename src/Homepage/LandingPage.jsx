import React from "react";
import "./LandingPage.css";
import Money from "./Components/Money.jsx";
import Investment from "./Components/Investment.jsx";
import LoanPlans from "./Components/LoanPlans";
import DepositPlans from "./Components/DepositPlans";
import FAQSection from "./Components/FAQSection";
import Services from "./Components/Services";
export default function LandingPage() {
  return (
    <div className="App">
      <Money />
      <hr className="separator-line" />
      <Investment />
      <hr className="separator-line" />
      <LoanPlans />
      <hr className="separator-line" />
      <DepositPlans />
      <hr className="separator-line" />
      <FAQSection />
      <hr className="separator-line" />
      <Services />
    </div>
  );
}
