
import RedStripWithCounter from "./countNumber/RedStripWithCounter"
import GetWeeklyTips from "./getWeeklyTips/GetWeeklyTips"
import OurMission from "./OurMission"
import OurTeam from "./ourTeam/OurTeam"
import Records from "./records/Records"
import Strip from "./Strip"
import Testimonials from "./testimonials/Testimonials"
import TopBrands from "./topBrands/TopBrands"

const AboutMain = () => {
  return (
    <div>
      <Strip/>
      <Records/>
      <RedStripWithCounter/>
      <OurMission/>
      <OurTeam/>
      <TopBrands/>
      <Testimonials/>
      <GetWeeklyTips/>
    </div>
  )
}

export default AboutMain