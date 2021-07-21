// Leetcode#21 - Merge Two Sorted Lists

// Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.

// Input: l1 = [1,2,4], l2 = [1,3,4]
// Output: [1,1,2,3,4,4]

l1 = [1, 2, 4];
l2 = [1, 3, 4];

const mergeTwoLists = (l1, l2) => {
  if (!l1 && l2) {
    return l2;
  } else if (!l2 && l1) {
    return l1;
  } else if (!l1 && !l2) {
    return [];
  } else {
    for (let i = 0; i < l2.length; i++) {
      l1.push(l2[i]);
    }
    return l1.sort((a, b) => {
      if (a > b) return 1;

      if (a < b) return -1;

      return 0;
    });
  }
};

console.log(mergeTwoLists(l1, l2));
