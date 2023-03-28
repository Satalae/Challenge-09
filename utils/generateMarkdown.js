// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} \n \n
  ## Description \n
  ${data.description} \n \n
  ## Table of Contents \n 
  [Installation](#installation) \n
  [Usage](#usage) \n
  [Instructions](#instructions) \n
  [Contributions](#contribution) \n \n
  ## Installation \n
  ${data.install} \n \n
  ## Usage \n
  ${data.usage} \n \n
  ## Instructions \n
  ${data.instructions} \n \n
  ## Contribution \n
  ${data.contributions}
`;
}

module.exports = generateMarkdown;
