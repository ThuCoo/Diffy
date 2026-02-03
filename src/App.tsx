import { Button } from "@/components/ui/button";
import { ButtonGroup } from "./components/ui/button-group";
import Portfolio from "./Portfolio";
import { useState, useEffect } from "react";
import TermsOfService from "./TOS";
import Contacts from "./Contact";

export default function App() {
  const [showContacts, setShowContacts] = useState(false);
  const [showPortfolio, setShowPortfolio] = useState(false);
  const [showToS, setShowToS] = useState(false);
  const [hasOverflow, setHasOverflow] = useState(false);

  useEffect(() => {
    const checkOverflow = () => {
      setTimeout(() => {
        setHasOverflow(document.body.scrollHeight > window.innerHeight);
      }, 100);
    };

    checkOverflow();
    window.addEventListener("resize", checkOverflow);

    return () => window.removeEventListener("resize", checkOverflow);
  }, [showContacts, showPortfolio, showToS]);

  return (
    <div className={`w-full overflow-x-hidden ${hasOverflow ? "p-12" : ""}`}>
      <div
        className={
          "min-h-screen flex flex-col items-center gap-8 transition-all duration-500 justify-center"
        }
      >
        <h1 className="text-4xl text-amber-100 transition-all duration-500">
          Hi, I'm Diffy.
        </h1>
        <ButtonGroup>
          <Button
            variant={showContacts ? "default" : "outline"}
            className="hover:cursor-pointer transition-all duration-300"
            onClick={() => (
              setShowContacts(!showContacts),
              setShowPortfolio(false),
              setShowToS(false)
            )}
          >
            Contacts
          </Button>
          <Button
            variant={showToS ? "default" : "outline"}
            className="hover:cursor-pointer transition-all duration-300"
            onClick={() => (
              setShowToS(!showToS),
              setShowPortfolio(false),
              setShowContacts(false)
            )}
          >
            Terms Of Service
          </Button>
          <Button
            variant={showPortfolio ? "default" : "outline"}
            className="hover:cursor-pointer transition-all duration-300"
            onClick={() => (
              setShowPortfolio(!showPortfolio),
              setShowToS(false),
              setShowContacts(false)
            )}
          >
            Portfolio
          </Button>
        </ButtonGroup>
        {showContacts && (
          <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-500">
            <Contacts />
          </div>
        )}
        {showPortfolio && (
          <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-500">
            <Portfolio />
          </div>
        )}
        {showToS && (
          <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-500">
            <TermsOfService />
          </div>
        )}
      </div>
    </div>
  );
}
