const penjumlahan = (val1, val2, callback) => {
    setTimeout(() => {
    const hasil = val1 + val2;
    callback(hasil);
  }, 2000);
};

penjumlahan(10, 20, (hasil) => {
  const result1 = hasil;
  penjumlahan(70, result1, (hasil) => {
    const result2 = hasil;
    console.log(result2);
  });
});
