(function(window, undefined) {
  var dictionary = {
    "6b377006-b0e4-48f1-910c-36d569d2a7c0": "Create Card Screen",
    "45420977-ccb0-44c3-8609-8033d81b7649": "Slide menu screen",
    "43579c06-bd34-4242-9767-af0e46b792f2": "Settings Screen",
    "74b5b120-b8dd-4ade-a080-73cb54d20681": "Loading Screen",
    "a69efcd7-35ca-474d-ae75-8da5674944d3": "Offers Screen",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);