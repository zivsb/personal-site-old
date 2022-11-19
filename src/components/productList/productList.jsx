import "./productList.css"
import Product from "../product/product"

const ProductList = () => {
    const products = [
        {
            name: "Accessible Videogames Papers",
            description: "Used Unreal Engine 4 to create a FPS and a Walking Simmulator for quadriplegic individuals by utillizing my research partners facial recognition software and a voice recognition script I wrote utillizing Google's AI.{t}Awarded first place prize at CHI2021 (international conference) Student Game Competition {n}Published in Frontier's in Computer Science{n}Presented at Augemented Humans Conference",
            link: "https://doi.org/10.3389/fcomp.2021.751455",
            img: "fps.png",
            viewMessage: "Full Paper"

        },
        {
            name: "Blockchain from Scratch",
            description: "Programmed a Bitcoin Copy from scratch on Node.js. Awesome learning project to gain insight on backend dev, computer networks, security, and Cryptography.",
            link: "https://github.com/zivsb",
            img: "Zivcoin.png",
            viewMessage: "View Github Repo"

        },
        {
            name: "C++ Labs",
            description: "A collection of some of the more complex Labs I've coded in C++ for coursework. Beyond comfortabillity in C++, these demonstrate problem solving skills and general theoritical CS knowledge I've gained through my classes.",
            link: "https://github.com/zivsb",
            img: "CppLab.png",
            viewMessage: "My Github"

        },
        {
            name: "This Site!",
            description: "Made this minimal site for fun in my free time with React. I hope you're enjoying checking it out.",
            link: "https://github.com/zivsb",
            img: "WebDev.png",
            viewMessage: "View Sourcecode"

        },
        {
            name: "Distraction Blocker Chrome Extension",
            description: "Started Web Dev journey with this simple but useful chrome extension that blocks distractions on YouTube. Don't mind the typos on the store front.",
            link: "https://chrome.google.com/webstore/detail/youtube-distraction-block/bebhefcdgigdmaalghmfldlpnlihgagh",
            img: "DB.png",
            viewMessage: "View Store Page"

        },
        {
            name: "stub"
        }
    ];
    return (
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title">Notable Work</h1>
                <p className="pl-desc">
                    Some of what's beyond my transcripts:
                </p>
            </div>
            <div className="pl-list">
                {
                    products.map(product => {
                        return (
                            <Product name={product.name} description={product.description} link={product.link} img={product.img} viewMessage={product.viewMessage}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ProductList