console.log("Hello Bundler Test!!")

async function test() {
  const promise = Promise.resolve(123)
  console.log(await promise)
}
test()