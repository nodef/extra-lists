function includes(lst, val) {
  for(var v of lst[1])
    if(v===val) return true;
  return false;
};
module.exports = includes;
