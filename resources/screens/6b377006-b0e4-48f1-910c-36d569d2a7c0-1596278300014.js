jQuery("#simulation")
  .on("click", ".s-6b377006-b0e4-48f1-910c-36d569d2a7c0 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Label_83")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-6b377006-b0e4-48f1-910c-36d569d2a7c0 #s-Label_83 span": {
                      "attributes": {
                        "color": "#80B8F1"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-6b377006-b0e4-48f1-910c-36d569d2a7c0 #s-Image_7 > svg": {
                      "attributes": {
                        "overlay": "#80B8F1"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-6b377006-b0e4-48f1-910c-36d569d2a7c0 #s-Label_83 span": {
                      "attributes": {
                        "color": "#007DFF"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 300
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-6b377006-b0e4-48f1-910c-36d569d2a7c0 #s-Image_7 > svg": {
                      "attributes": {
                        "overlay": "#157EFB"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "isbackward": true,
                    "transition": {
                      "type": "slideup",
                      "duration": 700
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_90")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/45420977-ccb0-44c3-8609-8033d81b7649",
                    "transition": {
                      "type": "slideright",
                      "duration": 700
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_18")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-6b377006-b0e4-48f1-910c-36d569d2a7c0 #s-Image_90 > svg": {
                      "attributes": {
                        "overlay": "#A9A9A9"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-6b377006-b0e4-48f1-910c-36d569d2a7c0 #s-Label_9": {
                      "attributes": {
                        "font-size": "8.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-6b377006-b0e4-48f1-910c-36d569d2a7c0 #s-Label_9 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-6b377006-b0e4-48f1-910c-36d569d2a7c0 #s-Label_9 span": {
                      "attributes": {
                        "color": "#A9A9A9",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "8.0pt"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-6b377006-b0e4-48f1-910c-36d569d2a7c0 #s-Image_18 > svg": {
                      "attributes": {
                        "overlay": "#F92C52"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-6b377006-b0e4-48f1-910c-36d569d2a7c0 #s-Label_22": {
                      "attributes": {
                        "font-size": "8.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-6b377006-b0e4-48f1-910c-36d569d2a7c0 #s-Label_22 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-6b377006-b0e4-48f1-910c-36d569d2a7c0 #s-Label_22 span": {
                      "attributes": {
                        "color": "#F92C52",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "8.0pt"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-6b377006-b0e4-48f1-910c-36d569d2a7c0 #s-Image_91 > svg": {
                      "attributes": {
                        "overlay": "#A9A9A9"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-6b377006-b0e4-48f1-910c-36d569d2a7c0 #s-Label_23": {
                      "attributes": {
                        "font-size": "8.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-6b377006-b0e4-48f1-910c-36d569d2a7c0 #s-Label_23 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-6b377006-b0e4-48f1-910c-36d569d2a7c0 #s-Label_23 span": {
                      "attributes": {
                        "color": "#A9A9A9",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "8.0pt"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_91")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-6b377006-b0e4-48f1-910c-36d569d2a7c0 #s-Image_90 > svg": {
                      "attributes": {
                        "overlay": "#A9A9A9"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-6b377006-b0e4-48f1-910c-36d569d2a7c0 #s-Label_9": {
                      "attributes": {
                        "font-size": "8.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-6b377006-b0e4-48f1-910c-36d569d2a7c0 #s-Label_9 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-6b377006-b0e4-48f1-910c-36d569d2a7c0 #s-Label_9 span": {
                      "attributes": {
                        "color": "#A9A9A9",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "8.0pt"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-6b377006-b0e4-48f1-910c-36d569d2a7c0 #s-Image_18 > svg": {
                      "attributes": {
                        "overlay": "#A9A9A9"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-6b377006-b0e4-48f1-910c-36d569d2a7c0 #s-Label_22": {
                      "attributes": {
                        "font-size": "8.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-6b377006-b0e4-48f1-910c-36d569d2a7c0 #s-Label_22 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-6b377006-b0e4-48f1-910c-36d569d2a7c0 #s-Label_22 span": {
                      "attributes": {
                        "color": "#A9A9A9",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "8.0pt"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-6b377006-b0e4-48f1-910c-36d569d2a7c0 #s-Image_91 > svg": {
                      "attributes": {
                        "overlay": "#F92C52"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-6b377006-b0e4-48f1-910c-36d569d2a7c0 #s-Label_23": {
                      "attributes": {
                        "font-size": "8.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-6b377006-b0e4-48f1-910c-36d569d2a7c0 #s-Label_23 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-6b377006-b0e4-48f1-910c-36d569d2a7c0 #s-Label_23 span": {
                      "attributes": {
                        "color": "#F92C52",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "8.0pt"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/45420977-ccb0-44c3-8609-8033d81b7649",
                    "transition": {
                      "type": "slideright",
                      "duration": 700
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_13")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/a69efcd7-35ca-474d-ae75-8da5674944d3",
                    "transition": {
                      "type": "slideleft",
                      "duration": 700
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_26")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/43579c06-bd34-4242-9767-af0e46b792f2",
                    "transition": {
                      "type": "slideleft",
                      "duration": 700
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("pageload", ".s-6b377006-b0e4-48f1-910c-36d569d2a7c0 .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Text_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_4" ],
                    "value": {
                      "action": "jimSubstring",
                      "parameter": [ {
                        "action": "jimSystemTime"
                      },"0","5" ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });