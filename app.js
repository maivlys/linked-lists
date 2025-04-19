class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    if (this.head === null) {
      this.head = new Node(value);
    } else {
      let current = this.head;
      while (current.nextNode !== null) {
        current = current.nextNode;
      }
      current.nextNode = new Node(value);
    }
  }

  prepend(value) {
    let node = this.head;
    this.head = new Node(value, node);
  }

  size() {
    let cnt = 1;
    let current = this.head;
    if (current === null) {
      return 0;
    }
    while (current.nextNode !== null) {
      current = current.nextNode;
      cnt++;
    }
    return cnt;
  }

  getHead() {
    return this.head;
  }

  getTail() {
    let current = this.head;
    if (current === null) {
      return this.head;
    }
    while (current.nextNode !== null) {
      current = current.nextNode;
    }
    return current;
  }

  at(index) {
    let current = this.head;
    if (current === null) {
      return 0;
    }
    for (let i = 0; i < index; i++) {
      current = current.nextNode;
    }
    if (current === null) {
      current = "index is bigger than the list";
    } else {
      current = current.value;
    }
    return current;
  }

  pop() {
    let current = this.head;
    if (current === null) {
      return;
    }
    while (current.nextNode.nextNode !== null) {
      current = current.nextNode;
    }
    current.nextNode = null;
  }

  contains(value) {
    let current = this.head;
    if (current === null) {
      return false;
    }
    while (current !== null) {
      if (current.value === value) {
        return true;
      }
      current = current.nextNode;
    }
    return false;
  }

  find(value) {
    let cnt = 0;
    let current = this.head;
    if (current === null) {
      return null;
    }
    while (current !== null) {
      if (current.value === value) {
        return cnt;
      }
      current = current.nextNode;
      cnt++;
    }
    return null;
  }

  toString() {
    let output = "";
    let current = this.head;
    if (current === null) {
      output = `list empty`;
      return output;
    }
    while (current !== null) {
      output = output + ` ( ${current.value} ) ->`;
      current = current.nextNode;
    }
    output = output + ` null`;
    return output;
  }

  insertAt(value, index) {
    let current = this.head;
    let cnt = 0;
    if (index === 0) {
      let nodeToMove = this.head;
      this.head = new Node(value, nodeToMove);
    } else {
      for (let i = 0; i < index - 1; i++) {
        if (current.nextNode !== null) {
          current = current.nextNode;
          cnt++;
        } else {
          console.log("list is not long enough, choose a lower index");
          return;
        }
      }
      let nodeToMove = current.nextNode;
      current.nextNode = new Node(value, nodeToMove);
    }
  }

  removeAt(index) {
    let current = this.head;
    if (index === 0) {
      let replacingNode = this.head.nextNode;
      this.head = replacingNode;
    } else {
      for (let i = 0; i < index - 1; i++) {
        if (current.nextNode === null) {
          console.log("given index is out of the list"); //9+
          return;
        }
        current = current.nextNode;
      }

      if (current === null || current.nextNode === null) {
        return;
      } else {
        let replacingNode = current.nextNode.nextNode;
        current.nextNode = replacingNode;
      }
    }
  }
}

class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

let list = new LinkedList();
list.append("martin");
list.append("jozo");
list.prepend("jano");
list.prepend("adam");
list.pop();
list.contains("johan");
list.append("jozo");
console.log(list);
list.find("edo");
console.log("---");
list.insertAt("b", 1);
list.insertAt("c", 0);
list.insertAt("a", 3);
list.insertAt("last11", 11);
console.log(list.toString());
list.removeAt(1);
console.log(list.toString());
