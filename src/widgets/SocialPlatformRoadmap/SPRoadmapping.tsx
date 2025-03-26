import { Section, ThemeBackgroundSection } from '@/shared/ui/Section/Section'
import { Container } from '@/shared/ui/Container/Container'
import { SocialRoadmapCard } from '@/entities/SocialRoadmapCard'
import data from '@/entities/SocialRoadmapCard/data/SocialRoadmapData.json'
import cls from './SPRoadmapping.module.scss'

export const SPRoadmapping = () => {
  return (
    <Section background={ThemeBackgroundSection.SECOND}>
      <Container>
        <div className={cls.Wrapper}>
          <h2>Social Platform Roadmapping</h2>
          <div className={cls.Roadmap}>
            {data.map((item) => (
              <SocialRoadmapCard
                key={item.id}
                id={item.id}
                stages={item.stages}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}
