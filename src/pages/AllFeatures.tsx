import { FeatureSection } from "../components/session/pageCard/projectCard";
import { getTranslatedMessage } from "../shared/i18n/i18n";
import { getFeatureSections } from "../shared/constants/projects";
import { useTranslation } from "react-i18next";
import { TranslationKeys } from "../shared/i18n/interface";
import { useMemo } from "react";

export const Features = ({ slug }: { slug?: string }) => {

  const { i18n } = useTranslation<"common", TranslationKeys>("common");
  const featuresSections = useMemo(() => getFeatureSections(), [i18n.language])

  return (
    <>
      {featuresSections.map((current) => (
        <FeatureSection
          key={current.slug}
          title={current.title || ""}
          descriptionHtml={current.descriptionHtml || ""}
          buttonLink={current.buttonLink || ""}
          buttonLabel={getTranslatedMessage("accessBehance")}
          imageMain={current.imageMain || ""}
          imageBottomLeftTop={current.imageBottomLeftTop || ""}
          imageBottomLeftBottom={current.imageBottomLeftBottom || ""}
          imageBottomRight={current.imageBottomRight || ""}
          slug={current.slug}
          slugSelected={slug}
        />
      ))}
    </>
  );
};
