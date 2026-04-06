function CourseCard({ course, onView }) {
    return (
        <div className="border rounded-xl overflow-hidden shadow-xl hover:shadow-md transition">

            <img src={course.thumbnail} alt={course.title} className="w-full h-40 object-cover" />

            <div className="p-4 flex flex-col gap-2">
                <span className=" bg-stone-200 text-slate-700 px-2 py-1 rounded w-fit text-xs">
                    {course.category}
                </span>

                <h2 className="text-lg font-semibold">
                    {course.title}
                </h2>

                <p className="text-sm text-gray-500 ">
                    {course.description}
                </p>

                <div className="w-full bg-gray-200 h-2 rounded mt-2">
                    <div
                        className="bg-green-400 hover:bg-green-600 h-2 rounded"
                        style={{ width: `${course.progress}%` }}
                    ></div>
                </div>

                {/* ✅ Added this line */}
                <p className="text-xs text-gray-600">
                    {course.progress}% completed
                </p>

                <button
                    className='hover:text-xl transition-all duration-75 bg-stone-700 text-white px-5 py-2 rounded-2xl active:bg-stone-400'
                    onClick={onView}
                >
                    View Course
                </button>

            </div>
        </div>
    );
}

export default CourseCard;