import React, {useState} from "react";

export default function FoundationDetails() {
    const [showSectionFirst, setShowSectionFirst] = useState("block");
    const [showSectionSecond, setShowSectionSecond] = useState("none");
    const [showSectionThird, setShowSectionThird] = useState("none");
    const [borderPageOne, setBorderPageOne] = useState("1px solid black")
    const [borderPageTwo, setBorderPageTwo] = useState("none")
    const [borderPageThree, setBorderPageThree] = useState("none")

    const borderOne = {
        border: borderPageOne
    }
    const borderTwo = {
        border: borderPageTwo
    }
    const borderThree= {
        border: borderPageThree
    }

    const sectionFirstStyle = {
        display: showSectionFirst
    }
    const sectionSecondStyle = {
        display: showSectionSecond
    }
    const sectionThirdStyle = {
        display: showSectionThird
    }

    const firstPageClick = () => {
        setShowSectionFirst("block")
        setShowSectionSecond("none")
        setShowSectionThird("none")
        setBorderPageOne("1px solid black")
        setBorderPageTwo("none")
        setBorderPageThree("none")
    }

    const secondPageClick = () => {
        setShowSectionFirst("none")
        setShowSectionSecond("block")
        setShowSectionThird("none")
        setBorderPageOne("none")
        setBorderPageTwo("1px solid black")
        setBorderPageThree("none")
    }

    const thirdPageClick = () => {
        setShowSectionFirst("none")
        setShowSectionSecond("none")
        setShowSectionThird("block")
        setBorderPageOne("none")
        setBorderPageTwo("none")
        setBorderPageThree("1px solid black")
    }
    return (
        <>
            <p className="textHead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
           <section style={sectionFirstStyle}>
                <div className="detailsDiv">
                    <div>
                        <h3>Fundacja “Dbam o Zdrowie”</h3>
                        <span>Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</span>
                    </div>
                    <p>ubrania, jedzenie, sprzęt AGD, meble, zabawki</p>
                </div>
                <div>
                    <div className="detailsDiv">
                        <div>
                            <h3>Fundacja “Dla dzieci”</h3>
                            <span>Cel i misja: Pomoc dzieciom z ubogich rodzin.</span>
                        </div>
                        <p>ubrania, meble, zabawki</p>
                    </div>
                </div>
                <div>
                    <div className="detailsDiv" id="withoutBorder">
                        <div>
                            <h3>Fundacja “Bez domu”</h3>
                            <span>Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.</span>
                        </div>
                        <p>ubrania, jedzenie, ciepłe koce</p>
                    </div>
                </div>
           </section>

            <section style={sectionSecondStyle}>
                <div className="detailsDiv">
                    <div>
                        <h3>What is Lorem Ipsum?</h3>
                        <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                    </div>
                    <p>It is a long established fact that</p>
                </div>
                <div>
                    <div className="detailsDiv">
                        <div>
                            <h3>Where does it come from?</h3>
                            <span>There are many variations of passages of Lorem Ipsum available</span>
                        </div>
                        <p>Contrary to popular belief</p>
                    </div>
                </div>
                <div>
                    <div className="detailsDiv" id="withoutBorder">
                        <div>
                            <h3>Where can I get some?</h3>
                            <span>Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia</span>
                        </div>
                        <p>The first line of Lorem Ipsum</p>
                    </div>
                </div>
            </section>

            <section style={sectionThirdStyle}>
                <div className="detailsDiv">
                    <div>
                        <h3>Fundacja “Dbam o Zdrowie”</h3>
                        <span>Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</span>
                    </div>
                    <p>ubrania, jedzenie, sprzęt AGD, meble, zabawki</p>
                </div>
                <div>
                    <div className="detailsDiv">
                        <div>
                            <h3>Where does it come from?</h3>
                            <span>Cel i misja: Pomoc dzieciom z ubogich rodzin.</span>
                        </div>
                        <p>ubrania, meble, zabawki</p>
                    </div>
                </div>
                <div>
                    <div className="detailsDiv" id="withoutBorder">
                        <div>
                            <h3>Fundacja “Bez domu”</h3>
                            <span>There are many variations of passages of Lorem Ipsum available</span>
                        </div>
                        <p>ubrania, jedzenie, ciepłe koce</p>
                    </div>
                </div>
            </section>

            <button className="buttonsNumbers" style={borderOne}  onClick={firstPageClick}>1</button>
            <button style={borderTwo} className="buttonsNumbers" onClick={secondPageClick}>2</button>
            <button style={borderThree} className="buttonsNumbers" onClick={thirdPageClick}>3</button>
        </>
    )
}
