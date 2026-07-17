import React from "react";
import { useNavigate } from "react-router-dom";
import "./AdminDashboard.css";
import { useAdmin } from "../../Context/AdminContext";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const {admin} = useAdmin()

  return (
    <div className="admin-dashboard">

      {/* Top Right Button */}
      <div className="top-actions">
        {admin ? (
          <button
            className="login-btn"
            onClick={() => navigate("/admin")}
          >
            {admin.name}
          </button>
        ) : (
          <button
            className="login-btn"
            onClick={() => navigate("/admin/login")}
          >
            Admin Login
          </button>
        )}
      </div>

      <div className="dashboard-content">

        {admin && (
          <h1 className="welcome-text">
            Welcome, <span>{admin.name}</span>
          </h1>
        )}

        <p className="dashboard-subtitle">
          Manage requests submitted by event organizers and performers.
        </p>

        <div className="dashboard-grid">

          <div className="dashboard-card">
            <h2>EVENT REQUESTS</h2>

            <p>
              Review, approve or reject event requests submitted by event
              organizers.
            </p>

            <button
              className="card-btn"
              onClick={() => navigate("/admin/events")}
            >
              View Requests
            </button>
          </div>

          <div className="dashboard-card">
            <h2>PERFORMER REQUESTS</h2>

            <p>
              Verify performer registrations and approve or reject their
              applications.
            </p>

            <button
              className="card-btn"
              onClick={() => navigate("/admin/performers")}
            >
              View Requests
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};

export default AdminDashboard;