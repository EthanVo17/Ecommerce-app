import userRole from "./userType";

interface authRole {
    user: userRole | null;
    token: string | null;

    setCredentials: (user: userRole, token: string) => void;
    logout: () => void;
}

export default authRole;