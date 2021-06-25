export default ({ store, route }) => {
    const { requiresAuth, forLoggingIn, forOrganizations } = route.meta;
    const { isAuth, user } = store.getters;
    if (requiresAuth && !isAuth) {
        context.redirect("/login");
    } else if (forLoggingIn && isAuth) {
        context.redirect("/dashboard");
    } else if (forOrganizations && user?.accountType === "individual") {
        context.redirect("/");
    }
};
