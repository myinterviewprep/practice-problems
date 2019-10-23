/*

Comparing Strings containing Backspaces (medium)
Given two strings containing backspaces (identified by the character ‘#’), check if the two strings are equal.

Example 1:

Input: str1="xy#z", str2="xzz#"
Output: true
Explanation: After applying backspaces the strings become "xz" and "xz" respectively.
Example 2:

Input: str1="xy#z", str2="xyz#"
Output: false
Explanation: After applying backspaces the strings become "xz" and "xy" respectively.
Example 3:

Input: str1="xp#", str2="xyz##"
Output: true
Explanation: After applying backspaces the strings become "x" and "x" respectively.
In "xyz##", the first '#' removes the character 'z' and the second '#' removes the character 'y'.
Example 4:

Input: str1="xywrrmp", str2="xywrrmu#p"
Output: true
Explanation: After applying backspaces the strings become "xywrrmp" and "xywrrmp" respectively.


*/

const backspace_compare = function(str1, str2) {
  
  let index1=str1.length-1, index2=str2.length-1, backspace1=0, backspace2=0

  while(index1 >= 0 || index2 >=0){

    let char1 = str1[index1]

    console.log("char1:", char1);

    if(char1 == '#'){
      console.log("is backspace");
      backspace1++;
      index1--
      continue;
    }

    if(char1 != '#' && backspace1 > 0){
      console.log("edit index");
      index1-=backspace1;
      backspace1=0
    }

    char1 = str1[index1]

    console.log("char1:", char1);

    let char2 = str2[index2]

    console.log("char2:", char2);

    if(char2 == '#'){
      backspace2++;
      index2--
      continue;
    }

    if(char1 != '#' && backspace2>0){
      index2-=backspace2
      backspace2=0
    }
    
    char2 = str2[index2]

     
     if(char2 != char1){
       return false
     }
    
    index1--
    index2--


  }

  return true;
};


function getNextValidIndex(str, index){
  
}

backspace_compare("xywrrmp", "xywrrmu#p") 
