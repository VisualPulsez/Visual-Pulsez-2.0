import { NextResponse } from "next/server";

export function middleware(req: { cookies: { get: (arg0: string) => any; }; nextUrl: { pathname: string; }; url: string | URL | undefined; }) {
  const token = req.cookies.get("token");

  if (!token && req.nextUrl.pathname !== "/signin" && req.nextUrl.pathname !== "/signup") {
    return NextResponse.redirect(new URL("/signin", req.url));
  }

  return NextResponse.next();
}
