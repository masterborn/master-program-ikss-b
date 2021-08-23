const mockApi = (data, isRejected = false) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isRejected) {
        reject();
      }
      resolve(data);
    }, 2000);
  });

const sendEmail = async (data, callback, responseType) => {
  callback(responseType.loading);
  await mockApi(data)
    .then((res) => {
      callback(responseType.success);
      console.log(res);
    })
    .catch(() => {
      callback(responseType.error);
    });
};

export default sendEmail;
