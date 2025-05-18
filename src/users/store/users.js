
const state = {
    currentPage: 0,
    users: []
}

const loadNextPage = () => {
    throw new Error('not implemented');
}

const loadPreviousPage = () => {
    throw new Error('not implemented');
}

const onUserChanged = () => {
    throw new Error('not implemented');
}

const reloadPage = () => {
    throw new Error('not implemented');
}

export default {
    loadNextPage,
    loadPreviousPage,
    onUserChanged,
    reloadPage,

    getUsers: () => [state.users],
    getCurrentPage: () => state.currentPage 
}