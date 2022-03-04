/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isSubsequence = function (sub, main) {
    let result = true;
    let i = 0,
      j = 0;
    while (i < main.length) {
      if (main[i] === sub[j]) {
        i++;
        j++;
      }
  
      if (main[i] !== sub[j]) {
        i++;
      }
    }
    if (sub.length === j) {
      result = true;
    } else {
      result = false;
    }
    return result;
  };
  
  let sub = 'acb';
  let main = 'ahbgdc';
  isSubsequence(sub, main);
  