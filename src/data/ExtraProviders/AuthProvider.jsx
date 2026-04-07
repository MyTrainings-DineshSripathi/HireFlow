// AuthProvider.jsx
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { clearTokens, getRefreshToken, getRole } from "../indexed/IndexedService";
import { jwtDecode } from "jwt-decode";
import { setUserData } from "../slices/userSlice";
import './AuthProvider.css'
import Radar from "@/ReactBits/Radar";

function AuthProvider({ children }) {
  const dispatch = useDispatch();
  const [authReady, setAuthReady] = useState(false);

  useEffect(() => {
    let mounted = true;

    const rehydrateAuth = async () => {
      try {
        const refreshToken = await getRefreshToken();
        const userRole = await getRole();

        if (refreshToken) {
          const decoded = jwtDecode(refreshToken);
          const isExpired = decoded.exp * 1000 < Date.now();

          if (!isExpired) {
            dispatch(setUserData({
              isLoggedIn: true,
              role: userRole || null,
            }));
          } else {
            clearTokens();
            dispatch(setUserData({
              isLoggedIn: false,
              role: null,
            }));
          }
        }
      } catch (err) {
        console.error("Auth rehydration failed:", err);
      } finally {
        if (mounted) setAuthReady(true);
      }
    };

    rehydrateAuth();
    return () => {
      mounted = false;
    };
  }, [dispatch]);

  if (!authReady) {
    return (
      <div className="auth-loader" role="status" aria-live="polite">
        <Radar
            speed={1}
            scale={0.5}
            ringCount={10}
            spokeCount={10}
            ringThickness={0.05}
            spokeThickness={0.01}
            sweepSpeed={1}
            sweepWidth={2}
            sweepLobes={1}
            color="#9f29ff"
            backgroundColor="#000000"
            falloff={2}
            brightness={1}
            enableMouseInteraction
            mouseInfluence={0.1}
        />
      </div>
    );
  }

  return children;
}

export default AuthProvider;