import React, {useState, useEffect} from 'react'
import styles from './projects.module.css' 
import Client from '../../../Contentful'
import Project from '../../Project/Project'
import ShowcaseSection from '../../ShowcaseSection/ShowcaseSection'

export default function Projects() {

    const [projects, setProjects] = useState([]);

    const removeUndefined = function (project){
        const result = {}
        for(var item in project){
            if(typeof project[item] !== 'undefined'){
               result[item] = project[item];
            }
        }
        return result;
    }

    const formatProjects = function(projectsToFormat) {
        var project;
        var formattedProjects = []
        for(let i = 0; i < projectsToFormat.length; i++){
            let tempProject = projectsToFormat.find(project => project.fields.index === i);
            const {title, description, technologies, url, githubLink, index} = tempProject.fields;
            if (tempProject.fields.hasOwnProperty('image')){
                var image = tempProject.fields.image.fields.file.url;
                project = removeUndefined({title, image, description, technologies, url, githubLink, index});
            } else {
                project = removeUndefined({title, description, technologies, url, githubLink, index});
            }
            formattedProjects.push(project);
        }
        return formattedProjects;
    }

    const getProjects = async () => {
        var response = await Client.getEntries({
            content_type: "portfolioProject"
        })
        var formattedProjects = formatProjects(response.items);
        setProjects(formattedProjects)
    }

    useEffect(() => {
        getProjects();
    }, []);

    return (
        <ShowcaseSection id="projects" title="Development Projects">
            <div className={styles.projectsContainer}>
                {projects.map((project) => {
                    return(
                        <Project key={project.index} project={project}/>
                    )
                })}
            </div>
        </ShowcaseSection>
    )
}
