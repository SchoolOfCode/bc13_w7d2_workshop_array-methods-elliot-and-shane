const cats = ["tony", "daisy", "socks", "rockie" ];

const capitalisedCats = cats.map(function (cat){
    return cat.toUpperCase()
});

console.log(capitalisedCats)