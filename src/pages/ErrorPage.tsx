import { useRouteError, NavLink } from "react-router-dom";

const ErrorPage: React.FC = () => {
    const error = useRouteError();
    console.error(error);

    const errorMessage =
        error && typeof error === "object" && "data" in error
            ? (error as { data?: string }).data
            : String(error);

    return (
        <div>
            <h1>Oops! An error occurred.</h1>
            <p>{errorMessage}</p>
            <NavLink to="/">
                <button>Go to Home</button>
            </NavLink>
        </div>
    );
};

export default ErrorPage;