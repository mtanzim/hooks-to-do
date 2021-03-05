import React, { useContext } from "react";
import { MoodContext } from "../App";
export function UserMood() {
  const curMood = useContext(MoodContext);

  return (
    <div>
      <p>Currently {curMood}</p>
    </div>
  );
}
