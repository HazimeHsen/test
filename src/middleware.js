import { NextResponse } from "next/server";
import { i18nRouter } from "next-i18n-router";
import i18nConfig from "../i18nConfig";

export function middleware(request) {
  const url = request.nextUrl.clone();

  // Check if there is a subdomain and remove it
  const hostnameParts = url.hostname.split(".");
  if (hostnameParts.length > 2) {
    // Remove the subdomain
    hostnameParts.shift();
    url.hostname = hostnameParts.join(".");
  }

  // Forward the request to i18nRouter
  request.nextUrl = url;
  return i18nRouter(request, i18nConfig);
}

export const config = {
  matcher: "/((?!api|static|.*\\..*|_next).*)",
};
