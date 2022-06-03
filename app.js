exports.getScore = (score) => {
  if (score < 50) {
    return "F";
  }
  return "A";
};

exports.fetchSomeData = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve("success"), 100);
  });
};

exports.login = async () => {
  const response = await exports.fetchSomeData();
  return response === "success";
};

exports.testJson = () => {
  return { key_1: "Some string value" };
};
