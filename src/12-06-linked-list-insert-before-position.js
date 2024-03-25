function createLinkedList() {
    let head = null;

    function insertHead(newData) {
        const newNode = {
            data: newData,
            next: null,
        }

        if (head == null) {
            head = newNode;
            return;
        }

        // otherwise, linked list has some items
        newNode.next = head;
        head = newNode;
    }
  
    function insertBeforePosition(data, position) {
        if (position <= 0 || head == null) {
            insertHead(data);
            return head;
        }

        let prev = head;
        let curr = head;
        let i = 0;

        while (curr != null && i < position) {
            prev = curr;
            curr = curr.next;
            i++;
        }

        // found node to insert
        const newNode = {
            data: data,
            next: curr,
        };
        prev.next = newNode;
        return head;
      }
      
      
  
    return {
      insertBeforePosition,
    };
  }