import Hero from "../stories/Hero/Hero";
import Profile from "../stories/Profile/Profile";
import Button from "../stories/Button/Button";
import Card from "../stories/Card/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { UserData } from "../Types";

import "../index.css";

export default function ProfilePage() {
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    getUserData();
    async function getUserData() {
      //grab the data from json bin
      /**
       *  fetch makes the rest of its options
       * in an object
       */
      const response = await fetch(
        "https://api.npoint.io/b7869167c6757876a385",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      setUserData(data);
    }
  }, []);
  return (
    <div className="relative">
      <Hero />
      <Profile />
      {userData && (
        <div className="userNameJob absolute left-80 mt-9">
          <h3 className="font-medium text-4xl ">{userData.name}</h3>
          <p className="text-3xl">{userData.job}</p>
        </div>
      )}
      <span className="locale text-4xl absolute left-2/4 mt-9">
        <FontAwesomeIcon
          icon={faMapMarkerAlt}
          className="text-red-600 text-4xl"
        />{" "}
        New York, NY
      </span>
      <div className="flex absolute right-12 mt-6 w-72 justify-between">
        <span className="text-xl font-medium">300 Followers</span>
        <span className="text-xl font-medium">30 Photos</span>
      </div>

      <div className="button-row absolute right-7 mt-16 flex w-3/12 justify-between">
        <Button type={"primary"} label={"Follow"} size={"md"} />
        <Button type={"secondary"} label={"Message"} size={"md"} />
      </div>
      {userData && (
        <div className="card-container w-full absolute bg-gray-100 mt-48 p-10 flex justify-evenly">
          <Card
            imgSrc={"trees1"}
            title={userData.cards[1].imageTitle}
            description={userData.cards[1].Location}
            likes={userData.cards[1].likes}
          />
          <Card
            imgSrc={"trees2"}
            title={userData.cards[2].imageTitle}
            description={userData.cards[2].Location}
            likes={userData.cards[2].likes}
          />
          <Card
            imgSrc={"trees3"}
            title={userData.cards[0].imageTitle}
            description={userData.cards[0].Location}
            likes={userData.cards[0].likes}
          />
          <Card
            imgSrc={"trees4"}
            title={userData.cards[3].imageTitle}
            description={userData.cards[3].Location}
            likes={userData.cards[3].likes}
          />
        </div>
      )}
    </div>
  );
}
