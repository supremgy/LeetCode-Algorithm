class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        vector<int> result;
        for(int i = 0;i<nums.size()-1;i++){
            int num1 = nums[i];
            for(int j = i+1; j<nums.size();j++){
                int num2 = nums[j];
                if(num1 +num2 == target){
                    result.push_back(i);
                    result.push_back(j);
                    return result;
                }
            }
        }
        return result;
    }
};