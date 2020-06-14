import * as React from 'react';
import ProjectProps from "./ProjectProps";
import ProjectImage from "../ProjectImage";


// TODO: Generate images.
const Project = (props: ProjectProps) => {

    const {title, description, stack, images} = props;

    const generateStack = () => {
        const languages: Array<JSX.Element> = [];
        const frameworks: Array<JSX.Element> = [];
        const others: Array<JSX.Element> = [];

        stack.languages.forEach((language: string, index: number) => {
            languages.push(<li key={index + '-language-' + title}>{language}</li>);
        });

        stack.frameworks.forEach((framework: string, index: number) => {
            frameworks.push(<li key={index + '-framework-' + title}>{framework}</li>);
        });

        stack.others.forEach((other: string, index: number) => {
            others.push(<li key={index + '-other-' + title}>{other}</li>);
        });

        return (
            <>
                <b>Languages</b>
                <ul>
                    {languages}
                </ul>
                <b>Frameworks</b>
                <ul>
                    {frameworks}
                </ul>
                <b>Other</b>
                <ul>
                    {others}
                </ul>
            </>
        );
    };

    const generateImages = () => {
        return <ProjectImage url={images.desktop}/>
    };

    return (
        <div className="project">
            <div className="row">
                <div className="col-sm-4">
                    <h3><small>{title}</small></h3>
                    <p>{description}</p>
                </div>
                <div className="col-sm-3">
                    <h3><small>Tech Stack</small></h3>
                    {generateStack()}
                </div>
                <div className="col-sm-5">
                    {generateImages()}
                </div>
            </div>
        </div>
    );
};

export default Project;
