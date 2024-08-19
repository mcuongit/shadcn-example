import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);
  interface ErrorResponse {
    statusText: string;
    message: string;
  }
  function isError(obj: unknown): obj is ErrorResponse {
    return (
      typeof obj === "object" &&
      obj !== null &&
      "message" in obj &&
      "statusText" in obj
    );
  }
  const showMessage = (e: unknown) => {
    if (isError(e)) {
      return e.message ?? e.statusText;
    }
    return "Unknown error";
  };
  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{showMessage(error)}</i>
      </p>
    </div>
  );
}
