import { dbPut, dbGet, dbDelete } from "./Index.js";

// --- Save tokens + role after login ---
// Expected response shape from backend:
// { access: "...", refresh: "...", role: "admin" | "user" | ... }

export async function saveTokens(accessToken, refreshToken, role) {
  await dbPut("tokens", { type: "access",  token: accessToken,  role });
  await dbPut("tokens", { type: "refresh", token: refreshToken, role });
  return { success: true };
}

// --- Read individual values ---

export async function getAccessToken() {
  const record = await dbGet("tokens", "access");
  return record?.token ?? null;
}

export async function getRefreshToken() {
  const record = await dbGet("tokens", "refresh");
  return record?.token ?? null;
}

export async function getRole() {
  const record = await dbGet("tokens", "access");
  return record?.role ?? null;
}

// Convenience: get everything in one call
export async function getAuthData() {
  const record = await dbGet("tokens", "access");
  return {
    accessToken:  record?.token ?? null,
    role:         record?.role  ?? null,
    isLoggedIn:   !!record?.token,
  };
}

// --- Clear on logout ---

export async function clearTokens() {
  await dbDelete("tokens", "access");
  await dbDelete("tokens", "refresh");
}