import { OrgSideBar } from "./_components/org-sideBar";
import { Sidebar } from "./_components/sidebar";
import { NavBar } from "./_components/navBar";

interface DashboardLayoutProps {
    children: React.ReactNode;
}
const DashboardLayout =({
    children,
}: DashboardLayoutProps) => {
    return (
        <main className="h-full" >
            <Sidebar/>
            <div className= " pl-[60px]  h-full" >
                <div className="flex gap-x-3 h-full" >
                    <OrgSideBar/>
                    <div className="h-full flex-1" >
                        <NavBar/> 
            {children}
                    </div>
                </div>
            </div>
        </main>
    )
}
export default DashboardLayout;
    