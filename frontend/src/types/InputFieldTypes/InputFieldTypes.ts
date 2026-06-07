interface InputFieldTypes extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    type: 'text' | 'email';
    name: string;
    value: string;
    error?: string;
    autoFocus?: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export default InputFieldTypes;