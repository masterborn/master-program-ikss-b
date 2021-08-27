const mockApi = (data, isRejected = false) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isRejected) {
        reject();
      }
      resolve(data);
    }, 2000);
  });

export const sendEmailMockup = (data, callback, responseType) => {
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

const sendEmail = (data, callback, responseType) => {
  callback(responseType.loading);
  fetch(`https://formcarry.com/s/${process.env.NEXT_PUBLIC_FORMCARRY_ENDPOINT}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (response.status === 200) {
        callback(responseType.success);
      } else {
        throw new Error(
          `Formcarry API: Wrong status code: ${response.status}: ${response.statusText}`,
        );
      }
    })
    .catch(() => {
      // console.error(error);
      callback(responseType.error);
    });
};

export default sendEmail;
