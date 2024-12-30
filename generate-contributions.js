const { execSync } = require("child_process");

// Configuration
const contributions2023 = 30; // Number of contributions for 2023
const contributions2024 = 60; // Number of contributions for 2024

// Helper to generate random dates
function randomDate(start, end) {
  const date = new Date(+start + Math.random() * (end - start));
  return date.toISOString().split(".")[0] + "Z"; // ISO format
}

// Generate random commits
function generateCommits(year, count) {
  const start = new Date(`${year}-01-01`);
  const end = new Date(`${year}-12-31`);

  for (let i = 0; i < count; i++) {
    const date = randomDate(start, end);
    const message = `Random commit ${i + 1} for ${year}`;
    execSync(`echo "${message}" >> contributions.txt`); // Add content
    execSync(`git add .`);
    execSync(`GIT_AUTHOR_DATE="${date}" GIT_COMMITTER_DATE="${date}" git commit -m "${message}"`);
  }
}

// Run the script
generateCommits(2023, contributions2023);
generateCommits(2024, contributions2024);

console.log("Random commits generated!");
