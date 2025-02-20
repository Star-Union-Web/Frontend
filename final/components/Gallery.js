import React, { useEffect, useState } from "react";
import moment from 'moment';
import { createDragAndDropPlugin } from '@schedule-x/drag-and-drop';
import {
    createViewMonthGrid,
    createViewWeek,
} from '@schedule-x/calendar';
import { createResizePlugin } from '@schedule-x/resize';
import { createEventModalPlugin } from '@schedule-x/event-modal';
import '../index.css';
import '@schedule-x/theme-shadcn/dist/index.css';
import { ScheduleXCalendar, useCalendarApp } from "@schedule-x/react";
import { createEventsServicePlugin } from '@schedule-x/events-service';



function Gallery() {

    const [stories, setStories] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [newStory, setNewStory] = useState({ title: "", description: "", image: "" });
    const [visibleStories, setVisibleStories] = useState(6); // Show initial 6 stories

    useEffect(() => {
        fetch("/story.json") // Fetch JSON from the public folder
            .then(response => response.json())
            .then(data => setStories(data))
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    const handleInputChange = (e) => {
        setNewStory({ ...newStory, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newStory.title && newStory.description && newStory.image) {
            setStories([...stories, newStory]);
            setShowForm(false);
            setNewStory({ title: "", description: "", image: "" });
        }
    };


    const calender = useCalendarApp({
        views: [
            createViewWeek(), // Weekly view
            createViewMonthGrid() // Month grid view
        ],
        events: [
            {
                id: '1',
                title: 'Annual Charity Donation Drive',
                start: '2025-01-01 01:00',
                end: '2025-01-01 05:00',
                description: 'Join us for the annual charity donation drive to support those in need.',
                location: 'Downtown',
                organizer: 'Hope for All Foundation'
            },
            {
                id: '2',
                title: 'Team Building Retreat',
                start: '2025-01-15 02:00',
                end: '2025-01-15 04:00',
                description: 'A day of team-building activities and workshops to foster collaboration.',
                location: 'Mountain Resort',
                organizer: 'Company HR'
            },
            {
                id: '3',
                title: 'Web Development Conference',
                start: '2025-01-19 00:00',
                end: '2025-01-19 03:00',
                description: 'Attend workshops and seminars from industry experts on web development.',
                location: 'TechCity',
                organizer: 'DevTech Inc.'
            },
            {
                id: '4',
                title: 'Yoga for Mental Health',
                start: '2025-01-06 02:00',
                end: '2025-01-06 03:00',
                description: 'A peaceful yoga session to help you relax and relieve stress.',
                location: 'Zen Yoga Studio',
                organizer: 'Wellness Group'
            },
            {
                id: '5',
                title: 'Startup Pitch Night',
                start: '2025-01-20 05:00',
                end: '2025-01-20 06:00',
                description: 'An evening of startup pitches, networking, and investor opportunities.',
                location: 'Downtown',
                organizer: 'Tech Entrepreneurs Network'
            },
            {
                id: '6',
                title: 'Art Exhibition Opening',
                start: '2025-02-05 00:00',
                end: '2025-02-05 01:00',
                description: 'An exclusive preview of the latest works by contemporary artists.',
                location: ' Uptown',
                organizer: 'ArtWorld Gallery'
            },
            {
                id: '7',
                title: 'Annual Corporate Gala',
                start: '2025-04-01 08:00',
                end: '2025-04-01 09:00',
                description: 'A glamorous evening to celebrate our achievements and look forward to the future.',
                location: ' Luxury Hotel',
                organizer: 'Company Management'
            },
            {
                id: '8',
                title: 'Music Festival',
                start: '2025-05-10 08:00',
                end: '2025-05-10 09:00',
                description: 'A day of live music performances from top bands and artists.',
                location: ' Riverside',
                organizer: 'Live Nation'
            },
            {
                id: '9',
                title: 'Book Launch and Signing',
                start: '2025-06-15 00:00',
                end: '2025-06-15 00:00',
                description: 'Meet the author and get your copy of the latest bestseller signed.',
                location: 'Main Street',
                organizer: 'Local Bookstore'
            },
            {
                id: '10',
                title: 'Charity Run for Health Awareness',
                start: '2025-07-01 08:00',
                end: '2025-07-01 09:00',
                description: 'A charity run to raise awareness for health and wellness.',
                location: 'Riverside',
                organizer: 'Health and Fitness Organization'
            }
        ],
        plugins: [
            createDragAndDropPlugin(),
            createEventModalPlugin(),
            createResizePlugin(),

            createEventsServicePlugin()
        ],
    });

    return (
        <div className={"mt-10"}>

        <ScheduleXCalendar calendarApp={calender} id="calendar"   />
<div className={"mt-10    "}>


            {/* Add Story Button */}
            <div className="flex justify-between items-center   mb-6">
                <h1 className="text-2xl font-bold text-gray-800">Story Gallery</h1>
                <button
                    onClick={() => setShowForm(true)}
                    className="bg-[#cc4b48] text-white px-4 py-2 rounded-2xl hover:bg-[#cc4b48]/90 transition">
                    + Add Your Story
                </button>
            </div>

            {/* Stories Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {stories.slice(0, visibleStories).map((story, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <img src={story.image} alt="Story" className="w-full h-56 object-cover" />
                        <div className="p-4">
                            <h2 className="text-lg font-semibold text-gray-800">{story.title}</h2>
                            <p className="text-gray-600 mt-2">{story.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Show More Button */}
            {visibleStories < stories.length && (
                <div className="text-center mt-6">
                    <button
                        onClick={() => setVisibleStories(visibleStories + 6)}
                        className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition">
                        Load More
                    </button>
                </div>
            )}

            {/* Add Story Form Modal */}
            {showForm && (
                <div className="fixed inset-0 flex   z-50 items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                        <h2 className="text-xl font-semibold mb-4">Add Your Story</h2>
                        <form onSubmit={handleSubmit} className="space-y-4 ">
                            <input
                                type="text"
                                name="title"
                                placeholder="Story Title"
                                value={newStory.title}
                                onChange={handleInputChange}
                                className="w-full px-3 py-2 border rounded-lg outline-none"
                                required
                            />
                            <textarea
                                name="description"
                                placeholder="Story Description"
                                value={newStory.description}
                                onChange={handleInputChange}
                                className="w-full px-3 py-2 border rounded-lg outline-none"
                                required
                            />
                            <input
                                type="text"
                                name="image"
                                placeholder="Image URL"
                                value={newStory.image}
                                onChange={handleInputChange}
                                className="w-full px-3 py-2 border rounded-lg outline-none"
                                required
                            />
                            <div className="flex justify-end space-x-2">
                                <button
                                    type="button"
                                    onClick={() => setShowForm(false)}
                                    className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700">
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-[#cc4b48] text-white rounded-lg hover:bg-[#cc4b48]/90">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

            )}
</div>
        </div>
    );
}

export default Gallery;
