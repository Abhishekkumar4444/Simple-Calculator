// A utility function to get the maximum value in an array
function getMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

// A function to do counting sort based on significant place value
function countingSort(arr, exp) {
  const n = arr.length;
  const output = new Array(n);
  const count = new Array(10).fill(0);

  // Count the occurrences of digits at the current significant place
  for (let i = 0; i < n; i++) {
    const digit = Math.floor(arr[i] / exp) % 10;
    count[digit]++;
  }

  // Modify count array to store the position of each digit in output
  for (let i = 1; i < 10; i++) {
    count[i] += count[i - 1];
  }

  // Build the output array by placing elements in their correct positions
  for (let i = n - 1; i >= 0; i--) {
    const digit = Math.floor(arr[i] / exp) % 10;
    output[count[digit] - 1] = arr[i];
    count[digit]--;
  }

  // Copy the sorted elements back to the original array
  for (let i = 0; i < n; i++) {
    arr[i] = output[i];
  }
}

function radixSort(arr) {
  const max = getMax(arr);

  // Perform counting sort for every significant place value
  for (let exp = 1; max / exp > 0; exp *= 10) {
    countingSort(arr, exp);
  }

  return arr;
}

// Example usage:
const unsortedArray = [170, 45, 75, 90, 802, 24, 2, 66];
const sortedArray = radixSort(unsortedArray);
console.log("Sorted Array (Radix Sort):", sortedArray);
