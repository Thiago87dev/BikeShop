import CanWeHelpYou from "./canWeHelpYou/CanWeHelpYou"
import GetinTouch from "./getInTouch/GetinTouch"
import IfYouNeed from "./ifYouNeed/IfYouNeed"

const ContactMain = () => {
  return (
    <div>
        <GetinTouch/>
        <CanWeHelpYou/>
        <IfYouNeed/>
    </div>
  )
}

export default ContactMain