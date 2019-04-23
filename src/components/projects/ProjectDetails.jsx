import React from 'react'

function ProjectDetails(props) {
    const id = props.match.params.id
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">
                        Project Title - {id}
                    </span>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt aliquid non explicabo a quod, laborum assumenda numquam labore nemo culpa. At architecto enim animi excepturi quis cupiditate sint neque nam.</p>
                </div>
                <div className="card-action green lighten-4 green-text text-darken-4">
                    <div>Posted by Someone</div>
                    <div>Today !</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails
