import React, { useEffect, useState } from "react";
import axios from "axios";
import "./EventRequests.css";

const API_URL = "http://localhost:5000/events/getEvents";

const EventRequests = () => {

    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);

    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const [search, setSearch] = useState("");
    const [status, setStatus] = useState("ALL");
    const [sort, setSort] = useState("NEWEST");

    const limit = 10;

    const fetchEvents = async () => {

        try {

            setLoading(true);

            const response = await axios.get(API_URL, {
                params: {
                    page,
                    limit,
                    search,
                    status,
                    sort
                }
            });

            setEvents(response.data.events);
            setTotalPages(response.data.totalPages);

        }
        catch (err) {
            console.log(err);
        }
        finally {
            setLoading(false);
        }

    };

    useEffect(() => {

        const timer = setTimeout(() => {
            fetchEvents();
        }, 400);

        return () => clearTimeout(timer);

    }, [page, status, sort, search]);

    const approveEvent = async (id) => {

        try {

            await axios.put(
                `http://localhost:5000/admin/updateEventStatus/${id}`,
                {
                    status: "CONFIRMED"
                }
            );

            fetchEvents();

        }
        catch (err) {
            console.log(err);
        }

    };

    const cancelEvent = async (id) => {

        try {

            await axios.put(
                `http://localhost:5000/admin/updateEventStatus/${id}`,
                {
                    status: "CANCELLED"
                }
            );

            fetchEvents();

        }
        catch (err) {
            console.log(err);
        }

    };

    return (

        <div className="event-page">

            <h1 className="page-title">
                EVENT REQUESTS
            </h1>

            <p className="page-subtitle">
                Review and manage event requests submitted by organizers.
            </p>

            {/* Filter Bar */}

            <div className="filter-bar">

                <input
                    type="text"
                    placeholder="Search organization..."
                    value={search}
                    onChange={(e) => {

                        setSearch(e.target.value);
                        setPage(1);

                    }}
                />

                <select
                    value={status}
                    onChange={(e) => {

                        setStatus(e.target.value);
                        setPage(1);

                    }}
                >
                    <option value="ALL">All Status</option>
                    <option value="PENDING">Pending</option>
                    <option value="CONFIRMED">Confirmed</option>
                    <option value="CANCELLED">Cancelled</option>
                </select>

                <select
                    value={sort}
                    onChange={(e) => {

                        setSort(e.target.value);
                        setPage(1);

                    }}
                >
                    <option value="NEWEST">Newest First</option>
                    <option value="OLDEST">Oldest First</option>
                    <option value="AZ">Organization A-Z</option>
                </select>

            </div>

            {/* Cards */}

            {
                loading ?

                    <div className="empty-state">
                        Loading Requests...
                    </div>

                    :

                    events.length === 0 ?

                        <div className="empty-state">
                            No Requests Found
                        </div>

                        :

                        <div className="event-list">

                            {

                                events.map((event) => (

                                    <div
                                        className="event-card"
                                        key={event._id}
                                    >

                                        <div
                                            className={`status ${event.status.toLowerCase()}`}
                                        >
                                            {event.status}
                                        </div>

                                        <div className="details">

                                            <div>
                                                <span>Organization</span>
                                                <p>{event.organization}</p>
                                            </div>

                                            <div>
                                                <span>Activity</span>
                                                <p>{event.activityType}</p>
                                            </div>

                                            <div>
                                                <span>Event Type</span>
                                                <p>{event.eventType}</p>
                                            </div>

                                            <div>
                                                <span>Audience</span>
                                                <p>{event.targetAudience}</p>
                                            </div>

                                            <div>
                                                <span>Date</span>
                                                <p>{event.date}</p>
                                            </div>

                                        </div>

                                        <div className="button-group">

                                            <button
                                                className="approve-btn"
                                                onClick={() => approveEvent(event._id)}
                                            >
                                                Approve
                                            </button>

                                            <button
                                                className="cancel-btn"
                                                onClick={() => cancelEvent(event._id)}
                                            >
                                                Cancel
                                            </button>

                                        </div>

                                    </div>

                                ))

                            }

                        </div>

            }

            {/* Pagination */}

            <div className="pagination">

                <button
                    disabled={page === 1}
                    onClick={() => setPage(page - 1)}
                >
                    Previous
                </button>

                <span>
                    Page {page} of {totalPages}
                </span>

                <button
                    disabled={page === totalPages}
                    onClick={() => setPage(page + 1)}
                >
                    Next
                </button>

            </div>

        </div>

    );

};

export default EventRequests;