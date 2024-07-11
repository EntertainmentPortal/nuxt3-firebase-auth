export default defineNuxtRouteMiddleware((to, from) => {
  const user = useFirebaseUser();
  const allowedRoutes = ["/", "/login"];
  if (user.value) {
    if (allowedRoutes.includes(to.path)) {
      return navigateTo("/secret");
    }
  } else {
    if (!allowedRoutes.includes(to.path)) {
      return navigateTo("/");
    }
  }
});
