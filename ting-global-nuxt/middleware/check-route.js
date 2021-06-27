export default ({ store, route, redirect }) => {
    const { requiresAuth, forLoggingIn, forOrganizations } = route.meta[0] || {};
    const { isAuth, user } = store.getters;
    if (requiresAuth && !isAuth) {
        redirect("/login");
    } else if (forLoggingIn && isAuth) {
        redirect("/dashboard");
    } else if (forOrganizations && user?.accountType === "individual") {
        redirect("/");
    }
};
