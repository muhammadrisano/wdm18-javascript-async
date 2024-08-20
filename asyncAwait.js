const penjumlahan = (val1, val2) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof val1 !== "number" || typeof val2 !== "number") {
        reject("parameter harus namber");
        return;
      }
      const hasil = val1 + val2;
      resolve(hasil);
      //   cara menpatkan hasilnya
      //   resolve(hasil)
      // reject('maaf terjadi kesalahan')
    }, 2000);
  });
};

const startApp = async () => {
  try {
    console.log("proses 1");
    const hasil = await penjumlahan('budi', 30);
    console.log(hasil);
    console.log("proses 3");
  } catch (error) {
    console.log('catch dijalankan');
    console.log(error);
  }
};

startApp();
