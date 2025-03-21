
import RedStripWithCounter from "./countNumber/RedStripWithCounter"
import OurMission from "./OurMission"
import OurTeam from "./ourTeam/OurTeam"
import Records from "./records/Records"
import Strip from "./Strip"
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
    </div>
  )
}

export default AboutMain