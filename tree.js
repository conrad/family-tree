
var tree = {  name: "Nancy",
              parent: null,
              children: [ 
                { name: "Adam",
                  parent: "Nancy",
                  children: [] 
                },
                { name: "Jill",
                  parent: "Nancy",
                  children: [ 
                    { name: "Kevin",
                      parent: "Jill",
                      children: [ 
                        { name: "Samuel",
                          parent: "Kevin",
                          children: []
                        },
                        { name: "George",
                          parent: "Kevin",
                          children: [
                            { name: "Robert",
                              parent: "George",
                              children: []
                            },
                            { name: "Patrick",
                              parent: "George",
                              children: []
                            } 
                          ]
                        },
                        { name: "James",
                          parent: "Kevin",
                          children: [
                            { name: "Mary",
                              parent: "James",
                              children: []
                            }
                          ]
                        },
                        { name: "Aaron",
                          parent: "Kevin",
                          children: []
                        }
                      ]
                    }
                  ]
                },
                { name: "Carl",
                  parent: "Nancy",
                  children: [
                    { name: "Catherine",
                      parent: "Carl",
                      children: []
                    },
                    { name: "Joseph",
                      parent: "Carl",
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

// noChildren(tree);


function findGrandparent(node1, person1){
  
  function findParent(node2, person2){
    
    if (node2.name === person2){
      // console.log('person found:', node2.name);
      if (node2.parent) {
        // console.log('parent found:', node2.parent);
        return node2.parent;  // just returning parent's name
      } else {
        // if no parent, return null;
        console.log('The person '+ node2.name +' does not have a parent listed');
        return null;
      }
    }

    for (var i = 0; i < node2.children.length; i++){
      var parent = findParent(node2.children[i], person2);
      // return result of recursion if person's parent found
      if (parent){
        return parent;
      }
    }
  }

  var parent = findParent(node1, person1);
  // console.log('returned parent:', parent);
  var grandparent = findParent(node1, parent);
  console.log(grandparent);
  return grandparent;
}

findGrandparent(tree, "James");


// function nameChildren(node, name) {
//   if (node.name === name) {
//     console.log(node.children);
//     return node.children;
//   }
//   for (var i = 0; i < node.children.length; i++) {
//     nameChildren(node.children[i], name);
//   }
// }

// // nameChildren(tree, "Kevin");
