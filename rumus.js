// rumus luas dan keliling persegi
exports.persegi = function(sisi) {
    return {
        luas: sisi * sisi,
        keliling: 4 * sisi
    };
};

// rumus luas dan keliling persegi panjang
exports.persegiPanjang = function(panjang, lebar) {
    return {
        luas: panjang * lebar,
        keliling: 2 * (panjang + lebar)
    };
};
