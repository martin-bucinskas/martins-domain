import * as React from 'react';
import './ProjectImage.scss';
import ProjectImageProps from "./ProjectImageProps";

const ProjectImage = ({url}: ProjectImageProps) => {

    return (
        <div className="image-container">
            <img className="monitor" src={url} alt="project-image" />
        </div>
    );
};

export default ProjectImage;
