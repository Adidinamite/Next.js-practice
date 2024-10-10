import "./InfoSection.css";

const InfoSection = () => {
    return (
        <div className="infoSectionContainer">
            <h2>
                How does it work?
            </h2>
            <div className="infoStepContainer">
                <div className="infoStep">
                    <h3>
                        Step 1
                    </h3>
                    <p>
                        Select some ingredients from your fridge.
                    </p>
                </div>
                <div className="infoStep">
                    <h3>
                        Step 2
                    </h3>
                    <p>
                        Once you're ready with the ingredients, FridgeQuest will provide you with some great recipes!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default InfoSection;
