// Custom function used to generate the output of the override css file; its content is appended to the end of the file.

var generateOverride = function (params) {
    let output = '';

    // check that the values of the following options (defined in config.json in customConfig section) are the same as those in the main.css file, if so, do not generate the override of this CSS rules
    if (
       params.mainWidth !== '860px' ||
       params.sidebarWidth !== '300px') {
       output += `
       :root {
          --main-width:   ${params.mainWidth};
          --sidebar-width:  ${params.sidebarWidth};
        }`;
   }   
    
    return output;
}

module.exports = generateOverride;
