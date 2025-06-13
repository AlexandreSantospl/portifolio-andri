import { useParams } from "react-router-dom";
import { featureSections } from "../shared/constants/projects";
import { FeatureSection } from "../components/session/pageCard/projectCard";

export default function FeaturePage() {
  const { slug } = useParams();
  const section = featureSections.find((f) => f.slug === slug);

  if (!section) return <div>Projeto não encontrado</div>;

  return (
    <FeatureSection
      title={section.title}
      descriptionHtml={section.descriptionHtml}
      buttonLink={section.buttonLink}
      buttonLabel={section.buttonLabel}
      imageMain={section.imageMain}
      imageBottomLeftTop={section.imageBottomLeftTop}
      imageBottomLeftBottom={section.imageBottomLeftBottom}
      imageBottomRight={section.imageBottomRight}
    />
  );
}
