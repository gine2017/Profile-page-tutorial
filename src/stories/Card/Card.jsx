import "../../index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default function Card({ imgSrc, title, description, likes }) {
  return (
    /**
     * have them create the card
     */
    <div className="card w-72 h-96 rounded-3xl bg-white border-gray-200 border-solid border-2 relative">
      <div
        className={`card-image bg-${imgSrc}-image rounded-t-3xl w-72 h-44`}
      ></div>
      <div className="card-title mt-6 ml-6">
        <h3 className="font-medium text-2xl">{title}</h3>
      </div>
      <div className="card-description ml-6 mt-6">
        <p className="">{description}</p>
      </div>
      <div className="card-footer ml-6 absolute bottom-4">
        <FontAwesomeIcon icon={faHeart} />
        <span className="ml-1">{likes}</span>
      </div>
    </div>
  );
}
