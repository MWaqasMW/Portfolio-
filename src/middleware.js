import { NextResponse } from "next/server";

export default function middleware(request) {
  const path = request.nextUrl.pathname;
  const token = request.cookies.get("token")?.value;
  console.log("token", token);
  const isLoggedIn = !!token;

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

  if (path === "/" && !isLoggedIn) {
    return NextResponse.next();
  }

  if (isLoggedIn && isPublicPath) {
    return NextResponse.redirect(new URL("/dashboard", request.nextUrl));
  }

  if (!isLoggedIn && isPrivatePath) {
    return NextResponse.redirect(new URL("/login", request.nextUrl));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/dashboard", "/login", "/signup"],
};
