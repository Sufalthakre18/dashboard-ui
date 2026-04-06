"use client";

import courses from "@/data/courses";
import CourseCard from "@/components/CourseCard";
import PdfViewer from "@/components/PdfViewer";
import { useState } from "react";

export default function CoursesPage() {

    const [selectedPdf, setSelectedPdf] = useState(null);
    const [category, setCategory] = useState("All");

   
    const categories = ["All", ...new Set(courses.map(c => c.category))];

   
    const filteredCourses =category === "All"? courses: courses.filter(c => c.category === category);

    return (
        <div className="flex flex-col items-center">

            <h1 className="mx-auto my-4 text-6xl font-serif">Courses</h1>

            
            <div className="flex gap-2 mb-4 flex-wrap justify-center">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setCategory(cat)}
                        className={`px-3 py-1 rounded border ${
                            category === cat
                                ? "bg-slate-700 text-white"
                                : "bg-white"
                        }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 p-4 gap-4 ">
                {filteredCourses.length === 0 ? (
                    <p className="col-span-3 text-center text-gray-500">
                        No courses found
                    </p>
                ) : (
                    filteredCourses.map((course) => (
                        <CourseCard
                            key={course.id}
                            course={course}
                            onView={() => setSelectedPdf(course.pdfUrl)}
                        />
                    ))
                )}

            </div>

            {selectedPdf && (
                <PdfViewer
                    pdfUrl={selectedPdf}
                    onClose={() => setSelectedPdf(null)}
                />
            )}

        </div>
    );
}