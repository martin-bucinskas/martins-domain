import * as React from 'react';
import LinkButtonProps from './LinkButtonProps';
import './LinkButton.scss';

const getImageFromUrl = (url: string) => {

    if (url.includes('linkedin')) {
        return <img src="/linkedin.png" alt="linkedin logo" />
    } else if (url.includes("github")) {
        return <img src="/github_square.png" alt="github logo" />
    }
};

const LinkButton = ({url}: LinkButtonProps) => {

    return (
        <div className="linkButton-container">
            <a href={url}>{getImageFromUrl(url)}</a>
        </div>
    );
};

export default LinkButton;
