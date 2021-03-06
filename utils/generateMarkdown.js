// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    return `![https://choosealicense.com](https://shields.io/badge/license-${license}-green)`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return `https://choosealicense.com/licenses/mit/`;
  } else if (license === "apache") {
    return `https://choosealicense.com/licenses/apache-2.0/`;
  } else if (license === "mozilla") {
    return `https://choosealicense.com/licenses/mpl-2.0/`;
  } else if (license === "no license") {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == "MIT" || license == "apache" || license == "mozilla") {
    return `## License
${renderLicenseBadge(license)}
* ${renderLicenseLink(license)}`;
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  # Description
  
  ${data.description}

  # Table of Contents  
 
  * [Installation](#installation)  
  * [Usage](#usage)  
  * [Contributing](#contributing) 
  * [Questions](#questions) 
  * [Tests](#tests)  
  * [License](#license)

  ## Installation  
  ${data.installation}  

  ## Usage  
  ${data.usage} 
  
  ${renderLicenseSection(data.license)}

  ## Contributing
  ${data.contributing} 
  
  ## Tests  
  ${data.tests}

  ## Questions
  If you have any questions, please contact me at ${data.email}.  
  You can also visit my [Github Page](https://github.com/${data.github}).  
`;
}

module.exports = generateMarkdown;
