import "./CatImages.css";
import { useState, useEffect } from "react";
import { catImageApi } from "../../utils/catImageApi";
import Preloader from "../Preloader/Preloader";

function CatImages({ buttonText }) {
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setIsLoading] = useState(true);

  const getCatImage = () => {
    setIsLoading(true);
    catImageApi()
      .then((data) => {
        const imageUrl = data[0].url;
        setTimeout(() => {
          setImageUrl(imageUrl);
          setIsLoading(false);
        }, 200);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getCatImage();
  }, []);

  return (
    <div className="cat__images-generator">
      <div>
        {loading ? (
          <Preloader />
        ) : (
          <img className="cat__images-pictures" src={imageUrl} alt="cat" />
        )}

        <div>
          {!loading && (
            <button className="cat__images-button" onClick={getCatImage}>
              {(buttonText = !loading ? "Give me another cat!" : "MEOW")}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default CatImages;
