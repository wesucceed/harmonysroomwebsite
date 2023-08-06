import mo from "../../assets/mo.png"
import ap from "../../assets/ap.png"
import play from "../../assets/play.png"
import HomeCard1 from "./HomeCard1"

const AppSection = () => {
    return (
        <div className="AppSection">
            <HomeCard1 icon={play} soon={""} summary={"Download from Google Play"}></HomeCard1>
            <HomeCard1 icon={ap} soon={""} summary={"Download from App Store"}></HomeCard1>
            <HomeCard1 icon={mo} soon={""} summary={"Download from Microsoft Store"}></HomeCard1>
        </div>
    )
}

export default AppSection;