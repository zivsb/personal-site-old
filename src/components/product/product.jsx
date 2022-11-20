import React, { Component } from "react";
import "./product.css"





class Product extends Component {

    constructor ({ name, description, link, img, viewMessage = "Open Seperately" }) {
        super();
        this.state = { name, description, link, img, onFront: true, viewMessage
        };
    }

    convertDescription = (message) => {
        if(!message.includes("{t}")) return (<p>{this.state.description}</p>);
        const split1 = message.split("{t}");
        const split2 = split1[1].split("{n}");
        return(
            <div className="description">
                <p>{split1[0]}</p>
                <ul>
                    {
                        split2.map(item => 
                            <li>{item}</li>
                        )
                    }
                </ul>
            </div>
        )
    }

    

    toggle = () => {
        this.setState({ onFront: !this.state.onFront});
    }

    get front() {
        return (
            <div className="front" onClick={this.toggle}>
                <h1>{this.state.name}</h1>
                <img src={require(`../productList/img/${this.state.img}`)} alt="" className="p-img"/>
                <p className="clickable">View More</p>
            </div>
        )
    }

    get back() {
        return (
            <div className="back" onClick={this.toggle}>
                {this.convertDescription(this.state.description)}
                <a href={this.state.link} target="_blank" rel="noreferrer"><p id="clickable">{this.state.viewMessage}</p></a>
                <p className="clickable" onClick={this.toggle}>View Less</p>
            </div>
        )
    }

    get display() {
        if(this.state.name === "stub") return (
            <div className="stub"><h1>More on the Way . . .</h1></div>
        )
        if(this.state.onFront){
            return (this.front)
        }
        return (this.back);
    };

    render() {
        return (<div className="p">
            <div className="p-browser">
                {/* <div className="p-circle"></div>
                <div className="p-circle"></div>
                <div className="p-circle"></div> */}
            </div>
            {this.display}
        </div>);
    }
}

// class Product extends Component {
//     state = { onFront: true };
// }

export default Product