/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
https://leetcode.com/problems/add-two-numbers/
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */



var addTwoNumbers = function(l1, l2) {
    var a = l1.val;
    var b = l2.val;
    var nextNodeL1 = l1;
    var nextNodeL2 = l2;
    var currentNodeVal = a + b;
    var carryOver = 0;
    if(currentNodeVal >= 10){
        currentNodeVal = currentNodeVal -10;
        carryOver = 1;
    }
    var head = new ListNode(currentNodeVal, null);
    var currentNode = head;
    if(nextNodeL1.next == null && nextNodeL2.next==null && carryOver ==1){
         newNode = new ListNode(1, null);
            currentNode.next = newNode;
            currentNode = newNode;
    }
    while(nextNodeL1 != null || nextNodeL2 != null){
        currentNodeVal = 0;
        if(nextNodeL1 != null){
            nextNodeL1 = nextNodeL1.next;
            if(nextNodeL1 != null)
                currentNodeVal += nextNodeL1.val;
        }
        if(nextNodeL2 != null){
            nextNodeL2 = nextNodeL2.next;
            if(nextNodeL2 != null)
                currentNodeVal += nextNodeL2.val;
        }
        
        currentNodeVal += carryOver;
        if(currentNodeVal >= 10){
            currentNodeVal = currentNodeVal -10;
            carryOver = 1; 
        }
        else{
            carryOver = 0;
        }
        
        
        if(nextNodeL1 == null && nextNodeL2 == null && carryOver == 0){
            continue;
        }
        var newNode =  new ListNode(currentNodeVal, null);
        currentNode.next = newNode;
        currentNode = newNode;
        if((nextNodeL1 ==null || nextNodeL1.next == null) && (nextNodeL2 == null || nextNodeL2.next == null) && carryOver == 1){
            console.log("currentNodeValdd", currentNodeVal, carryOver)
            newNode = new ListNode(1, null);
            currentNode.next = newNode;
            currentNode = newNode;
            continue;
        }
    }
    return head;
};