import userType from "./userType";

interface authRole {
    user: userType | null;
    token: string | null;

    setCredentials: (user: userType, token: string) => void;
    logout: () => void;
}

export default authRole;