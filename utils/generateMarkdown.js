//Create badge badge for chosen license

function renderLicenseBadge(license) {
  const badges = {
    mit: "[![MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    apache2:
      "[![Apache 2](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
    gpl3: "[![GPL 3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
    bsd3: "[![BSD 3](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
    none: "",
  };
  return badges[license];
}

//Create a link for chosen license

function renderLicenseLink(license) {
  const licenseLinks = {
    mit: "[MIT](https://opensource.org/licenses/MIT)",
    apache2: "[Apache 2](https://opensource.org/licenses/Apache-2.0)",
    gpl3: "[GPL 3](https://www.gnu.org/licenses/gpl-3.0)",
    bsd3: "[BSD 3](https://opensource.org/licenses/BSD-3-Clause)",
    none: "",
  };
  return licenseLinks[license];
}

//Create the license section of README

function renderLicenseSection(license) {
  if (renderLicenseLink(license) !== "") {
    return `This project is protected under the ${renderLicenseLink(
      license
    )} license`;
  } else {
    return renderLicenseLink(license);
  }
}

//Generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description 
  ${data.description}

  ## Table of Contents
  - [Installation](#instalation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  Run the following command to install dependencies as needed:
  ${data.installation}
  
  ## Usage
  ${data.usage}

  ## License
  ${renderLicenseSection(data.license)}

  ## Contributing
  ${data.contributing}

  ## Tests
  Run the following command for tests: ${data.tests}

  ## Questions
  Visit my GitHub profile https://github.com/${data.username}
  For any additional questions, please reach me via email at ${data.email}
`;
}

module.exports = generateMarkdown;
