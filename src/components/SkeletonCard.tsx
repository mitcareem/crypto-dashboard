import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const SkeletonCard: React.FC = () => {
  return (
    <div className="flex flex-col col-span-4 gap-[1rem] shadow-sm py-[2rem] opacity-20">
      <div className="space-y-2">
        <Skeleton className="h-[2rem] max-w-[250px] bg-primary" />
        <Skeleton className="h-[2rem] max-w-[200px] bg-primary" />
      </div>
      <Skeleton className="h-[50rem] w-full rounded-xl bg-primary" />
    </div>
  );
};

export default SkeletonCard;
