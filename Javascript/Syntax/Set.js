function areThereDuplicates(...arguments) {
  let argSet = new Set(arguments);
  console.log(argSet);
  const hasDupe = argSet.size !== arguments.length;
  return hasDupe;
}

console.log(areThereDuplicates('a','c','b','g','e', 'a'));