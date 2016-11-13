function convertParentChildJSON(table, chKey, level = 0, json = [] ){
  _.each(table, (t, k) => {
    t.level = level;
    json.push(_.omit(t, [chKey]))
    if(_.has(t, chKey)){
      return _.flatten(json, convertParentChildJSON(t.child, chKey, level+1, json));
    }
  })
  return json;
}

export { convertParentChildJSON };