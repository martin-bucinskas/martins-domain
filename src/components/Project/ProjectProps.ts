interface ProjectProps {
    title: string,
    description: string,
    stack: {
        languages: Array<string>,
        frameworks: Array<string>,
        others: Array<string>
    },
    images: {
        desktop?: string,
        mobile?: string
    }
}

export default ProjectProps;
