
const Button = ({ children, className = "", ...props }) => {
    return (
        <div className="">
            <button
                className={`px-6 py-4 rounded-lg bg-blue-600  font-medium hover:bg-blue-700 transition ${className}`}
                {...props}
            >
                {children}
            </button>
        </div>
    );
};

export default Button;
