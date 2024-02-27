import { NextResponse } from "next/server";

export default function middleware(request) {
  const path = request.nextUrl.pathname;
  const token = request.cookies.get("token")?.value || "";
  console.log("token----------", token);

  // Determine if the user is logged in
  const isLoggedIn = !!token;

  // Define public and private routes
  const isPublicPath =
    path === "/" ||
    path === "/login" ||
    path === "/home" ||
    path === "/work" ||
    path === "/about";
  const isPrivatePath =
    path === "/" ||
    path === "/dashboard" ||
    path === "/home" ||
    path === "/work" ||
    path === "/about";

  // Redirect users to the root page ("/") on their first visit
  if (path === "/" && !isLoggedIn) {
    return NextResponse.next();
  }

  // Redirect logged-in users from public routes to the dashboard
  if (isLoggedIn && isPublicPath) {
    return NextResponse.redirect(new URL("/dashboard", request.nextUrl));
  }

  // Redirect logged-out users from private routes to the login page
  if (!isLoggedIn && isPrivatePath) {
    return NextResponse.redirect(new URL("/login", request.nextUrl));
  }

  // Allow access to all other routes
  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/dashboard", "/login", "/signup"],
};
