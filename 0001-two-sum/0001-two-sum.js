/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let result= []
    for(let i = 0;i<nums.length-1;i++){
        let num1 = nums[i]
        for(let j = i+1; j<nums.length;j++){
            let num2 = nums[j]
            if(num1 + num2 ===target){
                result.push(i)
                result.push(j)
                return result
            }
        }
    }
    
};