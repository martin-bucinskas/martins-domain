import * as React from 'react';
import './Title.scss';

const Title = () => {
    return (
        <div className="title">
            <div className="row">
                <div className="col-sm-3 profile-picture">
                    <img src="https://media-exp1.licdn.com/dms/image/C4D03AQEuse2TuWTYOA/profile-displayphoto-shrink_200_200/0?e=1597881600&v=beta&t=qVm62bzXALyG3YEOE_gYH2iP7HaHUvfgSPKyxbxpBr4" alt="profile"/>
                </div>
                <div className="col-sm-9">
                    <h1>Martin Bucinskas</h1>
                    <h3><small>Full-Stack Developer</small></h3>
                    <h4><small>DevOps Practitioner / Security Enthusiast</small></h4>
                    <br />
                    <p>
                        Developer with a passion for DevOps. Worked as a full stack developer with multitude of
                        languages and frameworks, particularly enjoying serverless. A well written backend with
                        good DevOps principles is the key to your success.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Title;
