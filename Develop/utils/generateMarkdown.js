// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'ISC'){
    return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`
  }
  else if (license === 'MIT') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }
  else if (license === 'GNU') {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  }
  else {
    return ``
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}
# Table of Contents
1. [Description](#description)
2. [Installation Instructions](#installation)
3. [Usage Information](#usage)
4. [Contribution Guidlines](#contribution)
5. [License](#license)
6. [Test Instructions](#test)
7. [Questions](#email)
## Description
${data.description}
## Installation Instructions
${data.installation}
## Usage Information
${data.usage}
## Contribution Guidlines
${data.contribution}
## License 
${data.license}
## Test Instructions
${data.test}
## Questions
for any questions please reach out to ${data.email}
or check me out at http://github.com/${data.github}
`;
}

module.exports = generateMarkdown;
