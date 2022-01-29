import { Outlet } from 'remix'

function Archive () {
    return (
        <div>
        <h1 className='text-center'>Archive</h1>
        <Outlet />
        </div>
    )
}

export default Archive