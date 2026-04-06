function LeaderboardTable({ props,onRowClick }) {

    return (
        <div className="mx-4 mt-4">
            <table className="w-full border rounded-lg overflow-hidden">
                <thead className="bg-gray-100 ">
                    <tr className="text-left">
                        <th className="p-3">Rank</th>
                        <th className="p-3">User</th>
                        <th className="p-3">Points</th>
                        <th className="p-3">Courses</th>
                    </tr>
                </thead>

                <tbody className="bg-gray-300 ">
                    {props.map((user) => {
                        let medal = "";
                        if (user.rank === 1) {
                            medal = "🥇";
                        } else if (user.rank === 2) {
                            medal = "🥈";
                        } else if (user.rank === 3) {
                            medal = "🥉";
                        }

                        return (
                            <tr
                                key={user.id}
                                onClick={() => onRowClick(user)} 
                                className={`hover:bg-slate-400 ${
                                    user.rank === 1 ? "bg-yellow-200" : ""
                                }`}
                            >
                                <td className="p-3 font-bold ">{medal || user.rank}</td>
                                <td className="flex p-3 items-center gap-3">
                                    <img src={user.profile} alt={user.name} className="w-8 h-8 rounded-full" />
                                    <span>{user.name}</span>
                                </td>
                                <td className="p-3 ">{user.points}</td>
                                <td className="p-3">{user.coursesCompleted}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default LeaderboardTable;