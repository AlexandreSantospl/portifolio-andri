import firstIsotron from "../../../assets/projects/isotron/first.svg";
import secondIsotron from "../../../assets/projects/isotron/second.svg";
import thirtIsotron from "../../../assets/projects/isotron/third.svg";
import forthIsotron from "../../../assets/projects/isotron/fourth.svg";
import firstLifeMed from "../../../assets/projects/lifemed/firstLifeMed.svg";
import secondLifeMed from "../../../assets/projects/lifemed/secondLifeMed.svg";
import thirdLifeMed from "../../../assets/projects/lifemed/thirdLifeMed.svg";
import fourthLifeMed from "../../../assets/projects/lifemed/fourthLifeMed.svg";
import firstLuna from "../../../assets/projects/luna/firstLuna.svg";
import secondLuna from "../../../assets/projects/luna/secondLuna.svg";
import thirdLuna from "../../../assets/projects/luna/thirdLuna.svg";
import fourthLuna from "../../../assets/projects/luna/fourthLuna.svg";
import fristLifeSync from "../../../assets/projects/lifesync/firstLifeSync.svg";
import secondLifeSync from "../../../assets/projects/lifesync/secondLifeSync.svg";
import thirdLifeSync from "../../../assets/projects/lifesync/thirdLifeSync.svg";
import fourthLifeSync from "../../../assets/projects/lifesync/fourthLifeSync.svg";
import { getTranslatedMessage } from "../../i18n/i18n";

type FeatureSectionData = {
  slug: string;
  title: string;
  descriptionHtml: string;
  buttonLink: string;
  buttonLabel: string;
  imageMain: string;
  imageBottomLeftTop: string;
  imageBottomLeftBottom: string;
  imageBottomRight: string;
};

export function getFeatureSections(): FeatureSectionData[] {
  return [
    {
      slug: "isotron",
      title: getTranslatedMessage("isotronTitle"),
      descriptionHtml: getTranslatedMessage("isotronDetailedDescription"),
      buttonLink: "https://example.com",
      buttonLabel: getTranslatedMessage("accessBehance"),
      imageMain: firstIsotron,
      imageBottomLeftTop: secondIsotron,
      imageBottomLeftBottom: thirtIsotron,
      imageBottomRight: forthIsotron,
    },
    {
      slug: "lifemed",
      title: getTranslatedMessage("lifemedTitle"),
      descriptionHtml: getTranslatedMessage("lifemedDetailedDescription"),
      buttonLink: "https://example.com",
      buttonLabel: getTranslatedMessage("accessBehance"),
      imageMain: firstLifeMed,
      imageBottomLeftTop: secondLifeMed,
      imageBottomLeftBottom: thirdLifeMed,
      imageBottomRight: fourthLifeMed,
    },
    {
      slug: "luna",
      title: getTranslatedMessage("lunaTitle"),
      descriptionHtml: getTranslatedMessage("lunaDetailedDescription"),
      buttonLink: "https://example.com",
      buttonLabel: getTranslatedMessage("accessBehance"),
      imageMain: firstLuna,
      imageBottomLeftTop: secondLuna,
      imageBottomLeftBottom: thirdLuna,
      imageBottomRight: fourthLuna,
    },
    {
      slug: "lifesync",
      title: getTranslatedMessage("lifesyncTitle"),
      descriptionHtml: getTranslatedMessage("lifesyncDetailedDescription"),
      buttonLink: "https://example.com",
      buttonLabel: getTranslatedMessage("accessBehance"),
      imageMain: fristLifeSync,
      imageBottomLeftTop: secondLifeSync,
      imageBottomLeftBottom: thirdLifeSync,
      imageBottomRight: fourthLifeSync,
    },
  ] as const;
}

export type FeatureKeys = ReturnType<typeof getFeatureSections>[number]["slug"];
