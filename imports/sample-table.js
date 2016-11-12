export var table = [
  {
    id: 1,
    a: "a1",
    b: "b1",
    c: "c1",
    child: [
      {
        id: 1,
        a: "a11",
        b: "b11",
        c: "c11",
        child: [
          {
            id: 1,
            a: "a111",
            b: "b111",
            c: "c111"
          }
        ]
      }, {
        id: 1,
        a: "a12",
        b: "b12",
        c: "c12",
      }, {
        id: 1,
        a: "a13",
        b: "b13",
        c: "c13",
      }
    ]
  }, {
    id: 2,
    a: "a2",
    b: "b2",
    c: "c2",
    child: [
      {
        id: 2,
        a: "a21",
        b: "b21",
        c: "c21",
      }, {
        id: 1,
        a: "a22",
        b: "b22",
        c: "c22",
      }, {
        id: 1,
        a: "a23",
        b: "b23",
        c: "c23",
      }
    ]
  }, {
    id: 3,
    a: "a3",
    b: "b3",
    c: "c3",
    child: [
      {
        id: 3,
        a: "a31",
        b: "b31",
        c: "c31",
        child: [
          {
            id: 3,
            a: "a311",
            b: "b311",
            c: "c311",
            child: [
              {
                id: 3,
                a: "a3111",
                b: "b3111",
                c: "c3111"
              }
            ]
          }
        ]
      }, {
        id: 1,
        a: "a32",
        b: "b32",
        c: "c32",
      }, {
        id: 1,
        a: "a33",
        b: "b33",
        c: "c33",
      }
    ]
  }
]


export var table2 = [
  {
    id: 1,
    a: "a1",
    b: "b1",
    c: "c1",
  }, {
    id: 2,
    a: "a2",
    b: "b2",
    c: "c2",
  }, {
    id: 3,
    a: "a3",
    b: "b3",
    c: "c3",
  }, {
    id: 4,
    a: "a21",
    b: "b21",
    c: "c21",
    parent: 2
  }, {
    id: 5,
    a: "a31",
    b: "b31",
    c: "c31",
    parent: 3
  }, {
    id: 6,
    a: "a11",
    b: "b11",
    c: "c11",
    parent: 1
  }, {
    id: 7,
    a: "a111",
    b: "b111",
    c: "c111",
    parent: 6
  }, {
    id: 8,
    a: "a22",
    b: "b22",
    c: "c22",
    parent: 2
  }, {
    id: 9,
    a: "a23",
    b: "b23",
    c: "c23",
    parent: 2
  }, {
    id: 10,
    a: "a12",
    b: "b12",
    c: "c12",
    parent: 1
  }, {
    id: 11,
    a: "a13",
    b: "b13",
    c: "c13",
    parent: 1
  }, {
    id: 12,
    a: "a311",
    b: "b311",
    c: "c311",
    parent: 5
  }, {
    id: 13,
    a: "a3111",
    b: "b3111",
    c: "c3111",
    parent: 12
  }, {
    id: 14,
    a: "a32",
    b: "b32",
    c: "c32",
    parent: 3
  }, {
    id: 15,
    a: "a33",
    b: "b33",
    c: "c33",
    parent: 3
  }
]