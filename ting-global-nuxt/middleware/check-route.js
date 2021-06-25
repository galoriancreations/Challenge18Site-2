export const forLoggingIn = ["login", "register", "membership"];
export const protect = ["dashboard"];
export const forOrganizations = [];

export default context => {
    const { store, route: { name } } = context;
    const { isAuth, user } = store.getters;
    if (protect.includes(name) && !isAuth) {
        context.redirect("/login");
    } else if (forLoggingIn.includes(name) && isAuth) {
        context.redirect("/dashboard");
    } else if (forOrganizations.includes(name) && user?.accountType === "individual") {
        context.redirect("/");
    }
}
