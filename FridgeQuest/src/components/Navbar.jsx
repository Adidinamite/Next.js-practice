import "./Navbar.css";

const Navbar = () => {
    return (
        <nav>
            <div className="navbarContainer">
                <a href="#" className="logo">FridgeQuest</a>
                <ul className="navbarItems">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Recipes</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
