import { useRouteError } from "react-router-dom";

const Error = () => {
  const router = useRouteError();
  console.log(router);
  return (
    <div>
      <h2>OOPS !!!</h2>
      <p>Something went wrong</p>
      <p>status: {router.status}</p>
      <p>{router.statusText}</p>
    </div>
  );
};

export default Error;
