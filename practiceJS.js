async function somfunction() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Function Completed");
    });
  }, 2000);
}

const myAsyncFunction = async () => {
  try {
    let result = await somfunction();
    console.log(result);
  } catch {
    console.error(error);
  }
};

myAsyncFunction();
