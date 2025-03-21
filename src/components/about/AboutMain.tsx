
import RedStripWithCounter from "./countNumber/RedStripWithCounter"
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
    </div>
  )
}

export default AboutMain