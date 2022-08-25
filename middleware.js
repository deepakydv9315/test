import * as jose from "jose";
import { NextRequest, NextResponse } from "next/server";

export default async function middleware(req, res) {
  if (req.url.includes("/dashboard")) {
    const data = {
      secretKey: "secretKey",
      token: req.cookies.get("token"),
      url: req.url,
    };

    if (data.token) {
      try {
        const { payload: token } = await jose.jwtVerify(
          data.token,
          new TextEncoder().encode(`secretKey`)
        );

        // console.log(token.name);
        if (token.code === "ERR_JWT_EXPIRED") {
          // Delete Cookie which name is token
          // NextResponse.cookies.delete("token");
          res.setHeader("Set-Cookie", [
            serialize("token", "", {
              maxAge: -1,
              path: "/",
            }),
          ]);

          return NextResponse.rewrite(new URL("/login", req.url));
        } else if (token.id.includes("shivamdwivedi024")) {
          return NextResponse.next();
        } else if (token) {
          return NextResponse.rewrite(new URL("/", req.url));
        } else {
          // res.cookies.delete("token");
          res.setHeader("Set-Cookie", [
            serialize("token", "", {
              maxAge: -1,
              path: "/",
            }),
          ]);

          return NextResponse.rewrite(new URL("/login", req.url));
        }

        // jwtData.uid => `your-data`
      } catch (error) {
        console.log(error);

        // NextResponse.cookies.delete("token");
        // JWT validation failed or token is invalid

        return NextResponse.rewrite(new URL("/login", req.url));
      }
    } else {
      // res.clearCookie("token");

      return NextResponse.rewrite(new URL("/login", req.url));
    }
  }

}

/* export const config = {
  matcher: ["/", "/dashboard"],
}; */