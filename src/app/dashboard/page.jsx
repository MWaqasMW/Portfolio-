import NavLink from "@/utils/hooks/useLink"
import "./dashboard.css"
const Dashborad = () => {
    return (
        <div className="main_dashborad">
            <div className="wrapper_inner container">
                <NavLink href="/dashboard/feedback"><h2>FeedBack</h2></NavLink>
                <NavLink href="/dashboard/qurey"><h2>Qurey</h2></NavLink>
            </div>
        </div>
    )
}

export default Dashborad