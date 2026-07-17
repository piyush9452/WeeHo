import { createContext, useContext, useEffect, useState } from "react";

const AdminContext = createContext();

export const AdminProvider = ({ children }) => {

    const [admin, setAdmin] = useState(null);
    const [token, setToken] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const savedAdmin = localStorage.getItem("admin");
        const savedToken = localStorage.getItem("adminToken");

        if (savedAdmin && savedToken) {

            setAdmin(JSON.parse(savedAdmin));
            setToken(savedToken);

        }

        setLoading(false);

    }, []);

    const loginAdmin = (adminData, jwtToken) => {

        setAdmin(adminData);
        setToken(jwtToken);

        localStorage.setItem(
            "admin",
            JSON.stringify(adminData)
        );

        localStorage.setItem(
            "adminToken",
            jwtToken
        );

    };

    const logoutAdmin = () => {

        setAdmin(null);
        setToken(null);

        localStorage.removeItem("admin");
        localStorage.removeItem("adminToken");

    };

    return (

        <AdminContext.Provider
            value={{
                admin,
                token,
                loading,
                loginAdmin,
                logoutAdmin
            }}
        >

            {children}

        </AdminContext.Provider>

    );

};

export const useAdmin = () => useContext(AdminContext);