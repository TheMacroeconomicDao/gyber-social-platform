import {Section, ThemeBackgroundSection} from "@/shared/ui/Section/Section";
import {Container} from "@/shared/ui/Container/Container";
import {SquareCard} from "@/entities/SocialRoadmapCard/ui/SquareCard/SquareCard";

interface SPRoadmappingProps {
    className?: string;
}

export const SPRoadmapping = ({className}:SPRoadmappingProps) => {
    return (
        <Section background={ThemeBackgroundSection.SECOND}>
            <Container>
                <SquareCard />

            </Container>
        </Section>
    );
};
