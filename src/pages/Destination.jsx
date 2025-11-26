import { useSearchParams } from "react-router"
//the default page for destinations is the Moon 
export default function Destination(){
    const [searchParams] = useSearchParams()
    console.log(searchParams)

    return (
        <div className="destination-div">
            <h1>Destination Page!</h1>
        </div>
       
    )
}