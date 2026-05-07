"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  Users,
  MessageCircle,
  FolderOpen,
  Bell,
  Search,
} from "lucide-react";

export default function EduConnectApp() {
  const [tab, setTab] = useState("home");

  const NavItem = ({ icon: Icon, label, id }) => (
    <button
      onClick={() => setTab(id)}
      className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all 
      ${tab === id ? "bg-blue-600 text-white" : "hover:bg-gray-100"}`}
    >
      <Icon size={18} />
      {label}
    </button>
  );

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <aside className="w-64 bg-white border-r p-4 hidden md:block">
        <h1 className="text-2xl font-bold text-blue-600 mb-6">
          EduConnect
        </h1>

        <nav className="space-y-2">
          <NavItem icon={BookOpen} label="Home" id="home" />
          <NavItem icon={Users} label="Study Groups" id="groups" />
          <NavItem icon={FolderOpen} label="Materials" id="materials" />
          <NavItem icon={MessageCircle} label="Chat" id="chat" />
          <NavItem icon={Bell} label="Notifications" id="notifications" />
        </nav>
      </aside>

      <main className="flex-1 p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-semibold">Welcome back 👋</h2>
            <p className="text-gray-500">
              Connect, learn and grow with African students
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center bg-white px-3 py-2 rounded-xl shadow-sm">
              <Search size={16} className="text-gray-400" />
              <input
                placeholder="Search..."
                className="outline-none ml-2"
              />
            </div>

            <div className="w-10 h-10 bg-blue-600 rounded-full" />
          </div>
        </div>

        {tab === "home" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid md:grid-cols-3 gap-4"
          >
            <div className="md:col-span-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 rounded-2xl">
              <h3 className="text-2xl font-bold">
                Study Smarter Together
              </h3>

              <p className="mt-2 text-white/80">
                Join study groups, share materials, and collaborate with
                students across Africa.
              </p>

              <button className="mt-4 bg-white text-blue-600 px-4 py-2 rounded-xl font-semibold">
                Join a Group
              </button>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h4 className="font-semibold mb-2">Active Stats</h4>

              <p className="text-sm text-gray-500">
                Students online
              </p>

              <p className="text-2xl font-bold">12,450</p>

              <p className="text-sm text-gray-500 mt-3">
                Study groups
              </p>

              <p className="text-2xl font-bold">320+</p>
            </div>
          </motion.div>
        )}
      </main>
    </div>
  );
}