"use client";
import { useState } from "react";
import { MoreVertical } from "lucide-react";

interface Task {
  id: number;
  dateTime: string;
  task: string;
  description: string;
}

const initialTasks: Task[] = [
  {
    id: 1,
    dateTime: "2/02/2024 2:00 pm",
    task: "Design Navaratri poster",
    description: "Worem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    dateTime: "3/02/2024 3:00 pm",
    task: "Client Meeting",
    description: "Discuss feedback and next sprint tasks.",
  },
];

export default function TasksPage() {
  const [tasks] = useState<Task[]>(initialTasks);
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-blue-700">Tasks Management</h2>
        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-700 hover:bg-blue-800 text-white px-5 py-2 rounded-full flex items-center gap-2"
        >
          <span>＋</span> Add Task
        </button>
      </div>

      <div className="bg-white shadow rounded-lg overflow-x-auto">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="px-6 py-3">No</th>
              <th className="px-6 py-3">Date & Time</th>
              <th className="px-6 py-3">Task</th>
              <th className="px-6 py-3">Description</th>
              <th className="px-6 py-3 text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => (
              <tr key={task.id} className="border-b hover:bg-gray-50">
                <td className="px-6 py-4">{index + 1}</td>
                <td className="px-6 py-4">{task.dateTime}</td>
                <td className="px-6 py-4">{task.task}</td>
                <td className="px-6 py-4">{task.description}</td>
                <td className="px-6 py-4 text-right">
                  <button>
                    <MoreVertical size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-2 mt-6">
        <button className="px-3 py-1 border rounded-md">‹</button>
        {[1, 2, 3].map((num) => (
          <button
            key={num}
            className={`px-3 py-1 rounded-md ${num === 1 ? "bg-gray-900 text-white" : "border"}`}
          >
            {num}
          </button>
        ))}
        <button className="px-3 py-1 border rounded-md">›</button>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg w-full max-w-md p-8 relative shadow-lg">
            <h2 className="text-xl font-semibold mb-4 text-center text-black">Add Task</h2>
            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Enter Task Name"
                className="px-4 py-2 border rounded bg-gray-100 focus:outline-none text-black"
              />
              <input
                type="text"
                placeholder="Description"
                className="px-4 py-2 border rounded bg-gray-100 focus:outline-none text-black"
              />
              <input
                type="datetime-local"
                placeholder="due date"
                className="px-4 py-2 border rounded bg-gray-100 focus:outline-none text-balck text-black"
              />
              <button
                type="submit"
                className="mt-4 w-full bg-blue-700 text-white py-2 rounded-full font-medium hover:bg-blue-800"
              >
                Save
              </button>
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="text-center mt-2 text-gray-600 hover:underline"
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
