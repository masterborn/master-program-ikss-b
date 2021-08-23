const sendEmail = (data) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      reject();
      resolve(data);
    }, 2000);
  });

export default sendEmail;
