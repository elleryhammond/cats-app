import React, { useState, useEffect } from "react";
import { catFactsApi } from "../../utils/catFactsApi";
import "./CatFacts.css";
import Facts from "../Facts/Facts";
import Preloader from "../Preloader/Preloader";

const CatFacts = () => {
  const [number, setNumber] = useState("");
  const [catFacts, setCatFacts] = useState([]);
  const [isLoadingFacts, setIsLoadingFacts] = useState(false);
  const [isLoadingClear, setIsLoadingClear] = useState(false);
  const [displayedCatFacts, setDispayedCatFacts] = useState([]);
  const [totalCatFacts, setTotalCatFacts] = useState(0);
  const [loadButtonDisplayed, setLoadButtonDisplayed] = useState(false);

  useEffect(() => {
    if (catFacts.length > 0) {
      setDispayedCatFacts(catFacts.slice(0, 20));
      setLoadButtonDisplayed(catFacts.length > 20);
    }
  }, [catFacts]);

  const handleChange = (event) => {
    setNumber(event.target.value);
  };

  const handleClearFacts = () => {
    setIsLoadingClear(true);
    setTimeout(() => {
      setCatFacts([]);
      setDispayedCatFacts([]);
      setLoadButtonDisplayed(false);
      setIsLoadingClear(false);
    }, 500);
  };

  const handleLoadMoreFacts = () => {
    const remainingFacts = catFacts.slice(
      displayedCatFacts.length,
      displayedCatFacts.length + 20
    );
    setDispayedCatFacts((prevFacts) => [...prevFacts, ...remainingFacts]);
    setLoadButtonDisplayed(
      displayedCatFacts.length + remainingFacts.length < totalCatFacts
    );
  };

  const randomizeArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const getCatFacts = (event) => {
    event.preventDefault();
    setIsLoadingFacts(true);
    const url = catFactsApi(number);
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch cat facts");
        }
        return res.json();
      })
      .then((data) => {
        setTimeout(() => {
          const randomizeFacts = randomizeArray(data.data);
          setCatFacts(randomizeFacts);
          setNumber("");
          setIsLoadingFacts(false);
          setTotalCatFacts(randomizeFacts.length);
        }, 1000);
      })
      .catch((error) => {
        console.error(error);
        setIsLoadingFacts(false);
      });
  };

  return (
    <div className="cat__facts">
      <div className="cat__facts-container">
        <div className="cat__facts-background">
          <div className="cat__facts-header">
            <label htmlFor="input">How many facts would you like?</label>
          </div>
          <form className="cat__facts-form" onSubmit={getCatFacts}>
            <input
              type="number"
              name="number"
              id="input"
              value={number}
              onChange={handleChange}
              required
              className="cat__facts-input"
              placeholder="###"
              min="1"
              max="332"
            />
            <button
              className="cat__facts-button"
              type="submit"
              disabled={isLoadingFacts}
            >
              {isLoadingFacts ? <Preloader /> : "Get facts"}
            </button>
            <button
              className="cat__facts-button"
              type="button"
              onClick={handleClearFacts}
              disabled={isLoadingClear}
            >
              {isLoadingClear ? "HISS" : "Clear"}
            </button>
          </form>
        </div>
      </div>

      <div>
        {displayedCatFacts.map((fact, index) => (
          <Facts key={index} fact={fact.fact} />
        ))}
      </div>

      <div className="cat__facts-load_button-container">
        {loadButtonDisplayed && (
          <button
            className="cats__facts-load_button"
            onClick={handleLoadMoreFacts}
          >
            LOAD MORE
          </button>
        )}
      </div>
    </div>
  );
};

export default CatFacts;
