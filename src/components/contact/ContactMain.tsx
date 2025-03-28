import CanWeHelpYou from "./canWeHelpYou/CanWeHelpYou"
import GetinTouch from "./getInTouch/GetinTouch"
import IfYouNeed from "./ifYouNeed/IfYouNeed"
import Map from "./map/Map"

const ContactMain = () => {
  return (
    <div>
        <GetinTouch/>
        <CanWeHelpYou/>
        <IfYouNeed/>
        <Map/>
    </div>
  )
}

export default ContactMain