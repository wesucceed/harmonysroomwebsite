import c1 from "../../assets/c1.png"
import c2 from "../../assets/c2.png"
import c3 from "../../assets/c3.png"
import HomeCard1 from "./HomeCard1"

const CommunitySection = () => {
    return (
        <div className="CommunitySection">
            <HomeCard1 icon={c1} soon={"hidden"} summary={"Community"}></HomeCard1>
            <HomeCard1 icon={c2} soon={"hidden"} summary={"Mental Health"}></HomeCard1>
            <HomeCard1 icon={c3} soon={"hidden"} summary={"Racial Empowerment"}></HomeCard1>
        </div>
    )
}

export default CommunitySection;