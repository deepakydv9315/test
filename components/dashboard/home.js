import { FaUserFriends, FaTrophy, FaPlus } from 'react-icons/fa';

import { router, useRouter } from 'next/router';

import Link from "next/link";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <section className="mobile dashboard">
        <div className="flex-c num-wrapper">
          <div className="flex-c num-box">
            <span>Total Players</span>
            <span>100</span>
          </div>
          <div className="flex-c num-box">
            <span>Total Players</span>
            <span>100</span>
          </div>
        </div>

        <div className="flex-c sh-wrapper">
          <div className="flex-r sh-box">
            <span className="flex-r sh-icon">
              <FaUserFriends />
            </span>
            <Link href="/dashboard/users" ><span className="sh-text">SHOW USERS</span></Link>
            {/* onClick={ router.push("/users") } */}
          </div>

          <div className="flex-r sh-box">
            <span className="flex-r sh-icon">
              <FaTrophy />
            </span>
            <Link href="/dashboard/contestList" ><span className="sh-text">CONTEST</span></Link>
            {/* onClick={ router.push("/contest") } */}
          </div>

          <div className="flex-r sh-box">
            <span className="flex-r sh-icon">
              <FaPlus />

            </span>
            <Link href="/dashboard/contest" ><span className="sh-text">ADD CONTEST</span></Link>
            {/* onClick={ useRouter.push("/addContest")} */}
          </div>
        </div>

      </section>
    </>
  );
}
