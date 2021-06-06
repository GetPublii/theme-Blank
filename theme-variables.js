/*
 * Custom function used to generate the output of the theme variables; more about it can be found at https://getpublii.com/dev/theme-variables/
 */

var generateThemeVariables = function(params) {
   let output = '';

      output += ` 
         :root {
             --main-width:   ${params.mainWidth};
             --sidebar-width:  ${params.sidebarWidth};
         }`;  

   return output;
}

module.exports = generateThemeVariables;