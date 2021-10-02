var jmlAngkot = 10;
var angkotBeroperasi = 6;

for (noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {

    if (noAngkot <= 4 || noAngkot === 6) {
        console.log('Angkot no ' + noAngkot + 'sedang beroperasi');
    } else if (noAngkot === 8 || noAngkot === 10 || noAngkot === 5) {
        console.log('Angkot no ' + noAngkot + 'sedang lembur');
    } else {
        console.log('Angkot no ' + noAngkot + 'sedang dalam perbaikan')
    }

}