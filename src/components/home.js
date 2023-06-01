import {Fragment} from "react";
import {Link, Outlet} from "react-router-dom";
const Home = () => {
    return (
        <Fragment>
            <h1>Đây là home page</h1>
            <div>
                <nav>
                    <li>
                        <Link to="/todo">TODO</Link>
                    </li>
                    <li>
                        <Link to="/create">CreateTodo</Link>
                    </li>
                </nav>
            </div>
            <Outlet/>
        </Fragment>
    )

}
export default Home;