const initState = {
    projects: [
        {
            id: '1',
            title: 'Project 1',
            content: 'blah blah 1'
        },
        {
            id: '2',
            title: 'Project 2',
            content: 'blah blah 2'
        },
        {
            id: '3',
            title: 'Project 3',
            content: 'blah blah 3'
        }
    ]
}

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('created project', action.project)
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('create project error', action.error)
            return state;
        default:
            console.log('no valid action')
            return state;
    }
}

export default projectReducer