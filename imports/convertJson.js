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

function convertJSONWithParent(data, idkey, parentKey, parent, level = 0, json=[]) {
  data
    .filter(d => d[parentKey] === parent)
    .forEach(e => {
      e.level = level;
      json.push(e);
      convertJSONWithParent(data, idkey, parentKey, e[idkey], level+1, json);
    });
  return json;
}


export { convertParentChildJSON, convertJSONWithParent };