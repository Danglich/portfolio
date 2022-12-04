import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Project from './pages/Projects';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/portfolio" element={<Project />} />
                    <Route path="/contact" element={<Contact />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
