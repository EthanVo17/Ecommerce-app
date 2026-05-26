import userRole from "./userRole";

interface authRole {
    user: userRole | null;
    token: string | null;

    setCredentials: (user: userRole, token: string) => void;
    logout: () => void;
}

export default authRole;