import "./Intro.css"
import headshot from "../../img/CroppedHeadshot.jpg"


const Intro = () => {
    const interests =  ["C++", "React", "Unreal Engine", "Node", "Python", "SQL"];

    return (
        <div className="i">
            <div className='i-left'>
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hello, I'm</h2>
                    <h1 className="i-name">Ziv Weissman</h1>
                    {/* <h3 className="i-skill-label">Skills:</h3> */}
                    <ul className="i-title">
                    <li className="i-title-start"></li>
                    <li className="i-title-wrapper">
                             {
                               
                               interests.map((interest) => {
                                    return (
                                        <div className="i-title-item">{` ${interest}`}</div>
                                    )
                                    })
                            }
                    </li>
                    <li className="i-title-start"></li>
                    </ul>
                    <br></br>
                    <div className="i-desc">
                        <p>I am Student at UC Santa Barbara's College of Creative Studies Honors Program studying CS.</p>
                    </div>
                </div>
            </div>
            <div className='i-right'>
                <div className="i-bg"></div>
                <img src={headshot} alt="" className="i-img" />
            </div>
        </div>
    )
}

export default Intro;