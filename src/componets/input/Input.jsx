'use client'
import "./input.css"
const Input = ({
    type = "text",
    label = "",
    name = '',
    placeholder = '',
    value = "",
    onChange = () => { },
    disabled = false }) => {
    return (
        <div className="input_main">
            <label htmlFor={name}>{label}</label>
            <input

                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                disabled={disabled}
            />
        </div>
    );
};

export default Input;
