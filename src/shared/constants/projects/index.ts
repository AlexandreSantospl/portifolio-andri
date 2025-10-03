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
      imageMain: "/projects/isotron/first.svg",
      imageBottomLeftTop: "/projects/isotron/second.svg",
      imageBottomLeftBottom: "/projects/isotron/third.svg",
      imageBottomRight: "/projects/isotron/fourth.svg",
    },
    {
      slug: "lifemed",
      title: getTranslatedMessage("lifemedTitle"),
      descriptionHtml: getTranslatedMessage("lifemedDetailedDescription"),
      buttonLink: "https://example.com",
      buttonLabel: getTranslatedMessage("accessBehance"),
      imageMain: "/projects/lifemed/firstLifeMed.svg",
      imageBottomLeftTop: "/projects/lifemed/secondLifeMed.svg",
      imageBottomLeftBottom: "/projects/lifemed/thirdLifeMed.svg",
      imageBottomRight: "/projects/lifemed/fourthLifeMed.svg",
    },
    {
      slug: "luna",
      title: getTranslatedMessage("lunaTitle"),
      descriptionHtml: getTranslatedMessage("lunaDetailedDescription"),
      buttonLink: "https://example.com",
      buttonLabel: getTranslatedMessage("accessBehance"),
      imageMain: "/projects/luna/firstLuna.svg",
      imageBottomLeftTop: "/projects/luna/secondLuna.svg",
      imageBottomLeftBottom: "/projects/luna/thirdLuna.svg",
      imageBottomRight: "/projects/luna/fourthLuna.svg",
    },
    {
      slug: "lifesync",
      title: getTranslatedMessage("lifesyncTitle"),
      descriptionHtml: getTranslatedMessage("lifesyncDetailedDescription"),
      buttonLink: "https://example.com",
      buttonLabel: getTranslatedMessage("accessBehance"),
      imageMain: "/projects/lifesync/firstLifeSync.svg",
      imageBottomLeftTop: "/projects/lifesync/secondLifeSync.svg",
      imageBottomLeftBottom: "/projects/lifesync/thirdLifeSync.svg",
      imageBottomRight: "/projects/lifesync/fourthLifeSync.svg",
    },
  ] as const;
}

export type FeatureKeys = ReturnType<typeof getFeatureSections>[number]["slug"];
