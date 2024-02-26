import { NextResponse } from "next/server";

export default function middleware(request) {
  const path = request.nextUrl.pathname;

  const isPublicPath =
    path === "/" ||
    path === "/login" ||
    path === "/home" ||
    path === "/work" ||
    path === "/about";
  const isPrivatePath = !isPublicPath;

  const token = request.cookies.get("token")?.value || "";
  console.log("token----------", token);

  // If user is visiting for the first time or trying to access public routes
  if (!token || isPublicPath) {
    return NextResponse.next();
  }

  // If user is logged in and trying to access private routes
  if (isPrivatePath) {
    return NextResponse.next();
  }

  // If user is logged in and trying to access dashboard or other routes
  return NextResponse.redirect(new URL("/dashboard", request.nextUrl));
}

export const config = {
  matcher: ["/", "/dashboard", "/login", "/signup"],
};
