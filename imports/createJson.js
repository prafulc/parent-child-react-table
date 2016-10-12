var json = []
export default function createJson(table, p, space = ''){
  _.each(table, (t, k) => {
    _.each(p, (i) => {
      t[i] = space + t[i];
    })
    json.push(_.omit(t, ['child']))
    if(_.has(t, "child"))
      return createJson(t.child, p, `${space}|-`);
    else 
      return t
  })
  return json;
}