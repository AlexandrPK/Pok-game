import { useState } from "react";
import GamePage from "./routes/Game/index.js";
import HomePage from "./routes/Home/index.js";

const App = () => {
    const [page, setPage] = useState('App');
    const handleChangePage = (page) => {
        setPage(page)
    }

    
    switch (page) {
        case 'home':
            return <HomePage onChangePage={handleChangePage} />;

        case 'game':
            return <GamePage onChangePage={handleChangePage}/>;

        default:
            return <HomePage onChangePage={handleChangePage}/>
    }
};

export default App;