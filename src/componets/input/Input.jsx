'use client'
import "./input.css"
const Input = ({
    type = "text",
    label = "",
    name,
    placeholder = '',
    value = "",
    style,
    error,
    onChange = () => { },
    disabled = false }) => {
    return (
        <div className="input_main">
            {label && <label htmlFor={name}>{label}</label>}
            <input
                name={name}
                style={style}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                disabled={disabled}
            />
            {error &&
                <div className="text-danger fs-5">
                    {error}
                </div>
            }
        </div>
    );
};

export default Input;
