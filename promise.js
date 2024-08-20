const penjumlahan = (val1, val2) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        if(typeof(val1) !== 'number' || typeof(val2) !== 'number'){
            reject('parameter harus namber')
            return
        }
        const hasil = val1 + val2;
        resolve(hasil)
    //   cara menpatkan hasilnya
    //   resolve(hasil)
    // reject('maaf terjadi kesalahan')
    }, 2000);
  });
};


penjumlahan('budi', 20)
.then((res)=>{
    console.log('then yang dijalan');
    console.log(res);
})
.catch((err)=>{
    console.log('catch yang dijalankan');
    console.log(err);
})