// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license){
    case 'None':
      return '';
    case 'MIT':
      var mitBadge = '![license](https://img.shields.io/badge/MIT-License-blue)';

      return mitBadge;
    case 'Apache 2.0':
      var apacheBadge = '![license](https://img.shields.io/badge/Apache-License-red)';

      return apacheBadge;
    case 'BSD':
      var bsdBadge = '![license](https://img.shields.io/badge/BSD-License-black)';

      return bsdBadge;
    case 'GPL':
      var gplBadge = '![license](https://img.shields.io/badge/GPL-License-green)';

      return gplBadge;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license){
    case 'None':
      return '';
    case 'MIT':
      return 'https://mit-license.org/';
    case 'Apache 2.0':
      return 'https://opensource.org/license/apache-2-0/';
    case 'BSD':
      return 'https://opensource.org/license/bsd-2-clause/';
    case 'GPL':
      return 'https://www.gnu.org/licenses/old-licenses/gpl-2.0.html';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch(license){
    case 'None':
      return '';
    case 'MIT':
      var mitSection = '\n ## License \n '  + renderLicenseLink(license);

      return mitSection;
    case 'Apache 2.0':
      var apacheSection = '\n ## License \n ' + renderLicenseLink(license);

      return apacheSection;
    case 'BSD':
      var bsdSection = '\n ## License \n ' + renderLicenseLink(license);

      return bsdSection;
    case 'GPL':
      var gplSection = '\n ## License \n ' + renderLicenseLink(license);

      return gplSection;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  var readMe = `# ${data.title} \n`
  + renderLicenseBadge(data.license) +
  `## Description \n
  ${data.description} \n \n
  ## Table of Contents \n 
  [Installation](#installation) \n
  [Usage](#usage) \n
  [Contributions](#contribution) \n
  [Instructions](#how_to_use) \n
  [Questions](#questions) \n
  [Licensing](#licensing) \n \n
  ## Installation \n
  ${data.install} \n \n
  ## Usage \n
  ${data.usage} \n \n
  ## Contribution \n
  ${data.contributions} \n \n 
  ## How to use \n
  ${data.instructions} \n \n
  ## Questions \n
  Author of this program: github.com/${data.username} \n
  For any inquiries: ${data.email} \n \n` + 
  renderLicenseSection(data.license);

  return readMe;
}

module.exports = generateMarkdown;
