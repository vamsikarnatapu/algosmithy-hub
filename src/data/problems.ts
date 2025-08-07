export type Difficulty = "Easy" | "Medium" | "Hard";

export interface Problem {
  id: string;
  title: string;
  difficulty: Difficulty;
  tags: string[];
  companies: { name: string; frequency: number }[];
  description: string;
  examples: { input: string; output: string; explanation?: string }[];
}

export const problems: Problem[] = [
  {
    id: "two-sum",
    title: "Two Sum",
    difficulty: "Easy",
    tags: ["Array", "Hash Table"],
    companies: [
      { name: "Amazon", frequency: 5 },
      { name: "Google", frequency: 4 },
      { name: "Bloomberg", frequency: 3 },
    ],
    description:
      "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
    examples: [
      { input: "nums = [2,7,11,15], target = 9", output: "[0,1]" },
    ],
  },
  {
    id: "longest-substring-without-repeating-characters",
    title: "Longest Substring Without Repeating Characters",
    difficulty: "Medium",
    tags: ["Hash Table", "String", "Sliding Window"],
    companies: [
      { name: "Meta", frequency: 5 },
      { name: "Amazon", frequency: 4 },
      { name: "Microsoft", frequency: 3 },
    ],
    description:
      "Given a string s, find the length of the longest substring without repeating characters.",
    examples: [
      { input: "s = 'abcabcbb'", output: "3" },
    ],
  },
  {
    id: "merge-k-sorted-lists",
    title: "Merge k Sorted Lists",
    difficulty: "Hard",
    tags: ["Linked List", "Divide and Conquer", "Heap"],
    companies: [
      { name: "Google", frequency: 5 },
      { name: "Uber", frequency: 4 },
      { name: "Airbnb", frequency: 3 },
    ],
    description:
      "You are given an array of k linked-lists, each linked-list is sorted in ascending order. Merge all the linked-lists into one sorted linked-list and return it.",
    examples: [
      { input: "lists = [[1,4,5],[1,3,4],[2,6]]", output: "[1,1,2,3,4,4,5,6]" },
    ],
  },
];
