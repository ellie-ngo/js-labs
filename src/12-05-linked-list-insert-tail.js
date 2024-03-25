function createLinkedList() {
    let head = null;

    function getTail() {
        if (head == null) return null;

        let tail = head;
        while (tail.next != null) {
            tail = tail.next;
        }

        return tail;
    }

    function insertTail(data) {
      const newNode = {
        data: data,
        next: null
      }
      if (head == null) {
        head = newNode;
        } else {
          const tail = getTail();
          tail.next = newNode;
        }

        return head;
      }
      
    function printList() {
      if (head == null) return;
  
      let current = head;
      while (current != null) {
        console.log(current.data);
  
        current = current.next;
      }
    }
  
    return {
      getTail,
      insertTail,
      printList,
    };

  }

  