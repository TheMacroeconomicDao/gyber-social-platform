import { Section } from "@/shared/ui/Section/Section";
import { Container } from "@/shared/ui/Container/Container";
import cls from "./PartnerSection.module.scss";
import { ReactNode } from "react";
import ExternalLink, {
  ThemeExternalLink,
} from "@/shared/ui/ExternalLink/ExternalLink";

interface PartnerSectionProps {
  children: ReactNode;
  className?: string;
}

export const PartnerSection = ({
  className = "",
  children,
}: PartnerSectionProps) => {
  return (
    <Section>
      <Container>
        <div className={cls.wrapper}>
          <h2>Partners</h2>
          <p className={cls.textContent}>{children}</p>
          <div className={cls.buttonWrapper}>
            <ExternalLink
              href="mailto:back@gyber.org?subject=Become a Gyber Partner"
              theme={ThemeExternalLink.GREEN}
              target="_blank"
            >
              Become a partner
            </ExternalLink>
          </div>
        </div>
      </Container>
    </Section>
  );
};
