import {Section, ThemeBackgroundSection} from "@/shared/ui/Section/Section";
import {Container} from "@/shared/ui/Container/Container";
import cls from "./PartnerSection.module.scss";
import {Button, ThemeButton} from "@/shared/ui/Button/Button";

interface PartnerSectionProps {
    className?: string;
}

export const PartnerSection = ({className = ""}: PartnerSectionProps) => {
    return (
        <Section>
            <Container>
                <div className={cls.wrapper}>
                    <h2 className={cls.title}>Partners</h2>
                    <p className={cls.textContent}>
                        Our projects realize a potential opportunity for partners and investors. We invite you to take
                        advantage of our initiative and participate in the development of technologies important to
                        society in the fields of discovery, social networks, distributed computing and artificial
                        intelligence. Your participation in our community contributes to the development of innovative
                        technologies that are used in various areas of life - from economics and finance to medicine and
                        education. Together we can make a significant impact on the future of humanity and create a
                        world where technology is used to achieve optimal results in all areas.
                    </p>
                    <div className={cls.buttonWrapper}>
                        <Button theme={ThemeButton.GREEN}>Become a partner</Button>
                    </div>
                </div>
            </Container>
        </Section>
    );
};
