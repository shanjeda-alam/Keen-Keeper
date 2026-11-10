"use client";
import { useEffect, useState } from "react";
import { useParams, notFound } from "next/navigation";
import { FiBell, FiArchive, FiTrash2 } from "react-icons/fi";
import FriendProfile from "../../components/friends/FriendProfile";
import FriendStats from "../../components/friends/FriendStats";
import RelationshipGoal from "../../components/friends/RelationshipGoal";
import QuickCheckIn from "../../components/friends/QuickCheckIn";

const fetchFriends = async () => {
  const res = await fetch("/data/friends.json");
  return res.json();
};

const FriendDetailsPage = () => {
  const { id } = useParams();
  const [friend, setFriend] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadFriend = async () => {
      try {
        const data = await fetchFriends();
        const found = data.find((f) => f.id === Number(id));
        setFriend(found || null);
      } catch (error) {
        console.error("Failed to load friend:", error);
      } finally {
        setLoading(false);
      }
    };
    loadFriend();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center py-32">
        <span className="loading loading-spinner loading-lg text-[#244d3f]"></span>
      </div>
    );
  }

  if (!friend) {
    notFound();
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-3 gap-4">
      {/* Left column */}
      <div className="lg:col-span-1 flex flex-col gap-3">
        <FriendProfile friend={friend} />

        <button className="btn bg-white border-gray-200 shadow-sm text-gray-700 font-normal w-full">
          <FiBell size={16} />
          Snooze 2 Weeks
        </button>
        <button className="btn bg-white border-gray-200 shadow-sm text-gray-700 font-normal w-full">
          <FiArchive size={16} />
          Archive
        </button>
        <button className="btn bg-white border-gray-200 shadow-sm text-red-500 font-normal w-full">
          <FiTrash2 size={16} />
          Delete
        </button>
      </div>

      {/* Right column */}
      <div className="lg:col-span-2 flex flex-col gap-4">
        <FriendStats friend={friend} />
        <RelationshipGoal friend={friend} />
        <QuickCheckIn friend={friend} />
      </div>
    </div>
  );
};

export default FriendDetailsPage;