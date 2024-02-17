import "./button.css"
const Button = ({ onClick, color, lable, disabled, style, link, target }) => {


    return (
        <>
            {link &&
                <a href={link}>
                    <button
                        className="button_main"
                        style={style}
                        onClick={disabled ? null : onClick}
                        disabled={disabled}
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
