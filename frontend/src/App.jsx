import { Routes, Route } from "react-router";

import AppLayout from "./components/layout/AppLayout";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import MyRequests from "./pages/MyRequests";
import NewRequest from "./pages/NewRequest";

function App() {
  return (
    <Routes>
      <Route path="login" element={<LoginPage />} />
      <Route element={<AppLayout />}>
        <Route index element={<Dashboard />}></Route>
        <Route path="my-requests" element={<MyRequests />}></Route>
        <Route path="new-request" element={<NewRequest />}></Route>
      </Route>
    </Routes>
  );
}
export default App;
