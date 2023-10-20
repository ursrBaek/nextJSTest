import Link from "next/link";

import style from './style.module.css'
// import { getCurrentWeather } from "./utils/getCurrentWeather";
// import RevalidateButton from "./components/RevalidateButton";



export default async function Home() {
  // const res = await getCurrentWeather('Seoul');

  return (
    <>
      <h1>날씨 앱</h1>
      <ul className={style.list}>
        <li>
          <Link href='/seoul?name=서울'>서울</Link>
          {/* <span>{res.current.condition.text}</span> */}
        </li>
        <li><Link href='/NYC?name=뉴욕'>뉴욕</Link></li>
        <li><Link href='/london?name=런던'>런던</Link></li>
      </ul>

      {/* <RevalidateButton tag={'weather'} /> */}
    </>
  )
}
