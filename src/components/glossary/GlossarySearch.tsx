
import React from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface GlossarySearchProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  totalCount: number;
  filteredCount: number;
}

export const GlossarySearch: React.FC<GlossarySearchProps> = ({ 
  searchTerm, 
  setSearchTerm,
  totalCount,
  filteredCount
}) => {
  return (
    <div className="mb-6">
      <div className="relative">
        <Input
          type="text"
          placeholder="Search terms..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10"
        />
        <Search className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
      </div>
      
      <div className="text-xs text-muted-foreground mt-2 flex justify-between">
        <span>
          {filteredCount !== totalCount ? 
            `Showing ${filteredCount} of ${totalCount} terms` : 
            `${totalCount} total terms`}
        </span>
        {searchTerm && (
          <button 
            onClick={() => setSearchTerm("")}
            className="text-primary hover:underline"
          >
            Clear search
          </button>
        )}
      </div>
    </div>
  );
};
