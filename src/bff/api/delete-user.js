export const deleteUser = (userId) => {
    return fetch(`http://localhost:3005/users/${userId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
    })
}