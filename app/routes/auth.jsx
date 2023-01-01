import authStyles from "~/styles/auth.ccs";

const AuthPage = () => {
  return <h1>Auth Page</h1>;
};

export default AuthPage;

export function links() {
  return [{ rel: "stylesheet", href: authStyles }];
}
