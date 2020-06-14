import * as React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import projectsJson from '../../projects.json';
import ProjectProps from "../../components/Project/ProjectProps";
import Project from '../../components/Project';

const loadProjects = (): Array<JSX.Element> => {

    const projects: Array<JSX.Element> = [];
    projectsJson.projects.forEach((project: ProjectProps, index: number) => {
        projects.push(
            <Slide index={index} key={index + '-project-slide'}>
                <Project title={project.title} description={project.description} stack={project.stack} images={project.images} />
            </Slide>
        );
    });

    return projects;
};

const Projects = () => {

    const projects = loadProjects();

    return (
        <div className="projects">
            <h2>Projects</h2>
            <br />
            {/*
                If mobile, then render this differently, as it looks bad.
            */}
            <CarouselProvider
                naturalSlideWidth={300}
                naturalSlideHeight={400}
                totalSlides={projects.length}
            >
                <Slider>{projects}</Slider>
            </CarouselProvider>
        </div>
    );
};

export default Projects;
