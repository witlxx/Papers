/**
 * 什么叫链表=> 无序有秩,无法通过下标标定而单独输出元素,只能通过前后元素之间的存储关系进行打印
 * 如:顺序表中查找num,根据下表遍历,比较得出
 *    链表需要给定一个起点,然后不断的next下去,所以head是一个头地址 (头指针) 的作用
 */
function printListFromTailToHead(head) //head为ListNode类型的数据,head: ListNode {value: x, next: null}
{
    let node = new Stack();    
    let arr = [];
    /**
     * 压栈 => 判空 => 出栈 
     * 链表{4, 5, 65, 7} => {val:4, next:{val:5, next:{val:65, next:{val:7, next:null}}}}
     */
    node.init();
    if(!head) {
        return [];
    } else {
        while(head.next != null) {
            node.push(head.val);
            head = head.next;
        }
        node.push(head.val);
        while(!node.empty()) {
            arr.push(node.pop());
        }
        return arr;
    }
}
module.exports = {
    printListFromTailToHead : printListFromTailToHead
};

function ListNode (x) {
    this.val = x;
    this.next = null;
} 

function Stack() {
    this.maxLength = 0;
    this.indexTop = -1;
    this.box = [];

    this.init = () => {
        this.box[this.maxLength] = this.indexTop;
    }

    this.push = (x) => {
        this.maxLength++;
        this.box[this.maxLength] = x;
    };

    this.pop = () => {
        let re = this.box[this.maxLength];
        this.maxLength--;
        return re;
        console.log(re);
    } 

    this.empty = () => {
        if(this.box[this.maxLength] == this.indexTop) {
            return true;
        } else {
            return false;
        }
    }
}
