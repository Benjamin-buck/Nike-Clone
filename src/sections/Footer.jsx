import { footerLogo } from "../assets/images"
import { footerLinks, socialMedia } from "../constants"

const Footer = () => {
  return (
    <footer className="max-conatiner">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col"></div>
        <div className="flex flex-col items-start">
          <a href="/"><img src={footerLogo} alt="" width={150} height={45} /></a>
          <p className="text-base mt-6 leading-7 font-montserrat text-white-400 sm:max-w-sm">Get shoes ready for the new term at your nearest Nike store. Find your perfect size in store. Get rewards</p>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((icon) => (
              <div key={icon.alt} className="flex justify-center items-center w-12 h-12 bg-white rounded-full">
                <img src={icon.src} alt={icon.alt} width={24} height={24} />
              </div>
            ))}
          </div>
          <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
            {/* {footerLinks.map((section) => (
              <div></div>
            ))} */}
          </div>
        </div>
    </footer>
  )
}

export default Footer