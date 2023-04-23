const { default: MainContainer } = require("./MainContainer")
const { default: Sidebar } = require("./Sidebar")


const Layout = () => {
    return (
        <div className="layout">
            <Sidebar />
            <MainContainer/>
        </div>
    )
}

export default Layout