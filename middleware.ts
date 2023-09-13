import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ["/dashboard", "/api/webhook"],
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
