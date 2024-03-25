function createLinkedList() {
    let head = null;
  
    function getHead() {
      return head;
    }
  
    function insertHead(data) {
      const newNode = {
        data,
        next: null,
      };
  
      // in case linked list is empty, use it as head
      if (!head) {
        head = newNode;
        return head;
      }
  
      // Otherwise, assign head to newNode
      newNode.next = head;
      head = newNode;
      return head;
    }
  
    function some(isValidFn) {
        if (head == null) return false;
        let curr = head;
        while (curr != null) {
        if (isValidFn(curr.data)) return true;
        curr = curr.next;
    }
    
    return false;
    }
  
    return {
      getHead,
      insertHead,
      some,
    };
  }