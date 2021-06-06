// Custom function used to generate the output of the override css file; its content is appended to the end of the file; more about it can be found at https://getpublii.com/dev/visual-overrides/#visual-overrides

var generateOverride = function (params) {
    let output = '';

    // check that the values of the following options (defined in config.json in customConfig section) are the same as those in the main.css file, if so, do not generate the override of this CSS rules
    if (params.fontSize !== '1') {
      output += `
      body {
        font-size: ${params.fontSize}rem;
      }`;
  }
    
    return output;
}

module.exports = generateOverride;
