import {
  FaBars,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
  FaTimes,
} from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

import { useRouter } from "next/router";
import { useState, useEffect } from "react";

import { decode } from "jsonwebtoken";

export default function Header({ ham, isLogin, balance, showBalance }) {
  const [mail, setMail] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (isLogin) {
      const token = getCookie("token");
      const decoded = decode(token);  
      setMail(decoded.id);
    }

  }, [isLogin]);

  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  
  return (
    <>
      {/*  >>>>>>>>>>>>>>>>>>>>>>> HEADER <<<<<<<<<<<<<<<<<<<<<<<  */}
      <header>
        <nav>


              <div className="flex-r gap-15">
                <div
                  className="flex-c ham"
                  onClick={(e) => {
                    document.getElementById("ham-menu").style.display = "block";
                  }}
                >
                  <span className="line"></span>
                  <span className="line"></span>
                  <span className="line"></span>
                </div>

                <div id="ham-menu" className="flex-c ham-menu" style={{ display : "none"}}>
                  <span
                    onClick={(e) => {
                      document.getElementById("ham-menu").style.display =
                        "none";
                    }}
                  >
                    {" "}
                    <FaTimes />{" "}
                  </span>
                  <div className="flex-c ham-profile">
                    <Image
                      src={"/media/male-user-avatar.png"}
                      width={71}
                      height={71}
                      alt="User avatar"
                    />
                    <span>Welcome!</span>
                    <span className="sm-text" > { isLogin ? ( <> {mail} </> ) : (<> GUEST </>)} </span>
                    <span>Play Quiz & earn coins</span>

                    {/* For Login Logout Button */}
                    {!isLogin ? (
                      <>
                        <button
                          className="or-btn"
                          onClick={(e) => {
                            document.getElementById("ham-menu").style.display =
                              "none";
                            router.push("/login");
                          }}
                        >
                          SIGN IN
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          className="or-btn"
                          onClick={(e) => { 
                            document.getElementById("ham-menu").style.display = "none";
                            document.cookie = "token=; path=/;";
                            document.cookie = "balance=200; path=/;";
                            router.push("/");
                          }}
                        >
                          LOGOUT
                        </button>
                      </>
                    )}
                  </div>

                  <div className="flex-c ham-list">
                    <div className="flex-r">
                      <Link href="/contest-rule">
                        <a>
                          <Image
                            src={"/media/contest-rules.svg"}
                            width={23.33}
                            height={21}
                            alt="Contest Rules"
                          />
                          <span className="sh-text">Contest Rules</span>
                        </a>
                      </Link>
                    </div>

                    <div className="flex-r">
                      <Link href="/about-us">
                        <a>
                        <Image
                          src={"/media/about-us.svg"}
                          width={21}
                          height={21}
                          alt="About Us"
                        />
                        <span className="sh-text"> About Us</span>
                        </a>
                      </Link>
                    </div>
                    <div className="flex-r">
                      <Link href="/contact-us">
                      <a>
                        <Image
                          src={"/media/contact-us.svg"}
                          width={21}
                          height={21}
                          alt="Contact Us"
                        />
                        <span className="sh-text">Contact Us</span>
                        </a>
                      </Link>
                    </div>
                  </div>

                  <div className="ham-social">
                    <h1>Connect with us</h1>
                    <div className="flex-r ham-icon">
                      <Link href="/">
                        <a>
                          <FaFacebookF />
                        </a>
                      </Link>
                      <Link href="/">
                        <a>
                          <FaTwitter />
                        </a>
                      </Link>
                      <Link href="/">
                        <a>
                          <FaInstagram />
                        </a>
                      </Link>
                      <Link href="/">
                        <a>
                          <FaPinterestP />
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>

                <Link href="/">
                  <a>
                    <Image
                      className="nav-logo"
                      src={"/media/logo.png"}
                      width={132}
                      height={27}
                      alt={"Quizzy"}
                    />
                  </a>
                </Link>
              </div>
              {showBalance ? (
                <div className="flex-r coin-wallet">
                  <Image
                    src={"/media/coin-icon.png"}
                    width={24}
                    height={24}
                    alt="coin"
                  />
                  <span className="wh-text"> {balance} </span>
                </div>
              ) : (
                <> </>
              )}

        </nav>
      </header>
    </>
  );
}
