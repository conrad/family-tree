
var tree = {  name: "Nancy",
              children: [ 
                { name: "Adam",
                  children: [] 
                },
                { name: "Jill",
                  children: [ 
                    { name: "Kevin",
                      children: [ 
                        { name: "Samuel",
                          children: []
                        },
                        { name: "George",
                          children: [
                            { name: "Robert",
                              children: []
                            },
                            { name: "Patrick",
                              children: []
                            } 
                          ]
                        },
                        { name: "James",
                          children: [
                            { name: "Mary",
                              children: []
                            }
                          ]
                        },
                        { name: "Aaron",
                          children: []
                        }
                      ]
                    }
                  ]
                },
                { name: "Carl",
                  children: [
                    { name: "Catherine",
                      children: []
                    },
                    { name: "Joseph",
                      children: []
                    }
                  ]
                }
              ]
            };


// fucntion that prints the name of all people with no children
function noChildren(node) {

  if (node.children.length < 1) {
    console.log(node.name);
    return node.name;     // return is not important as output for the prompt, but is needed to cut off recursive calls
  } 
  // console.log('now we are at', node);
  for (var i = 0; i < node.children.length; i++) {
    noChildren(node.children[i]);
  }
}

noChildren(tree);




