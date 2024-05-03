export const selectUserData = (state) => state.auth.user;
export const selectToken = (state) => state.auth.token;
export const selectIsRefreshing = (state) => state.auth.isRefreshing;
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;

export const selectIsError = (state) => state.auth.isError;
export const selectIsLoading = (state) => state.auth.isLoading;
