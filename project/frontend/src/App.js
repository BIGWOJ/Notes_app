import {
    HashRouter as Router,
    Route,
    Routes
} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Notes_List_Page from './pages/Notes_List_Page';
import Note_Page from './pages/Note_Page';


function App() {
    return (
        <Router>
            <div className="container dark">
                <div className='app'>
                <Header />
                    <Routes>
                        <Route path='/' exact element={<Notes_List_Page />} />

                        <Route path='notes/:id' exact element={<Note_Page />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
