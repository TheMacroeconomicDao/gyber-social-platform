import React from 'react';
import {Slider} from "@/widgets/Slider/Slider";
import {Team} from "@/widgets/Team";
import {Container} from "@/shared/ui/Container/Container";
import {Roadmap} from "@/entities/Roadmap";


const GyberExperiment = () => {
    return (
        <>
            <Slider
                path={"/images/slides/gyber-experiment-slide.jpg"}
                title={"Millions are Billionaires"}
            />
            <Container>
                <Roadmap />
            </Container>
        </>
    );
};

export default GyberExperiment;
