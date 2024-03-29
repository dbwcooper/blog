export const myObject = {
  a: 1,
  b: 2,
  c: 3,
};

// use generic to do objectKeys
const objectKeys = <Obj>(obj: Obj): (keyof Obj)[] => {
  return Object.keys(obj) as (keyof Obj)[];
};


 
objectKeys(myObject).forEach((key) => {
  console.log(myObject[key]);
});
