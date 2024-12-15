// Array of student ages
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// 1. Sort the array and find the min and max age
const sortedAges = [...ages].sort((a, b) => a - b);
const minAge = sortedAges[0];
const maxAge = sortedAges[sortedAges.length - 1];
console.log("Sorted Ages:", sortedAges);
console.log("Min Age:", minAge);
console.log("Max Age:", maxAge);

// 2. Find the median age
let medianAge;
const middleIndex = Math.floor(sortedAges.length / 2);
if (sortedAges.length % 2 === 0) {
    // Even length: average of two middle values
    medianAge = (sortedAges[middleIndex - 1] + sortedAges[middleIndex]) / 2;
} else {
    // Odd length: the middle value
    medianAge = sortedAges[middleIndex];
}
console.log("Median Age:", medianAge);

// 3. Find the average age
const sumAges = ages.reduce((sum, age) => sum + age, 0);
const averageAge = sumAges / ages.length;
console.log("Average Age:", averageAge.toFixed(2));

// 4. Find the range of the ages
const ageRange = maxAge - minAge;
console.log("Age Range:", ageRange);

// 5. Compare the value of (min - average) and (max - average)
const minDifference = Math.abs(minAge - averageAge);
const maxDifference = Math.abs(maxAge - averageAge);
console.log("Min - Average (abs):", minDifference.toFixed(2));
console.log("Max - Average (abs):", maxDifference.toFixed(2));

// Final output
console.log(`
  Results:
  - Min Age: ${minAge}
  - Max Age: ${maxAge}
  - Median Age: ${medianAge}
  - Average Age: ${averageAge.toFixed(2)}
  - Age Range: ${ageRange}
  - Min - Average (abs): ${minDifference.toFixed(2)}
  - Max - Average (abs): ${maxDifference.toFixed(2)}
`);