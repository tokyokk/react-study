import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import Layout from "./components/Layout";
import AuthPage from "./pages/AuthPage";
import NeedAuth from "./components/NeedAuth";
import useAutoLogout from "./hooks/useAutoLogout";
import StudentList from "./components/StudentList/StudentList";

const App = () => {

    useAutoLogout()

    return (
        <div>
            <Layout>
                <Routes>
                    <Route path="/" element={<HomePage />}></Route>
                    <Route path="/profile" element={
                        <NeedAuth>
                            <ProfilePage />
                        </NeedAuth>
                    }></Route>
                    <Route path="/auth-form" element={<AuthPage />}></Route>
                    <Route path="/student" element={
                        <NeedAuth>
                            <StudentList />
                        </NeedAuth>
                    }></Route>
                </Routes>
            </Layout>
        </div>
    );
};

export default App;
