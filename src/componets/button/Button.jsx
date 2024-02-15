import "./button.css"
const Button = ({ onClick, color, lable, disabled, style }) => {


    return (
        <button
            className="button_main"
            style={style}u
            onClick={disabled ? null : onClick}
            disabled={disabled}
        >
            {lable}
        </button>
    );
};

export default Button;
