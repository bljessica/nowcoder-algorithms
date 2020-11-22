//冒泡排序
//基本思想：两个数比较大小，较大的数下沉，较小的数冒起来。
function bubbleSort(arr) {
    for(let i = 0; i < arr.length - 1; i++) { //趟数
        for(let j = arr.length - 1; j > 0; j--) {
            if(arr[j] < arr[j - 1]) {
                let tmp = arr[j];
                arr[j] = arr[j - 1];
                arr[j - 1] = tmp;
            }
        }
    }
    return arr;
}

//选择排序
// 基本思想：
// 在长度为N的无序数组中，第一次遍历n-1个数，找到最小的数值与第一个元素交换；
// 第二次遍历n-2个数，找到最小的数值与第二个元素交换；
// 。。。
// 第n-1次遍历，找到最小的数值与第n-1个元素交换，排序完成。

//插入排序

//希尔排序

//归并排序

//快速排序

//堆排序

//计数排序

//桶排序

//基数排序

let arr = [4, 789, 90, 34, 333, 24, 1, 5, 8, 23, 77];
// console.log(bubbleSort(arr));