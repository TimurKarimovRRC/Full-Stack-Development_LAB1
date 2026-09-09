import { Header } from "./components/Header";
import { EmployeeDirectory } from "./components/EmployeeDirectory";
import { Footer } from "./components/Footer";
import "./App.css";

export function App() {
    return (
        <>
            <Header />
            <EmployeeDirectory />
            <Footer />
        </>
    );
}