// import React, { useMemo } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { BarChart3, Music2, Users2, LogOut, ArrowRight } from "lucide-react";

// type User = {
//   id: string;
//   firstName: string;
//   lastName: string;
//   email: string;
//   role: "artist" | "curator";
// };

// const StatCard = ({
//   icon,
//   label,
//   value,
//   hint,
// }: {
//   icon: React.ReactNode;
//   label: string;
//   value: string;
//   hint: string;
// }) => (
//   <div className="rounded-2xl border border-white/10 bg-soursz-dark-800/70 backdrop-blur p-5">
//     <div className="flex items-center justify-between">
//       <div className="text-white/70 text-sm">{label}</div>
//       <div className="text-soursz-neon">{icon}</div>
//     </div>
//     <div className="mt-3 text-2xl font-bold">{value}</div>
//     <div className="mt-1 text-xs text-white/50">{hint}</div>
//   </div>
// );

// const DashboardPage: React.FC = () => {
//   const navigate = useNavigate();

//   const user = useMemo<User | null>(() => {
//     try {
//       const raw = localStorage.getItem("user");
//       return raw ? (JSON.parse(raw) as User) : null;
//     } catch {
//       return null;
//     }
//   }, []);

//   const logout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("user");
//     navigate("/login");
//   };

//   return (
//     <div className="min-h-screen bg-soursz-dark text-white">
//       {/* Top bar */}
//       <div className="border-b border-white/10 bg-soursz-dark-800/60 backdrop-blur">
//         <div className="container py-5 flex items-center justify-between">
//           <div>
//             <div className="text-sm text-white/60">Dashboard</div>
//             <div className="text-xl font-bold">
//               Welcome{user ? `, ${user.firstName}` : ""} 👋
//             </div>
//           </div>

//           <button
//             onClick={logout}
//             className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm hover:bg-white/10 transition"
//           >
//             <LogOut size={16} />
//             Log out
//           </button>
//         </div>
//       </div>

//       {/* Content */}
//       <div className="container py-10">
//         {/* Quick stats */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
//           <StatCard
//             icon={<BarChart3 size={18} />}
//             label="Campaign performance"
//             value="—"
//             hint="Connect analytics to display real results."
//           />
//           <StatCard
//             icon={<Music2 size={18} />}
//             label="Active campaigns"
//             value="0"
//             hint="Create your first campaign to start growth."
//           />
//           <StatCard
//             icon={<Users2 size={18} />}
//             label="Audience growth"
//             value="—"
//             hint="Coming soon: followers + saves tracking."
//           />
//         </div>

//         {/* Main actions */}
//         <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
//           <div className="rounded-2xl border border-white/10 bg-soursz-dark-800/70 backdrop-blur p-7">
//             <h2 className="text-2xl font-bold mb-2">Start your first campaign</h2>
//             <p className="text-white/70 mb-6">
//               Submit your track, choose targeting, and we’ll match you with playlists and listeners.
//             </p>
//             <Link
//               to="/pricing"
//               className="inline-flex items-center gap-2 text-soursz-neon hover:opacity-90"
//             >
//               View plans <ArrowRight size={16} />
//             </Link>
//           </div>

//           <div className="rounded-2xl border border-white/10 bg-soursz-dark-800/70 backdrop-blur p-7">
//             <h2 className="text-2xl font-bold mb-2">Account</h2>
//             <div className="mt-4 space-y-2 text-sm text-white/70">
//               <div>
//                 <span className="text-white/50">Name: </span>
//                 {user ? `${user.firstName} ${user.lastName}` : "—"}
//               </div>
//               <div>
//                 <span className="text-white/50">Email: </span>
//                 {user?.email || "—"}
//               </div>
//               <div>
//                 <span className="text-white/50">Role: </span>
//                 {user?.role || "—"}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Placeholder list */}
//         <div className="mt-10 rounded-2xl border border-white/10 bg-soursz-dark-800/70 backdrop-blur p-7">
//           <h3 className="text-xl font-bold mb-3">Recent activity</h3>
//           <p className="text-white/60 text-sm">
//             No activity yet. Once campaigns are created, you’ll see placements and results here.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DashboardPage;





import React, { useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BarChart3, Music2, Users2, LogOut, ArrowRight } from "lucide-react";

type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: "artist" | "curator";
};

const StatCard = ({
  icon,
  label,
  value,
  hint,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  hint: string;
}) => (
  <div className="rounded-2xl border border-white/10 bg-soursz-dark-800/70 backdrop-blur p-5">
    <div className="flex items-center justify-between">
      <div className="text-white/70 text-sm">{label}</div>
      <div className="text-soursz-neon">{icon}</div>
    </div>
    <div className="mt-3 text-2xl font-bold">{value}</div>
    <div className="mt-1 text-xs text-white/50">{hint}</div>
  </div>
);

const DashboardPage: React.FC = () => {
  const navigate = useNavigate();

  const user = useMemo<User | null>(() => {
    try {
      const raw = localStorage.getItem("user");
      return raw ? (JSON.parse(raw) as User) : null;
    } catch {
      return null;
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-soursz-dark text-white">
      <div className="border-b border-white/10 bg-soursz-dark-800/60 backdrop-blur">
        <div className="container py-5 flex items-center justify-between">
          <div>
            <div className="text-sm text-white/60">Dashboard</div>
            <div className="text-xl font-bold">
              Welcome{user ? `, ${user.firstName}` : ""} 👋
            </div>
          </div>

          <button
            onClick={logout}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm hover:bg-white/10 transition"
          >
            <LogOut size={16} />
            Log out
          </button>
        </div>
      </div>

      <div className="container py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <StatCard
            icon={<BarChart3 size={18} />}
            label="Campaign performance"
            value="—"
            hint="Connect analytics to display real results."
          />
          <StatCard
            icon={<Music2 size={18} />}
            label="Active campaigns"
            value="0"
            hint="Create your first campaign to start growth."
          />
          <StatCard
            icon={<Users2 size={18} />}
            label="Audience growth"
            value="—"
            hint="Coming soon: followers + saves tracking."
          />
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-white/10 bg-soursz-dark-800/70 backdrop-blur p-7">
            <h2 className="text-2xl font-bold mb-2">Start your first campaign</h2>
            <p className="text-white/70 mb-6">
              Submit your track, choose targeting, and we’ll match you with playlists and listeners.
            </p>
            <Link
              to="/pricing"
              className="inline-flex items-center gap-2 text-soursz-neon hover:opacity-90"
            >
              View plans <ArrowRight size={16} />
            </Link>
          </div>

          <div className="rounded-2xl border border-white/10 bg-soursz-dark-800/70 backdrop-blur p-7">
            <h2 className="text-2xl font-bold mb-2">Account</h2>
            <div className="mt-4 space-y-2 text-sm text-white/70">
              <div>
                <span className="text-white/50">Name: </span>
                {user ? `${user.firstName} ${user.lastName}` : "—"}
              </div>
              <div>
                <span className="text-white/50">Email: </span>
                {user?.email || "—"}
              </div>
              <div>
                <span className="text-white/50">Role: </span>
                {user?.role || "—"}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-white/10 bg-soursz-dark-800/70 backdrop-blur p-7">
          <h3 className="text-xl font-bold mb-3">Recent activity</h3>
          <p className="text-white/60 text-sm">
            No activity yet. Once campaigns are created, you’ll see placements and results here.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
