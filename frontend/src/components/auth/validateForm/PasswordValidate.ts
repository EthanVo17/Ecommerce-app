const PasswordValidateStrength = (password: string) => {
    let strength = 0;
    if (!password) return { text: '', color: 'bg-gray-200' };
    if (password.length > 5) strength++;
    if (password.length >= 8) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;

    if (strength <= 2) return { text: 'Yếu', color: 'bg-red-500 text-red-500' };
    if (strength >= 3 && strength < 5)
      return { text: 'Trung bình', color: 'bg-yellow-500 text-yellow-500' };
    return { text: 'Mạnh', color: 'bg-green-500 text-green-500' };
}

export default PasswordValidateStrength;