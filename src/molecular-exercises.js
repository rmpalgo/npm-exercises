//Count DNA nucleotides
let nucleotides = 'AGCTTTTCATTCTGACTGCAACGGGCAATATGTCTCTGTGTGGATTAAAAAAAGAGTGTCTGATAGCAGC';
let data = nucleotides.split("");

function makeUnique(str) {
    return String.prototype.concat(...new Set(str))
}
let uniq = makeUnique(data);
let map = new Map();

for (let i = 0; i < uniq.length; i++) {
    map.set(uniq[i], 0);
}

function countNucleotides(data) {
    for (let j = 0; j < data.length; j++) {
       if(map.has(data[j])) {
           map.set(data[j], map.get(data[j]) + 1)
       }
    }
    return map;
}

console.log(countNucleotides(data));

//Transcribing DNA into RNA
let set = 'GATGGAACTTGACTACGTAAATT';
let dna = set.split("");
console.log(dna);

function dnaToRna(dna) {
    console.log(dna);
    for(let d = 0; d < dna.length ; d++) {
        console.log(dna[d]);
        if(dna[d] === 'T') {
            dna[d] = 'U';
        }
    }
    return dna;
}
let rna = dnaToRna(dna).join('');
console.log(rna);
