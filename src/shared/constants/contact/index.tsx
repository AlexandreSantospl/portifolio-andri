import { IContact } from "../../types";
import gitIcon from "../../../assets/icons/git.svg";
import whatsapp from "../../../assets/icons/whatsapp.svg";
import linkedinIcon from "../../../assets/icons/linkedin.svg";

export const contact: IContact[] = [
  { img: gitIcon, link: "https://github.com/AlexandreSantospl", label: "GitHub" },
  {
    img: linkedinIcon,
    link: "https://www.linkedin.com/in/alexandre-duarte-862988202/", label: "Linkedin",
  },
  { img: whatsapp, link: "https://wa.me/5553991085073", label: "WhatsApp" },
];
