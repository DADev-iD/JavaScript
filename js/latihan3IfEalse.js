let jmlAngkot = 10;
let angkotBeroperasi = 6;
let noAngkot = 1;

if (noAngkot <= angkotBeroperasi) {
  for (noAngkot; noAngkot <= angkotBeroperasi; noAngkot++) {
    console.log("Angkot No." + noAngkot + " beroperasi dengan baik");
  }
  for (noAngkot = angkotBeroperasi + 1; noAngkot <= jmlAngkot; noAngkot++) {
    console.log("Angkot No." + noAngkot + " sedang tidak beroperasi");
  }
}
