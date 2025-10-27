import Heart from "../assets/Heart.json"
import Lottie from "lottie-react"

export default function Heartanim({ClassName}){
    return(
        <>
            <Lottie animationData={Heart} autoPlay={true} loop={true}/>
        </>
    )
}