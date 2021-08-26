const mockApi = (data, isRejected = false) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isRejected) {
        reject();
      }
      resolve(data);
    }, 2000);
  });

const sendEmail = (data, callback, responseType) => {
  callback(responseType.loading);
  mockApi(data)
    .then(() => {
      callback(responseType.success);
      // console.log(res);
    })
    .catch(() => {
      callback(responseType.error);
    });
};

export default sendEmail;
