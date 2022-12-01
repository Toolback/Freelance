import Image from "next/image"
import Link from "next/link"
import HeroImg from "../img/HeroImg.png"
import HeroImg3 from "../img/HeroImg3.png"

export const Hero = () => {
  const heroImg = HeroImg
  return (
    <div className="hero-container md:mt-40 md:flex justify-center md:items-center gap-40">
      <div className="hero-right md:hidden">
        <Image src={HeroImg3} alt=""/>
      </div>
      <div className="hero-left mt-5 md:mt-20  ">
        <h2 className="text-white text-5xl">Earn Passive<br />Yield and Trading <br />Optimisation Income</h2>
        <span className="text-white">Earn rewards for directing liquidity and maximising yields on stablecoins and <br />other crypto assets managed by the Protocol.</span>
        <div className="mb-5 hero-cta flex justify-center gap-10 mt-8 text-white">
          <button type="button" className="flex rounded px-3 py-2 bg-gradient-to-r from-pink-400 to-indigo-500 hover:from-pink-500 hover:to-purple-500" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
            <Link href="invest">
            Invest
            </Link>
          </button>
          <button>
          <Link href="more">
            More
            </Link>
          </button>
        </div>
      </div>
      <div className="hero-right hidden md:flex">
        <Image src={HeroImg3} alt=""/>
      </div>

    </div>
  )
}