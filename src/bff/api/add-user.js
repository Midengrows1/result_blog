import { generateDate } from "../utils";
export const addUser = (login, password) => {
    return fetch('http://localhost:3005/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            login,
            password,
            registed_at: generateDate(),
            role_id: 2
        })
    }).then((createdUser) => createdUser.json())
}