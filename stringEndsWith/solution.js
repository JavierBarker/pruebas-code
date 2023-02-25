function solution(str, ending) {
  // console.log(ending.charAt(ending.length - 2));
  // return ending.charAt(ending.length - 2);
  return str.charAt(str.length - 2) == ending.charAt(ending.length - 2);
}

console.log(solution('abcde', 'cde') == true);
console.log(solution('abcde', 'abc') == false);
