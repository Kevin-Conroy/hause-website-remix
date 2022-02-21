import { Outlet } from 'remix'

function News () {
    return (
        <div>
        <h1>News</h1>
        <Outlet />
        </div>
    )
}

export default News