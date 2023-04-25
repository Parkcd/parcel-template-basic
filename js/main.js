console.log('Hello Parcel!')

async function test() { // async 붙이면 비동기 함수임.
  const promise = Promise.resolve(123)
  console.log(await promise)
}

test()