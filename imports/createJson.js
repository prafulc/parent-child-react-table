let json = []
export default function createJson(table, chKey, level = 0){
  _.each(table, (t, k) => {
    t.level = level;
    json.push(_.omit(t, [chKey]))
    if(_.has(t, chKey))
      createJson(t.child, chKey, level+1);
  })
  return json;
}