export type Difficulty = "Easy" | "Medium" | "Hard";

export interface Problem {
  id: string;
  title: string;
  difficulty: Difficulty;
  tags: string[];
  companies: { name: string; frequency: number }[];
  description: string;
  examples: { input: string; output: string; explanation?: string }[];
  constraints?: string[];
  solutions?: { language: string; code: string; explanation?: string }[];
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
      { name: "Apple", frequency: 3 },
      { name: "Microsoft", frequency: 2 },
    ],
    description:
      "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.",
    examples: [
      { 
        input: "nums = [2,7,11,15], target = 9", 
        output: "[0,1]",
        explanation: "Because nums[0] + nums[1] == 9, we return [0, 1]."
      },
      { 
        input: "nums = [3,2,4], target = 6", 
        output: "[1,2]" 
      },
      { 
        input: "nums = [3,3], target = 6", 
        output: "[0,1]" 
      },
    ],
  },
  {
    id: "add-two-numbers",
    title: "Add Two Numbers",
    difficulty: "Medium",
    tags: ["Linked List", "Math", "Recursion"],
    companies: [
      { name: "Amazon", frequency: 5 },
      { name: "Microsoft", frequency: 4 },
      { name: "Apple", frequency: 3 },
      { name: "Google", frequency: 3 },
    ],
    description:
      "You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.",
    examples: [
      { 
        input: "l1 = [2,4,3], l2 = [5,6,4]", 
        output: "[7,0,8]",
        explanation: "342 + 465 = 807."
      },
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
      { name: "Apple", frequency: 3 },
      { name: "Google", frequency: 2 },
    ],
    description:
      "Given a string s, find the length of the longest substring without repeating characters.",
    examples: [
      { 
        input: "s = 'abcabcbb'", 
        output: "3",
        explanation: "The answer is 'abc', with the length of 3."
      },
      { 
        input: "s = 'bbbbb'", 
        output: "1",
        explanation: "The answer is 'b', with the length of 1."
      },
    ],
  },
  {
    id: "median-of-two-sorted-arrays",
    title: "Median of Two Sorted Arrays",
    difficulty: "Hard",
    tags: ["Array", "Binary Search", "Divide and Conquer"],
    companies: [
      { name: "Google", frequency: 5 },
      { name: "Amazon", frequency: 4 },
      { name: "Microsoft", frequency: 3 },
      { name: "Apple", frequency: 2 },
    ],
    description:
      "Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).",
    examples: [
      { 
        input: "nums1 = [1,3], nums2 = [2]", 
        output: "2.00000",
        explanation: "merged array = [1,2,3] and median is 2."
      },
    ],
  },
  {
    id: "longest-palindromic-substring",
    title: "Longest Palindromic Substring",
    difficulty: "Medium",
    tags: ["String", "Dynamic Programming"],
    companies: [
      { name: "Amazon", frequency: 5 },
      { name: "Microsoft", frequency: 4 },
      { name: "Google", frequency: 3 },
      { name: "Apple", frequency: 2 },
    ],
    description:
      "Given a string s, return the longest palindromic substring in s.",
    examples: [
      { 
        input: "s = 'babad'", 
        output: "'bab'",
        explanation: "Note: 'aba' is also a valid answer."
      },
      { 
        input: "s = 'cbbd'", 
        output: "'bb'" 
      },
    ],
  },
  {
    id: "zigzag-conversion",
    title: "Zigzag Conversion",
    difficulty: "Medium",
    tags: ["String"],
    companies: [
      { name: "Amazon", frequency: 3 },
      { name: "Microsoft", frequency: 2 },
      { name: "Google", frequency: 2 },
    ],
    description:
      "The string 'PAYPALISHIRING' is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)",
    examples: [
      { 
        input: "s = 'PAYPALISHIRING', numRows = 3", 
        output: "'PAHNAPLSIIGYIR'" 
      },
    ],
  },
  {
    id: "reverse-integer",
    title: "Reverse Integer",
    difficulty: "Medium",
    tags: ["Math"],
    companies: [
      { name: "Amazon", frequency: 4 },
      { name: "Apple", frequency: 3 },
      { name: "Microsoft", frequency: 2 },
    ],
    description:
      "Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-2^31, 2^31 - 1], then return 0.",
    examples: [
      { 
        input: "x = 123", 
        output: "321" 
      },
      { 
        input: "x = -123", 
        output: "-321" 
      },
      { 
        input: "x = 120", 
        output: "21" 
      },
    ],
  },
  {
    id: "string-to-integer-atoi",
    title: "String to Integer (atoi)",
    difficulty: "Medium",
    tags: ["String"],
    companies: [
      { name: "Amazon", frequency: 4 },
      { name: "Microsoft", frequency: 3 },
      { name: "Bloomberg", frequency: 2 },
    ],
    description:
      "Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer (similar to C/C++'s atoi function).",
    examples: [
      { 
        input: "s = '42'", 
        output: "42" 
      },
      { 
        input: "s = '   -42'", 
        output: "-42" 
      },
    ],
  },
  {
    id: "palindrome-number",
    title: "Palindrome Number",
    difficulty: "Easy",
    tags: ["Math"],
    companies: [
      { name: "Amazon", frequency: 3 },
      { name: "Apple", frequency: 2 },
      { name: "Microsoft", frequency: 2 },
    ],
    description:
      "Given an integer x, return true if x is palindrome integer. An integer is a palindrome when it reads the same backward as forward.",
    examples: [
      { 
        input: "x = 121", 
        output: "true",
        explanation: "121 reads as 121 from left to right and from right to left."
      },
      { 
        input: "x = -121", 
        output: "false",
        explanation: "From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome."
      },
    ],
  },
  {
    id: "regular-expression-matching",
    title: "Regular Expression Matching",
    difficulty: "Hard",
    tags: ["String", "Dynamic Programming", "Recursion"],
    companies: [
      { name: "Google", frequency: 5 },
      { name: "Facebook", frequency: 4 },
      { name: "Amazon", frequency: 3 },
    ],
    description:
      "Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*' where '.' matches any single character and '*' matches zero or more of the preceding element.",
    examples: [
      { 
        input: "s = 'aa', p = 'a'", 
        output: "false",
        explanation: "'a' does not match the entire string 'aa'."
      },
      { 
        input: "s = 'aa', p = 'a*'", 
        output: "true",
        explanation: "'*' means zero or more of the preceding element, 'a'. Therefore, by repeating 'a' once, it becomes 'aa'."
      },
    ],
  },
  {
    id: "container-with-most-water",
    title: "Container With Most Water",
    difficulty: "Medium",
    tags: ["Array", "Two Pointers", "Greedy"],
    companies: [
      { name: "Amazon", frequency: 5 },
      { name: "Google", frequency: 4 },
      { name: "Microsoft", frequency: 3 },
      { name: "Apple", frequency: 2 },
    ],
    description:
      "You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]). Find two lines that together with the x-axis form a container, such that the container contains the most water.",
    examples: [
      { 
        input: "height = [1,8,6,2,5,4,8,3,7]", 
        output: "49",
        explanation: "The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49."
      },
    ],
  },
  {
    id: "integer-to-roman",
    title: "Integer to Roman",
    difficulty: "Medium",
    tags: ["Hash Table", "Math", "String"],
    companies: [
      { name: "Amazon", frequency: 3 },
      { name: "Microsoft", frequency: 2 },
      { name: "Google", frequency: 2 },
    ],
    description:
      "Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M. Given an integer, convert it to a roman numeral.",
    examples: [
      { 
        input: "num = 3", 
        output: "'III'",
        explanation: "3 is represented as 3 ones."
      },
      { 
        input: "num = 58", 
        output: "'LVIII'",
        explanation: "L = 50, V = 5, III = 3."
      },
    ],
  },
  {
    id: "roman-to-integer",
    title: "Roman to Integer",
    difficulty: "Easy",
    tags: ["Hash Table", "Math", "String"],
    companies: [
      { name: "Amazon", frequency: 4 },
      { name: "Microsoft", frequency: 3 },
      { name: "Apple", frequency: 2 },
    ],
    description:
      "Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M. Given a roman numeral, convert it to an integer.",
    examples: [
      { 
        input: "s = 'III'", 
        output: "3",
        explanation: "III = 3."
      },
      { 
        input: "s = 'LVIII'", 
        output: "58",
        explanation: "L = 50, V= 5, III = 3."
      },
    ],
  },
  {
    id: "longest-common-prefix",
    title: "Longest Common Prefix",
    difficulty: "Easy",
    tags: ["String"],
    companies: [
      { name: "Amazon", frequency: 3 },
      { name: "Google", frequency: 2 },
      { name: "Microsoft", frequency: 2 },
    ],
    description:
      "Write a function to find the longest common prefix string amongst an array of strings. If there is no common prefix, return an empty string ''.",
    examples: [
      { 
        input: "strs = ['flower','flow','flight']", 
        output: "'fl'" 
      },
      { 
        input: "strs = ['dog','racecar','car']", 
        output: "''",
        explanation: "There is no common prefix among the input strings."
      },
    ],
  },
  {
    id: "3sum",
    title: "3Sum",
    difficulty: "Medium",
    tags: ["Array", "Two Pointers", "Sorting"],
    companies: [
      { name: "Amazon", frequency: 5 },
      { name: "Microsoft", frequency: 4 },
      { name: "Google", frequency: 3 },
      { name: "Apple", frequency: 2 },
    ],
    description:
      "Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0. Notice that the solution set must not contain duplicate triplets.",
    examples: [
      { 
        input: "nums = [-1,0,1,2,-1,-4]", 
        output: "[[-1,-1,2],[-1,0,1]]",
        explanation: "nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0. nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0. nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0. The distinct triplets are [-1,0,1] and [-1,-1,2]."
      },
    ],
  },
  {
    id: "3sum-closest",
    title: "3Sum Closest",
    difficulty: "Medium",
    tags: ["Array", "Two Pointers", "Sorting"],
    companies: [
      { name: "Amazon", frequency: 3 },
      { name: "Microsoft", frequency: 2 },
      { name: "Google", frequency: 2 },
    ],
    description:
      "Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target. Return the sum of the three integers.",
    examples: [
      { 
        input: "nums = [-1,2,1,-4], target = 1", 
        output: "2",
        explanation: "The sum that is closest to the target is 2. (-1 + 2 + 1 = 2)."
      },
    ],
  },
  {
    id: "letter-combinations-of-a-phone-number",
    title: "Letter Combinations of a Phone Number",
    difficulty: "Medium",
    tags: ["Hash Table", "String", "Backtracking"],
    companies: [
      { name: "Amazon", frequency: 4 },
      { name: "Google", frequency: 3 },
      { name: "Microsoft", frequency: 2 },
    ],
    description:
      "Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.",
    examples: [
      { 
        input: "digits = '23'", 
        output: "['ad','ae','af','bd','be','bf','cd','ce','cf']" 
      },
    ],
  },
  {
    id: "4sum",
    title: "4Sum",
    difficulty: "Medium",
    tags: ["Array", "Two Pointers", "Sorting"],
    companies: [
      { name: "Amazon", frequency: 3 },
      { name: "Microsoft", frequency: 2 },
      { name: "Google", frequency: 2 },
    ],
    description:
      "Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that: 0 <= a, b, c, d < n, a, b, c, and d are distinct, and nums[a] + nums[b] + nums[c] + nums[d] == target.",
    examples: [
      { 
        input: "nums = [1,0,-1,0,-2,2], target = 0", 
        output: "[[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]" 
      },
    ],
  },
  {
    id: "remove-nth-node-from-end-of-list",
    title: "Remove Nth Node From End of List",
    difficulty: "Medium",
    tags: ["Linked List", "Two Pointers"],
    companies: [
      { name: "Amazon", frequency: 4 },
      { name: "Microsoft", frequency: 3 },
      { name: "Apple", frequency: 2 },
    ],
    description:
      "Given the head of a linked list, remove the nth node from the end of the list and return its head.",
    examples: [
      { 
        input: "head = [1,2,3,4,5], n = 2", 
        output: "[1,2,3,5]" 
      },
    ],
  },
  {
    id: "valid-parentheses",
    title: "Valid Parentheses",
    difficulty: "Easy",
    tags: ["String", "Stack"],
    companies: [
      { name: "Amazon", frequency: 5 },
      { name: "Microsoft", frequency: 4 },
      { name: "Google", frequency: 3 },
      { name: "Apple", frequency: 3 },
    ],
    description:
      "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid. An input string is valid if: Open brackets must be closed by the same type of brackets. Open brackets must be closed in the correct order.",
    examples: [
      { 
        input: "s = '()'", 
        output: "true" 
      },
      { 
        input: "s = '()[]{}'", 
        output: "true" 
      },
      { 
        input: "s = '(]'", 
        output: "false" 
      },
    ],
  },
  {
    id: "merge-k-sorted-lists",
    title: "Merge k Sorted Lists",
    difficulty: "Hard",
    tags: ["Linked List", "Divide and Conquer", "Heap", "Merge Sort"],
    companies: [
      { name: "Google", frequency: 5 },
      { name: "Uber", frequency: 4 },
      { name: "Airbnb", frequency: 3 },
      { name: "Amazon", frequency: 3 },
      { name: "Microsoft", frequency: 2 },
    ],
    description:
      "You are given an array of k linked-lists lists, each linked-list is sorted in ascending order. Merge all the linked-lists into one sorted linked-list and return it.",
    examples: [
      { 
        input: "lists = [[1,4,5],[1,3,4],[2,6]]", 
        output: "[1,1,2,3,4,4,5,6]",
        explanation: "The linked-lists are: [1->4->5, 1->3->4, 2->6]. Merging them into one sorted list: 1->1->2->3->4->4->5->6."
      },
    ],
  },
  {
    id: "swap-nodes-in-pairs",
    title: "Swap Nodes in Pairs",
    difficulty: "Medium",
    tags: ["Linked List", "Recursion"],
    companies: [
      { name: "Amazon", frequency: 3 },
      { name: "Microsoft", frequency: 2 },
      { name: "Google", frequency: 2 },
    ],
    description:
      "Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)",
    examples: [
      { 
        input: "head = [1,2,3,4]", 
        output: "[2,1,4,3]" 
      },
    ],
  },
  {
    id: "reverse-nodes-in-k-group",
    title: "Reverse Nodes in k-Group",
    difficulty: "Hard",
    tags: ["Linked List", "Recursion"],
    companies: [
      { name: "Amazon", frequency: 4 },
      { name: "Microsoft", frequency: 3 },
      { name: "Google", frequency: 2 },
    ],
    description:
      "Given the head of a linked list, reverse the nodes of the list k at a time, and return the modified list. k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes, in the end, should remain as it is.",
    examples: [
      { 
        input: "head = [1,2,3,4,5], k = 2", 
        output: "[2,1,4,3,5]" 
      },
      { 
        input: "head = [1,2,3,4,5], k = 3", 
        output: "[3,2,1,4,5]" 
      },
    ],
  },
  {
    id: "remove-duplicates-from-sorted-array",
    title: "Remove Duplicates from Sorted Array",
    difficulty: "Easy",
    tags: ["Array", "Two Pointers"],
    companies: [
      { name: "Amazon", frequency: 3 },
      { name: "Microsoft", frequency: 2 },
      { name: "Apple", frequency: 2 },
    ],
    description:
      "Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.",
    examples: [
      { 
        input: "nums = [1,1,2]", 
        output: "2, nums = [1,2,_]",
        explanation: "Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively."
      },
    ],
  },
  {
    id: "remove-element",
    title: "Remove Element",
    difficulty: "Easy",
    tags: ["Array", "Two Pointers"],
    companies: [
      { name: "Amazon", frequency: 2 },
      { name: "Microsoft", frequency: 2 },
      { name: "Apple", frequency: 1 },
    ],
    description:
      "Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The relative order of the elements may be changed.",
    examples: [
      { 
        input: "nums = [3,2,2,3], val = 3", 
        output: "2, nums = [2,2,_,_]" 
      },
    ],
  },
  {
    id: "implement-strstr",
    title: "Implement strStr()",
    difficulty: "Easy",
    tags: ["Two Pointers", "String", "String Matching"],
    companies: [
      { name: "Amazon", frequency: 3 },
      { name: "Microsoft", frequency: 2 },
      { name: "Google", frequency: 2 },
    ],
    description:
      "Implement strStr(). Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.",
    examples: [
      { 
        input: "haystack = 'hello', needle = 'll'", 
        output: "2" 
      },
      { 
        input: "haystack = 'aaaaa', needle = 'bba'", 
        output: "-1" 
      },
    ],
  },
  {
    id: "divide-two-integers",
    title: "Divide Two Integers",
    difficulty: "Medium",
    tags: ["Math", "Bit Manipulation"],
    companies: [
      { name: "Amazon", frequency: 3 },
      { name: "Microsoft", frequency: 2 },
      { name: "Google", frequency: 2 },
    ],
    description:
      "Given two integers dividend and divisor, divide two integers without using multiplication, division, and mod operator. The integer division should truncate toward zero, which means losing its fractional part.",
    examples: [
      { 
        input: "dividend = 10, divisor = 3", 
        output: "3",
        explanation: "10/3 = 3.33333.. which is truncated to 3."
      },
    ],
  },
  {
    id: "substring-with-concatenation-of-all-words",
    title: "Substring with Concatenation of All Words",
    difficulty: "Hard",
    tags: ["Hash Table", "String", "Sliding Window"],
    companies: [
      { name: "Amazon", frequency: 3 },
      { name: "Google", frequency: 2 },
      { name: "Microsoft", frequency: 2 },
    ],
    description:
      "You are given a string s and an array of strings words of the same length. Return all starting indices of substring(s) in s that is a concatenation of each word in words exactly once, in any order, and without any intervening characters.",
    examples: [
      { 
        input: "s = 'barfoothefoobarman', words = ['foo','bar']", 
        output: "[0,9]",
        explanation: "Substrings starting at index 0 and 9 are 'barfoo' and 'foobar' respectively."
      },
    ],
  },
  {
    id: "next-permutation",
    title: "Next Permutation",
    difficulty: "Medium",
    tags: ["Array", "Two Pointers"],
    companies: [
      { name: "Amazon", frequency: 4 },
      { name: "Google", frequency: 3 },
      { name: "Microsoft", frequency: 2 },
    ],
    description:
      "A permutation of an array of integers is an arrangement of its members into a sequence or linear order. The next permutation of an array of integers is the next lexicographically greater permutation of its integer.",
    examples: [
      { 
        input: "nums = [1,2,3]", 
        output: "[1,3,2]" 
      },
      { 
        input: "nums = [3,2,1]", 
        output: "[1,2,3]" 
      },
    ],
  },
  {
    id: "longest-valid-parentheses",
    title: "Longest Valid Parentheses",
    difficulty: "Hard",
    tags: ["String", "Dynamic Programming", "Stack"],
    companies: [
      { name: "Amazon", frequency: 4 },
      { name: "Google", frequency: 3 },
      { name: "Microsoft", frequency: 2 },
    ],
    description:
      "Given a string containing just the characters '(' and ')', find the length of the longest valid (well-formed) parentheses substring.",
    examples: [
      { 
        input: "s = '(()'", 
        output: "2",
        explanation: "The longest valid parentheses substring is '()'."
      },
      { 
        input: "s = ')()())'", 
        output: "4",
        explanation: "The longest valid parentheses substring is '()()'."
      },
    ],
  },
  {
    id: "search-in-rotated-sorted-array",
    title: "Search in Rotated Sorted Array",
    difficulty: "Medium",
    tags: ["Array", "Binary Search"],
    companies: [
      { name: "Amazon", frequency: 5 },
      { name: "Microsoft", frequency: 4 },
      { name: "Google", frequency: 3 },
      { name: "Apple", frequency: 2 },
    ],
    description:
      "There is an integer array nums sorted in ascending order (with distinct values). Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k. Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.",
    examples: [
      { 
        input: "nums = [4,5,6,7,0,1,2], target = 0", 
        output: "4" 
      },
      { 
        input: "nums = [4,5,6,7,0,1,2], target = 3", 
        output: "-1" 
      },
    ],
  },
  {
    id: "find-first-and-last-position-of-element-in-sorted-array",
    title: "Find First and Last Position of Element in Sorted Array",
    difficulty: "Medium",
    tags: ["Array", "Binary Search"],
    companies: [
      { name: "Amazon", frequency: 4 },
      { name: "Microsoft", frequency: 3 },
      { name: "Google", frequency: 2 },
    ],
    description:
      "Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value. If target is not found in the array, return [-1, -1].",
    examples: [
      { 
        input: "nums = [5,7,7,8,8,10], target = 8", 
        output: "[3,4]" 
      },
      { 
        input: "nums = [5,7,7,8,8,10], target = 6", 
        output: "[-1,-1]" 
      },
    ],
  },
  {
    id: "search-insert-position",
    title: "Search Insert Position",
    difficulty: "Easy",
    tags: ["Array", "Binary Search"],
    companies: [
      { name: "Amazon", frequency: 3 },
      { name: "Microsoft", frequency: 2 },
      { name: "Apple", frequency: 2 },
    ],
    description:
      "Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.",
    examples: [
      { 
        input: "nums = [1,3,5,6], target = 5", 
        output: "2" 
      },
      { 
        input: "nums = [1,3,5,6], target = 2", 
        output: "1" 
      },
    ],
  },
  {
    id: "valid-sudoku",
    title: "Valid Sudoku",
    difficulty: "Medium",
    tags: ["Array", "Hash Table", "Matrix"],
    companies: [
      { name: "Amazon", frequency: 3 },
      { name: "Apple", frequency: 2 },
      { name: "Microsoft", frequency: 2 },
    ],
    description:
      "Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules: Each row must contain the digits 1-9 without repetition. Each column must contain the digits 1-9 without repetition. Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.",
    examples: [
      { 
        input: "board = [['5','3','.','.','7','.','.','.','.'],['6','.','.','1','9','5','.','.','.'],['.','9','8','.','.','.','.','6','.'],['8','.','.','.','6','.','.','.','3'],['4','.','.','8','.','3','.','.','1'],['7','.','.','.','2','.','.','.','6'],['.','6','.','.','.','.','2','8','.'],['.','.','.','4','1','9','.','.','5'],['.','.','.','.','8','.','.','7','9']]", 
        output: "true" 
      },
    ],
  },
  {
    id: "sudoku-solver",
    title: "Sudoku Solver",
    difficulty: "Hard",
    tags: ["Array", "Backtracking", "Matrix"],
    companies: [
      { name: "Amazon", frequency: 3 },
      { name: "Google", frequency: 2 },
      { name: "Microsoft", frequency: 2 },
    ],
    description:
      "Write a program to solve a Sudoku puzzle by filling the empty cells. A sudoku solution must satisfy all of the following rules: Each of the digits 1-9 must occur exactly once in each row. Each of the digits 1-9 must occur exactly once in each column. Each of the digits 1-9 must occur exactly once in each of the 9 3x3 sub-boxes of the grid.",
    examples: [
      { 
        input: "board = [['5','3','.','.','7','.','.','.','.'],['6','.','.','1','9','5','.','.','.'],['.','9','8','.','.','.','.','6','.'],['8','.','.','.','6','.','.','.','3'],['4','.','.','8','.','3','.','.','1'],['7','.','.','.','2','.','.','.','6'],['.','6','.','.','.','.','2','8','.'],['.','.','.','4','1','9','.','.','5'],['.','.','.','.','8','.','.','7','9']]", 
        output: "[['5','3','4','6','7','8','9','1','2'],['6','7','2','1','9','5','3','4','8'],['1','9','8','3','4','2','5','6','7'],['8','5','9','7','6','1','4','2','3'],['4','2','6','8','5','3','7','9','1'],['7','1','3','9','2','4','8','5','6'],['9','6','1','5','3','7','2','8','4'],['2','8','7','4','1','9','6','3','5'],['3','4','5','2','8','6','1','7','9']]" 
      },
    ],
  },
  {
    id: "count-and-say",
    title: "Count and Say",
    difficulty: "Medium",
    tags: ["String"],
    companies: [
      { name: "Amazon", frequency: 2 },
      { name: "Microsoft", frequency: 2 },
      { name: "Google", frequency: 1 },
    ],
    description:
      "The count-and-say sequence is a sequence of digit strings defined by the recursive formula: countAndSay(1) = '1', countAndSay(n) is the way you would 'say' the digit string from countAndSay(n-1), which is then converted into a different digit string.",
    examples: [
      { 
        input: "n = 1", 
        output: "'1'" 
      },
      { 
        input: "n = 4", 
        output: "'1211'",
        explanation: "countAndSay(1) = '1', countAndSay(2) = say '1' = one 1 = '11', countAndSay(3) = say '11' = two 1's = '21', countAndSay(4) = say '21' = one 2 + one 1 = '12' + '11' = '1211'"
      },
    ],
  },
  {
    id: "combination-sum",
    title: "Combination Sum",
    difficulty: "Medium",
    tags: ["Array", "Backtracking"],
    companies: [
      { name: "Amazon", frequency: 4 },
      { name: "Microsoft", frequency: 3 },
      { name: "Google", frequency: 2 },
    ],
    description:
      "Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.",
    examples: [
      { 
        input: "candidates = [2,3,6,7], target = 7", 
        output: "[[2,2,3],[7]]",
        explanation: "2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times. 7 is a candidate, and 7 = 7. These are the only two combinations."
      },
    ],
  },
  {
    id: "combination-sum-ii",
    title: "Combination Sum II",
    difficulty: "Medium",
    tags: ["Array", "Backtracking"],
    companies: [
      { name: "Amazon", frequency: 3 },
      { name: "Microsoft", frequency: 2 },
      { name: "Google", frequency: 2 },
    ],
    description:
      "Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sum to target. Each number in candidates may only be used once in the combination.",
    examples: [
      { 
        input: "candidates = [10,1,2,7,6,1,5], target = 8", 
        output: "[[1,1,6],[1,2,5],[1,7],[2,6]]" 
      },
    ],
  },
  {
    id: "first-missing-positive",
    title: "First Missing Positive",
    difficulty: "Hard",
    tags: ["Array", "Hash Table"],
    companies: [
      { name: "Amazon", frequency: 4 },
      { name: "Microsoft", frequency: 3 },
      { name: "Google", frequency: 2 },
    ],
    description:
      "Given an unsorted integer array nums, return the smallest missing positive integer. You must implement an algorithm that runs in O(n) time and uses constant extra space.",
    examples: [
      { 
        input: "nums = [1,2,0]", 
        output: "3" 
      },
      { 
        input: "nums = [3,4,-1,1]", 
        output: "2" 
      },
      { 
        input: "nums = [7,8,9,11,12]", 
        output: "1" 
      },
    ],
  },
  {
    id: "trapping-rain-water",
    title: "Trapping Rain Water",
    difficulty: "Hard",
    tags: ["Array", "Two Pointers", "Dynamic Programming", "Stack", "Monotonic Stack"],
    companies: [
      { name: "Amazon", frequency: 5 },
      { name: "Google", frequency: 4 },
      { name: "Microsoft", frequency: 3 },
      { name: "Apple", frequency: 2 },
    ],
    description:
      "Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.",
    examples: [
      { 
        input: "height = [0,1,0,2,1,0,1,3,2,1,2,1]", 
        output: "6",
        explanation: "The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped."
      },
    ],
  },
  {
    id: "multiply-strings",
    title: "Multiply Strings",
    difficulty: "Medium",
    tags: ["Math", "String", "Simulation"],
    companies: [
      { name: "Amazon", frequency: 3 },
      { name: "Microsoft", frequency: 2 },
      { name: "Google", frequency: 2 },
    ],
    description:
      "Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string. Note: You must not use any built-in BigInteger library or convert the inputs to integer directly.",
    examples: [
      { 
        input: "num1 = '2', num2 = '3'", 
        output: "'6'" 
      },
      { 
        input: "num1 = '123', num2 = '456'", 
        output: "'56088'" 
      },
    ],
  },
  {
    id: "wildcard-matching",
    title: "Wildcard Matching",
    difficulty: "Hard",
    tags: ["String", "Dynamic Programming", "Greedy", "Recursion"],
    companies: [
      { name: "Google", frequency: 4 },
      { name: "Amazon", frequency: 3 },
      { name: "Microsoft", frequency: 2 },
    ],
    description:
      "Given an input string (s) and a pattern (p), implement wildcard pattern matching with support for '?' and '*' where '?' matches any single character and '*' matches any sequence of characters (including the empty sequence).",
    examples: [
      { 
        input: "s = 'aa', p = 'a'", 
        output: "false",
        explanation: "'a' does not match the entire string 'aa'."
      },
      { 
        input: "s = 'aa', p = '*'", 
        output: "true",
        explanation: "'*' matches any sequence."
      },
    ],
  },
  {
    id: "jump-game-ii",
    title: "Jump Game II",
    difficulty: "Medium",
    tags: ["Array", "Dynamic Programming", "Greedy"],
    companies: [
      { name: "Amazon", frequency: 4 },
      { name: "Microsoft", frequency: 3 },
      { name: "Google", frequency: 2 },
    ],
    description:
      "Given an array of non-negative integers nums, you are initially positioned at the first index of the array. Each element in the array represents your maximum jump length at that position. Your goal is to reach the last index in the minimum number of jumps.",
    examples: [
      { 
        input: "nums = [2,3,1,1,4]", 
        output: "2",
        explanation: "The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index."
      },
    ],
  },
  {
    id: "permutations",
    title: "Permutations",
    difficulty: "Medium",
    tags: ["Array", "Backtracking"],
    companies: [
      { name: "Amazon", frequency: 4 },
      { name: "Microsoft", frequency: 3 },
      { name: "Google", frequency: 2 },
    ],
    description:
      "Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.",
    examples: [
      { 
        input: "nums = [1,2,3]", 
        output: "[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]" 
      },
    ],
  },
  {
    id: "permutations-ii",
    title: "Permutations II",
    difficulty: "Medium",
    tags: ["Array", "Backtracking"],
    companies: [
      { name: "Amazon", frequency: 3 },
      { name: "Microsoft", frequency: 2 },
      { name: "Google", frequency: 2 },
    ],
    description:
      "Given a collection of numbers, nums, that might contain duplicates, return all possible unique permutations in any order.",
    examples: [
      { 
        input: "nums = [1,1,2]", 
        output: "[[1,1,2],[1,2,1],[2,1,1]]" 
      },
    ],
  },
  {
    id: "rotate-image",
    title: "Rotate Image",
    difficulty: "Medium",
    tags: ["Array", "Math", "Matrix"],
    companies: [
      { name: "Amazon", frequency: 4 },
      { name: "Microsoft", frequency: 3 },
      { name: "Apple", frequency: 2 },
    ],
    description:
      "You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise). You have to rotate the image in-place, which means you have to modify the input 2D matrix directly.",
    examples: [
      { 
        input: "matrix = [[1,2,3],[4,5,6],[7,8,9]]", 
        output: "[[7,4,1],[8,5,2],[9,6,3]]" 
      },
    ],
  },
  {
    id: "group-anagrams",
    title: "Group Anagrams",
    difficulty: "Medium",
    tags: ["Array", "Hash Table", "String", "Sorting"],
    companies: [
      { name: "Amazon", frequency: 5 },
      { name: "Microsoft", frequency: 4 },
      { name: "Google", frequency: 3 },
      { name: "Apple", frequency: 2 },
    ],
    description:
      "Given an array of strings strs, group the anagrams together. You can return the answer in any order. An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.",
    examples: [
      { 
        input: "strs = ['eat','tea','tan','ate','nat','bat']", 
        output: "[['bat'],['nat','tan'],['ate','eat','tea']]" 
      },
    ],
  },
  {
    id: "powx-n",
    title: "Pow(x, n)",
    difficulty: "Medium",
    tags: ["Math", "Recursion"],
    companies: [
      { name: "Amazon", frequency: 3 },
      { name: "Microsoft", frequency: 2 },
      { name: "Google", frequency: 2 },
    ],
    description:
      "Implement pow(x, n), which calculates x raised to the power n (i.e., x^n).",
    examples: [
      { 
        input: "x = 2.00000, n = 10", 
        output: "1024.00000" 
      },
      { 
        input: "x = 2.10000, n = 3", 
        output: "9.26100" 
      },
      { 
        input: "x = 2.00000, n = -2", 
        output: "0.25000",
        explanation: "2^-2 = 1/2^2 = 1/4 = 0.25"
      },
    ],
  },
  {
    id: "n-queens",
    title: "N-Queens",
    difficulty: "Hard",
    tags: ["Array", "Backtracking"],
    companies: [
      { name: "Amazon", frequency: 3 },
      { name: "Google", frequency: 2 },
      { name: "Microsoft", frequency: 2 },
    ],
    description:
      "The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other. Given an integer n, return all distinct solutions to the n-queens puzzle. You may return the answer in any order.",
    examples: [
      { 
        input: "n = 4", 
        output: "[[\".Q..\",\"...Q\",\"Q...\",\"..Q.\"],[\"..Q.\",\"Q...\",\"...Q\",\".Q..\"]]",
        explanation: "There exist two distinct solutions to the 4-queens puzzle as shown above"
      },
    ],
  },
  {
    id: "n-queens-ii",
    title: "N-Queens II",
    difficulty: "Hard",
    tags: ["Backtracking"],
    companies: [
      { name: "Amazon", frequency: 2 },
      { name: "Google", frequency: 2 },
      { name: "Microsoft", frequency: 1 },
    ],
    description:
      "The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other. Given an integer n, return the number of distinct solutions to the n-queens puzzle.",
    examples: [
      { 
        input: "n = 4", 
        output: "2",
        explanation: "There are two distinct solutions to the 4-queens puzzle as shown."
      },
    ],
  },
  {
    id: "maximum-subarray",
    title: "Maximum Subarray",
    difficulty: "Medium",
    tags: ["Array", "Divide and Conquer", "Dynamic Programming"],
    companies: [
      { name: "Amazon", frequency: 5 },
      { name: "Microsoft", frequency: 4 },
      { name: "Google", frequency: 3 },
      { name: "Apple", frequency: 3 },
    ],
    description:
      "Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum. A subarray is a contiguous part of an array.",
    examples: [
      { 
        input: "nums = [-2,1,-3,4,-1,2,1,-5,4]", 
        output: "6",
        explanation: "[4,-1,2,1] has the largest sum = 6."
      },
    ],
  },
  {
    id: "spiral-matrix",
    title: "Spiral Matrix",
    difficulty: "Medium",
    tags: ["Array", "Matrix", "Simulation"],
    companies: [
      { name: "Amazon", frequency: 4 },
      { name: "Microsoft", frequency: 3 },
      { name: "Google", frequency: 2 },
    ],
    description:
      "Given an m x n matrix, return all elements of the matrix in spiral order.",
    examples: [
      { 
        input: "matrix = [[1,2,3],[4,5,6],[7,8,9]]", 
        output: "[1,2,3,6,9,8,7,4,5]" 
      },
    ],
  },
  {
    id: "jump-game",
    title: "Jump Game",
    difficulty: "Medium",
    tags: ["Array", "Dynamic Programming", "Greedy"],
    companies: [
      { name: "Amazon", frequency: 4 },
      { name: "Microsoft", frequency: 3 },
      { name: "Google", frequency: 2 },
    ],
    description:
      "You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position. Return true if you can reach the last index, or false otherwise.",
    examples: [
      { 
        input: "nums = [2,3,1,1,4]", 
        output: "true",
        explanation: "Jump 1 step from index 0 to 1, then 3 steps to the last index."
      },
      { 
        input: "nums = [3,2,1,0,4]", 
        output: "false",
        explanation: "You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index."
      },
    ],
  },
  {
    id: "merge-intervals",
    title: "Merge Intervals",
    difficulty: "Medium",
    tags: ["Array", "Sorting"],
    companies: [
      { name: "Amazon", frequency: 5 },
      { name: "Microsoft", frequency: 4 },
      { name: "Google", frequency: 3 },
      { name: "Apple", frequency: 2 },
    ],
    description:
      "Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.",
    examples: [
      { 
        input: "intervals = [[1,3],[2,6],[8,10],[15,18]]", 
        output: "[[1,6],[8,10],[15,18]]",
        explanation: "Since intervals [1,3] and [2,6] overlaps, merge them into [1,6]."
      },
    ],
  },
  {
    id: "insert-interval",
    title: "Insert Interval",
    difficulty: "Medium",
    tags: ["Array"],
    companies: [
      { name: "Amazon", frequency: 4 },
      { name: "Microsoft", frequency: 3 },
      { name: "Google", frequency: 2 },
    ],
    description:
      "You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval and intervals is sorted in ascending order by starti. You are also given an interval newInterval = [start, end] that represents the start and end of another interval. Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).",
    examples: [
      { 
        input: "intervals = [[1,3],[6,9]], newInterval = [2,5]", 
        output: "[[1,5],[6,9]]" 
      },
    ],
  },
  {
    id: "length-of-last-word",
    title: "Length of Last Word",
    difficulty: "Easy",
    tags: ["String"],
    companies: [
      { name: "Amazon", frequency: 2 },
      { name: "Microsoft", frequency: 2 },
      { name: "Apple", frequency: 1 },
    ],
    description:
      "Given a string s consisting of words and spaces, return the length of the last word in the string. A word is a maximal substring consisting of non-space characters only.",
    examples: [
      { 
        input: "s = 'Hello World'", 
        output: "5",
        explanation: "The last word is 'World' with length 5."
      },
    ],
  },
  {
    id: "spiral-matrix-ii",
    title: "Spiral Matrix II",
    difficulty: "Medium",
    tags: ["Array", "Matrix", "Simulation"],
    companies: [
      { name: "Amazon", frequency: 3 },
      { name: "Microsoft", frequency: 2 },
      { name: "Google", frequency: 2 },
    ],
    description:
      "Given a positive integer n, generate an n x n matrix filled with elements from 1 to n² in spiral order.",
    examples: [
      { 
        input: "n = 3", 
        output: "[[1,2,3],[8,9,4],[7,6,5]]" 
      },
    ],
  },
  {
    id: "permutation-sequence",
    title: "Permutation Sequence",
    difficulty: "Hard",
    tags: ["Math", "Recursion"],
    companies: [
      { name: "Amazon", frequency: 2 },
      { name: "Microsoft", frequency: 2 },
      { name: "Google", frequency: 1 },
    ],
    description:
      "The set [1, 2, 3, ..., n] contains a total of n! unique permutations. By listing and labeling all of the permutations in order, we get the following sequence for n = 3: '123', '132', '213', '231', '312', '321'. Given n and k, return the kth permutation sequence.",
    examples: [
      { 
        input: "n = 3, k = 3", 
        output: "'213'" 
      },
      { 
        input: "n = 4, k = 9", 
        output: "'2314'" 
      },
    ],
  },
  {
    id: "rotate-list",
    title: "Rotate List",
    difficulty: "Medium",
    tags: ["Linked List", "Two Pointers"],
    companies: [
      { name: "Amazon", frequency: 3 },
      { name: "Microsoft", frequency: 2 },
      { name: "Google", frequency: 2 },
    ],
    description:
      "Given the head of a linked list, rotate the list to the right by k places.",
    examples: [
      { 
        input: "head = [1,2,3,4,5], k = 2", 
        output: "[4,5,1,2,3]" 
      },
    ],
  },
  {
    id: "unique-paths",
    title: "Unique Paths",
    difficulty: "Medium",
    tags: ["Math", "Dynamic Programming", "Combinatorics"],
    companies: [
      { name: "Amazon", frequency: 4 },
      { name: "Microsoft", frequency: 3 },
      { name: "Google", frequency: 2 },
    ],
    description:
      "There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time. Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.",
    examples: [
      { 
        input: "m = 3, n = 7", 
        output: "28" 
      },
      { 
        input: "m = 3, n = 2", 
        output: "3",
        explanation: "From the top-left corner, there are a total of 3 ways to reach the bottom-right corner: 1. Right -> Down -> Down 2. Down -> Down -> Right 3. Down -> Right -> Down"
      },
    ],
  },
  {
    id: "unique-paths-ii",
    title: "Unique Paths II",
    difficulty: "Medium",
    tags: ["Array", "Dynamic Programming", "Matrix"],
    companies: [
      { name: "Amazon", frequency: 3 },
      { name: "Microsoft", frequency: 2 },
      { name: "Google", frequency: 2 },
    ],
    description:
      "You are given an m x n integer array grid. There is a robot initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m-1][n-1]). The robot can only move either down or right at any point in time. An obstacle and space are marked as 1 or 0 respectively in grid. A path that the robot takes cannot include any square that is an obstacle. Return the number of possible unique paths that the robot can take to reach the bottom-right corner.",
    examples: [
      { 
        input: "obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]", 
        output: "2",
        explanation: "There is one obstacle in the middle of the 3x3 grid above. There are two ways to reach the bottom-right corner: 1. Right -> Right -> Down -> Down 2. Down -> Down -> Right -> Right"
      },
    ],
  },
  {
    id: "minimum-path-sum",
    title: "Minimum Path Sum",
    difficulty: "Medium",
    tags: ["Array", "Dynamic Programming", "Matrix"],
    companies: [
      { name: "Amazon", frequency: 4 },
      { name: "Microsoft", frequency: 3 },
      { name: "Google", frequency: 2 },
    ],
    description:
      "Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right, which minimizes the sum of all numbers along its path. Note: You can only move either down or right at any point in time.",
    examples: [
      { 
        input: "grid = [[1,3,1],[1,5,1],[4,2,1]]", 
        output: "7",
        explanation: "Because the path 1 → 3 → 1 → 1 → 1 minimizes the sum."
      },
    ],
  },
  {
    id: "valid-number",
    title: "Valid Number",
    difficulty: "Hard",
    tags: ["String"],
    companies: [
      { name: "Amazon", frequency: 2 },
      { name: "Microsoft", frequency: 2 },
      { name: "Google", frequency: 1 },
    ],
    description:
      "A valid number can be split up into these components (in order): A decimal number or an integer. (Optional) An 'e' or 'E', followed by an integer. A decimal number can be split up into these components (in order): (Optional) A sign character (either '+' or '-'). One of the following formats: One or more digits, followed by a dot '.'. One or more digits, followed by a dot '.', followed by one or more digits. A dot '.', followed by one or more digits.",
    examples: [
      { 
        input: "s = '0'", 
        output: "true" 
      },
      { 
        input: "s = 'e'", 
        output: "false" 
      },
      { 
        input: "s = '.'", 
        output: "false" 
      },
    ],
  },
  {
    id: "plus-one",
    title: "Plus One",
    difficulty: "Easy",
    tags: ["Array", "Math"],
    companies: [
      { name: "Amazon", frequency: 3 },
      { name: "Google", frequency: 2 },
      { name: "Microsoft", frequency: 2 },
    ],
    description:
      "You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading zeros. Increment the large integer by one and return the resulting array of digits.",
    examples: [
      { 
        input: "digits = [1,2,3]", 
        output: "[1,2,4]",
        explanation: "The array represents the integer 123. Incrementing by one gives 123 + 1 = 124. Thus, the result should be [1,2,4]."
      },
      { 
        input: "digits = [9]", 
        output: "[1,0]",
        explanation: "The array represents the integer 9. Incrementing by one gives 9 + 1 = 10. Thus, the result should be [1,0]."
      },
    ],
  },
  {
    id: "add-binary",
    title: "Add Binary",
    difficulty: "Easy",
    tags: ["Math", "String", "Bit Manipulation", "Simulation"],
    companies: [
      { name: "Amazon", frequency: 3 },
      { name: "Microsoft", frequency: 2 },
      { name: "Apple", frequency: 2 },
    ],
    description:
      "Given two binary strings a and b, return their sum as a binary string.",
    examples: [
      { 
        input: "a = '11', b = '1'", 
        output: "'100'" 
      },
      { 
        input: "a = '1010', b = '1011'", 
        output: "'10101'" 
      },
    ],
  },
  {
    id: "text-justification",
    title: "Text Justification",
    difficulty: "Hard",
    tags: ["Array", "String", "Simulation"],
    companies: [
      { name: "Amazon", frequency: 3 },
      { name: "Google", frequency: 2 },
      { name: "Microsoft", frequency: 2 },
    ],
    description:
      "Given an array of strings words and a width maxWidth, format the text such that each line has exactly maxWidth characters and is fully (left and right) justified. You should pack your words in a greedy approach; that is, pack as many words as you can in each line.",
    examples: [
      { 
        input: "words = ['This', 'is', 'an', 'example', 'of', 'text', 'justification.'], maxWidth = 16", 
        output: "['This    is    an','example  of text','justification.  ']" 
      },
    ],
  },
  {
    id: "sqrt-x",
    title: "Sqrt(x)",
    difficulty: "Easy",
    tags: ["Math", "Binary Search"],
    companies: [
      { name: "Amazon", frequency: 3 },
      { name: "Microsoft", frequency: 2 },
      { name: "Apple", frequency: 2 },
    ],
    description:
      "Given a non-negative integer x, compute and return the square root of x. Since the return type is an integer, the decimal digits are truncated, and only the integer part of the result is returned.",
    examples: [
      { 
        input: "x = 4", 
        output: "2" 
      },
      { 
        input: "x = 8", 
        output: "2",
        explanation: "The square root of 8 is 2.82842..., and since the decimal part is truncated, 2 is returned."
      },
    ],
  },
  {
    id: "climbing-stairs",
    title: "Climbing Stairs",
    difficulty: "Easy",
    tags: ["Math", "Dynamic Programming", "Memoization"],
    companies: [
      { name: "Amazon", frequency: 4 },
      { name: "Microsoft", frequency: 3 },
      { name: "Apple", frequency: 2 },
      { name: "Google", frequency: 2 },
    ],
    description:
      "You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?",
    examples: [
      { 
        input: "n = 2", 
        output: "2",
        explanation: "There are two ways to climb to the top. 1. 1 step + 1 step 2. 2 steps"
      },
      { 
        input: "n = 3", 
        output: "3",
        explanation: "There are three ways to climb to the top. 1. 1 step + 1 step + 1 step 2. 1 step + 2 steps 3. 2 steps + 1 step"
      },
    ],
  },
];