
import { useState, useMemo, useEffect } from "react";
import { glossaryTerms } from "@/data/glossaryTerms";
import { CategoryType } from "./types";

export const useGlossaryTerms = (
  searchTerm: string,
  activeCategory: CategoryType | "all"
) => {
  // Ensure we're using the complete glossaryTerms array
  const allTerms = useMemo(() => {
    console.log("Loading glossary terms from data source, count:", glossaryTerms.length);
    return glossaryTerms;
  }, []);
  
  // Sort terms alphabetically
  const sortedTerms = useMemo(() => {
    return [...allTerms].sort((a, b) => a.term.localeCompare(b.term));
  }, [allTerms]);

  // Filter terms based on search and category
  const filteredTerms = useMemo(() => {
    return sortedTerms.filter(term => {
      const matchesSearch = searchTerm === '' || 
                          term.term.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          term.definition.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = activeCategory === "all" || term.categories.includes(activeCategory as CategoryType);
      
      return matchesSearch && matchesCategory;
    });
  }, [sortedTerms, searchTerm, activeCategory]);

  // Log for debugging
  console.log(`Total terms in glossaryTerms: ${allTerms.length}`);
  console.log(`Filtered terms count: ${filteredTerms.length}`);
  console.log(`Active category: ${activeCategory}`);
  console.log(`Search term: "${searchTerm}"`);

  // Group terms by first letter for alphabetical index
  const groupedTerms = useMemo(() => {
    return filteredTerms.reduce((acc, term) => {
      const firstLetter = term.term.charAt(0).toUpperCase();
      if (!acc[firstLetter]) {
        acc[firstLetter] = [];
      }
      acc[firstLetter].push(term);
      return acc;
    }, {} as Record<string, typeof glossaryTerms>);
  }, [filteredTerms]);

  // Extract all letters that have terms
  const letters = useMemo(() => {
    return Object.keys(groupedTerms).sort();
  }, [groupedTerms]);

  return {
    filteredTerms,
    groupedTerms,
    letters,
    totalTermsCount: allTerms.length
  };
};
