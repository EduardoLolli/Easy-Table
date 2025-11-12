import React, { useState } from "react";
import WellcomeModal from "../../components/wellcome-modal";

const Home: React.FC = () => {
    const [currentScreen, setCurrentScreen] = useState("wellcome");

    return (
        <div>

            {currentScreen === "wellcome" ? <WellcomeModal onStart={() => setCurrentScreen("setup")}></WellcomeModal> : null}
            {currentScreen === "setup" ? <SetupModal onStart={() => setCurrentScreen("setup")}></SetupModal> : null}
            {currentScreen === "table" ? <TableLayout onStart={() => setCurrentScreen("setup")}></TableLayout> : null}


            <h1>Welcome to the Home Page</h1>

        </div>
    );
}
export default Home;