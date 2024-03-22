export function login(
  state = { isLoggedIn: false, user: null, authToken: null },
  action
) {
  if (action.type === "Auth/userLogin") {
    const { access_token } = action.payload || {};
    return {
      ...state,
      isLoggedIn: true,
      user: null,
      authToken: access_token || null,
    };
  }
  return state;
}

export function logout(
  state = { isLoggedIn: false, user: null, authToken: null },
  action
) {
  if (action.type === "Auth/userLogout") {
    return {
      ...state,
      isLoggedIn: false,
      user: null,
      authToken: null,
    };
  }
  return state;
}
