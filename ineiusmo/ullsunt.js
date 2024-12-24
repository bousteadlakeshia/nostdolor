// Sample array of objects
const source = [
  { id: 1, name: 'Item 1', opacity: 0.5 },
  { id: 2, name: 'Item 2', opacity: 0.8 },
  { id: 3, name: 'Item 3', opacity: 0.3 }
];

// Set opacity of all items to 1
source.forEach(item => item.opacity = 1);

// Output the modified array to verify changes
console.log(source);
/*
[
  { id: 1, name: 'Item 1', opacity: 1 },
  { id: 2, name: 'Item 2', opacity: 1 },
  { id: 3, name: 'Item 3', opacity: 1 }
]
*/
