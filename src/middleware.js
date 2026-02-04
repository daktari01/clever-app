import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublic = createRouteMatcher(["/", "/sign-in(.*)", "/sign-up(.*)"]);
const isProtected = createRouteMatcher(["/dashboard(.*)"]);

export default clerkMiddleware(async (auth, req) => {
  if (isProtected(req)) {
    await auth.protect();  // This auto-redirects to sign-in if not authenticated
  }

  // Optional: Redirect signed-in users away from auth pages
  if (!isPublic(req) && auth().userId) {
    return Response.redirect(new URL("/dashboard", req.url));
  }
});

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico).*)",
    "/(api|trpc)(.*)",
  ],
};