interface PasswordInputTypes extends React.InputHTMLAttributes<HTMLInputElement> {
    value: string;
    error?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default PasswordInputTypes;  