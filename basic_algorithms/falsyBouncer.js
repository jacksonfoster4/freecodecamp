/*
Remove all falsy values from an array.
*/

function bouncer(arr) {
  let filtered = arr.reduce((final, el) => {
    if (Boolean(el)){
      final.push(el)
    }
    return final
  }, [])
  return filtered;
}

bouncer([7, "ate", "", false, 9]);
