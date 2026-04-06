"use client";
import LeaderboardTable from "@/components/LeaderboardTable";
import StatCard from "@/components/StatCard";
import courses from "@/data/courses";
import leaderboard from "@/data/leaderboard";
import { useState } from "react";

export default function Dashboard() {

    const [selectedUser, setSelectedUser] = useState(null);
    const totalUsers = leaderboard.length;
    const totalCourses = courses.length;
    const completedCourses = courses.filter(
        (c) => c.progress === 100
    ).length;

    return (
        <main className="flex flex-col bg-gray-400">
            <h1 className=" mx-auto my-4 text-6xl font-serif">Dashboard</h1>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <StatCard title="Total courses" value={totalCourses} icon="📚" />
                <StatCard title="Total users" value={totalUsers} icon="😊" />
                <StatCard title="Rank" value="#5" icon="🏆" />
                <StatCard title="Completed courses" value={completedCourses} icon="✅" />
            </div>

            <LeaderboardTable props={leaderboard} onRowClick={(user) => setSelectedUser(user)} />

            {selectedUser && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center">

                    <div className="bg-white p-6 rounded-lg flex flex-col items-center gap-3">

                        <img
                            src={selectedUser.profile}
                            alt={selectedUser.name}
                            className="w-16 h-16 rounded-full"
                        />

                        <h2 className="text-xl font-bold">{selectedUser.name}</h2>
                        <p>Points: {selectedUser.points}</p>
                        <p>Courses: {selectedUser.coursesCompleted}</p>

                        <button
                            className="mt-3 px-4 py-2 bg-gray-300 rounded"
                            onClick={() => setSelectedUser(null)}
                        >
                            Close
                        </button>

                    </div>

                </div>
            )}

        </main>
    );
}