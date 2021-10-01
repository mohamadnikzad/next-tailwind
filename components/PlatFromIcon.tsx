import { Windows } from "@styled-icons/boxicons-logos";
import { Fragment, ReactElement } from "react";
import { Linux } from "styled-icons/fa-brands";
import { Android } from "styled-icons/icomoon";
import { PhoneIphone } from "styled-icons/material-outlined";
import { Playstation } from "styled-icons/remix-line";
import { Apple, Xbox } from "styled-icons/simple-icons";

interface PProps {
  platform: string;
}

const PlatFromIcon: React.FC<PProps> = ({ platform }) => {
  let icon: ReactElement | string = "";
  switch (platform) {
    case "pc":
      icon = <Windows className="w-4" />;
      break;
    case "xbox":
      icon = <Xbox className="w-4" />;
      break;
    case "playstation":
      icon = <Playstation className="w-4" />;
      break;
    case "linux":
      icon = <Linux className="w-4" />;
      break;
    case "mac":
      icon = <Apple className="w-4" />;
      break;
    case "android":
      icon = <Android className="w-4" />;
      break;
    case "ios":
      icon = <PhoneIphone className="w-4" />;
      break;
    default:
      icon = "";
      break;
  }
  return <Fragment>{icon}</Fragment>;
};

export default PlatFromIcon;
