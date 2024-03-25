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

    function removeHead() {
        if (head != null) head = head.next;

        return head;
    }

    function removeTail() {
        if (head != null) return null;

        if (head.next == null) {
            head = null;
            return head;
        } 

        let secondLast = head;
        while (secondLast.next.next != null) {
            secondLast = secondLast.next;
        }

        secondLast.next = null;
        return head;
    }

    function removeAtPosition() {
        if (position <= 0 || head == null) return removeHead();

        if (head.next == null) {
            head = null;
            return head;
        }

        let prev = head;
        let curr = head;
        let i = 0;

        while (curr.next != null && i < position) {
            prev = curr;
            curr = curr.next;
            i++;
        }

        prev.next = curr.next;
        return head;
    }
    return {
      getTail,
      insertHead,
      insertTail,
      insertBeforePosition,
      removeHead,
      removeTail,
      removeAtPosition,
    };

  }

  