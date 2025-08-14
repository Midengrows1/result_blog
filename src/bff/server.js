import { authorize, register, logout, fetchRoles, fetchUsers, updateUserRole, removeUser } from "./operations"
export const server = {
    authorize,
    logout,
    register,
    fetchRoles,
    fetchUsers,
    updateUserRole,
    removeUser
}