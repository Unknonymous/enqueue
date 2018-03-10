function SLNode(value){
    this.val = value;
    this.next = null;
    }
function SLQueue() {
    var head = null; // This points at the first node in the queue
    var tail = null; // This point at the last node in the queue
    
    this.enqueue = function(val){
        //assign a value to the first available node in the queue
        var newNode = new SLNode(val)
        if (head == null){
            head =  node;
            tail = head;
        }
        else{
            if (tail === head){
                head.next = newNode;
                tail = head.next;
            }else{
                tail.next = newNode;
                tail = tail.next;
            }
        }
        console.log (tail.val);
    };
}

var queue = new SLQueue();
queue.enqueue(3);
queue.enqueue(4);