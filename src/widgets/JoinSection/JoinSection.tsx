import {Section, ThemeBackgroundSection} from "@/shared/ui/Section/Section";
import {Container} from "@/shared/ui/Container/Container";
import cls from "./JoinSection.module.scss";
import {Button, ThemeButton} from "@/shared/ui/Button/Button";

interface JoinUsBlockProps {
    className?: string;
}

export const JoinSection = ({className = ""}: JoinUsBlockProps) => {
    return (
        <Section background={ThemeBackgroundSection.FIRST}>
            <Container>
                <div className={cls.wrapper}>
                    <p className={cls.textContent}>
                        Welcome to Gybernaty, an open community where ideas transform into reality. Here, you will find
                        like-minded individuals who can assist you in bringing your projects to life and unlocking your full
                        potential. We are a collective of technology enthusiasts driven by the pursuit of new discoveries.
                        Our focus lies in creating large-scale open-source projects, exploring cutting-edge technologies,
                        and supporting one another in realizing our visions. Within our community, you will discover a
                        platform for research, development, and knowledge exchange across various IT industry domains. Join
                        us and become part of a movement that fosters collaboration and innovation. Here, you will not only
                        find a team that aids you in project realization but also true friends with whom you can share your
                        ideas and successes. Together, let's embark on a journey of exploration and transformation.
                    </p>
                    <div className={cls.buttonWrapper}>
                        <Button theme={ThemeButton.BLUE}>Join</Button>
                    </div>
                </div>
            </Container>
        </Section>
    );
};
