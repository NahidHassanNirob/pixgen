"use client";

import { authClient } from "@/lib/authClient";
import Loading from "../loading";
import Image from "next/image";
import {
  User,
  Mail,
  ShieldCheck,
  Calendar,
  ExternalLink,
  Settings,
  Camera,
} from "lucide-react";
import { OpenModal } from "@/components/Modal";

const ProfilePage = () => {
  const { data, isPending } = authClient.useSession();

  if (isPending) return <Loading />;
  if (!data)
    return (
      <div className="flex h-[70vh] items-center justify-center text-zinc-500 font-medium">
        No session detected. Please log in.
      </div>
    );

  const user = data.user;

  const profileImg = user.image?.replace(/=s\d+-c/g, "=s0") || user.image;

  return (
    <div className="min-h-[80vh] bg-[#F8F9FB] dark:bg-zinc-950 pb-20">
      <div className="h-48 w-full bg-gradient-to-r  to-pink-500" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative -mt-24">
          <div className="bg-white dark:bg-zinc-900 rounded-3xl shadow-sm border border-zinc-200/50 dark:border-zinc-800 p-6 md:p-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="relative group w-max">
                <div className="h-40 w-40 rounded-3xl overflow-hidden border-4 border-white dark:border-zinc-900 shadow-xl relative">
                  <Image
                    src={profileImg}
                    alt="Profile"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <button className="absolute bottom-2 right-2 p-2 bg-white dark:bg-zinc-800 rounded-xl shadow-lg border border-zinc-100 dark:border-zinc-700 hover:scale-105 transition-transform">
                  <Camera
                    size={16}
                    className="text-zinc-600 dark:text-zinc-300"
                  />
                </button>
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">
                    {user.name}
                  </h1>
                  {user.emailVerified && (
                    <ShieldCheck size={24} className="text-blue-500" />
                  )}
                </div>
                <p className="text-zinc-500 dark:text-zinc-400 flex items-center gap-1.5 font-medium">
                  <Mail size={16} /> {user.email}
                </p>
              </div>

              <div className="flex gap-3">
                
                <OpenModal></OpenModal>
              </div>
            </div>

            <hr className="my-10 border-zinc-100 dark:border-zinc-800" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
