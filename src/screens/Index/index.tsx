import * as React from 'react';
import Header from '../../containers/Header';
import Title from '../../containers/Title';
import Projects from '../../containers/Projects';
import Latest from '../../containers/Latest';
import Footer from '../../containers/Footer';

const Index = () => {

    return (
      <div className="container">
        <Header />
        <Title />
        <Projects />
        <Latest />
        <Footer />
      </div>
    );
};

export default Index;
