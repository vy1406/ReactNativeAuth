import { useContext, useState } from "react";
import AuthContent from "../components/Auth/AuthContent";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { login } from "../util/auth";
import { Alert } from "react-native";
import { AuthContext } from "../store/auth-context";

function LoginScreen() {
  const [isAuthenticating, setIsAthenticating] = useState(false);

  const authCtx = useContext(AuthContext)
  async function loginHandler({ email, password }) {
    setIsAthenticating(true);
    try {
      const token = await login(email, password);
      authCtx.authenticate(token)
    } catch (error) {
      Alert.alert("Authnetication failed!", "check credentials..");
      setIsAthenticating(false);
    }
  }

  if (isAuthenticating) {
    return <LoadingOverlay message={"login user..."} />;
  }

  return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

export default LoginScreen;
