import Header from "../components/layout/Header";
import SideBar from "../components/layout/SideBar";

export default function About(){
    return (
        <>
            <div className={"bg-base-200"}>
            <Header title={"About"}></Header>
        <div>
            <h1>Under Construction</h1>
        </div>
            <div className={"absolute inset-y-1/3 right-5"}>
                <SideBar></SideBar>
            </div>
            </div>
    </>
    )
}