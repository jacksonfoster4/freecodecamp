/*
Remove all falsy values from an array.
*/

function bouncer(arr) {
  return arr.reduce((final, el) => {
    if (Boolean(el)){
      final.push(el)
    }
    return final
  }, [])
}

bouncer([7, "ate", "", false, 9]);
