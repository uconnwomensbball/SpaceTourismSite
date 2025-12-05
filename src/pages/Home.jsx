import { Link } from "react-router-dom"

export default function Home(){

    return (
        <div className="home-div">
            <div>
                <p className = "light-blue-text">SO, YOU WANT TO TRAVEL TO SPACE</p>
                <h1 className = "white-text">SPACE</h1>
                <p className = "light-blue-text">
                Let's face it: if you want to go to space,
                you might as well genuinely go to outer space
                and not hover kind of on the edge of it. Well
                sit back, and relax because we'll give you a
                truly out of this world experience!</p>
            </div>
            <Link to="/destination/" className="explore-btn dark-blue-text">EXPLORE</Link>
        </div>
    )
}