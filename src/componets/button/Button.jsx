import "./button.css"
const Button = ({ onClick, color, lable, disabled = false, style, link, target, type }) => {


    return (
        <>
            {link &&
                <a href={link} target={target}>
                    <button
                        className="button_main"
                        style={style}
                        onClick={onClick}
                        disabled={disabled}
                        type={type}
                    >
                        {lable}
                    </button>
                </a>
            }
            {!link &&
                <button
                    className="button_main"
                    style={style}
                    onClick={disabled ? null : onClick}
                    disabled={disabled}
                >
                    {lable}
                </button>
            }


        </>
    );
};

export default Button;
