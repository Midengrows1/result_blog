export const getRoles = async () => {
    return fetch(`http://localhost:3005/roles`)
        .then((loadedRoles) => loadedRoles.json())
};