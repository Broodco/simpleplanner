import React from 'react'

const ProjectSummary = ({project}) => {
    return (
        <div className="card z-depth-0 project-summary">
            <div className="card-content grey-text text-darken-3">
                <div className="card-title">{project.title}</div>
                <div> posted by Max</div>
                <div className="grey-text">18th April</div>
            </div>
        </div>
    )
}

export default ProjectSummary;