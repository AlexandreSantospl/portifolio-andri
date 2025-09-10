import { FeatureSection } from "../components/session/pageCard/projectCard";
import { getTranslatedMessage } from "../shared/i18n/i18n";
import { featureSections } from "../shared/constants/projects";

export const Features = ({ slug }: { slug?: string }) => {


  return (
    <>
      {featureSections.map((current) => (
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
