// MEMBUAT KUIS MENGENAI FUNDAMENTAL JAVASCRIPT


// Tipe Data
var tipe_data = ['integer', 'float', 'character', 'string', 'boolean'];
//console.log(tipe_data[1]);

// Operator
var operator = {
  'arithmetic': ['tambah (+)', 'kurang (-)', 'kali (*)', 'bagi (/)', 'modulus (%)'],
  'assignment': 'sama dengan (=)',
  'comparison': [
    'equal operator (==)',
    'not equal operator (!=)',
    'strict equal operator (===)',
    'strict not equal operator (!==)',
    'less than (<) / greater than (>)',
    {
      'conditional': [
        {
          'or (||)': 'true, if one of it is true'
        },
        {
          'and (&&)': 'true, if all is true'
        }
      ]
    },

    {
      'output': ['true', 'false']
    },

  ],

}
//console.log(operator.assignment);

// Control Flow
var control_flow = {
  'conditional': ['if-else', 'switch-case'],
  'loop': ['while-loop', 'for-loop'],
  'function': 'function'
}
//console.log(control_flow);

// Built-in Object (Object Math)
var object_math = {
  'adalah': 'salah satu Built-in object pada Javascript yang dapat dipanggil setiap saat untuk membantu melakukan perhitungan matematika',
  'cara_panggil': ['math.property', 'math.method(parameter)'],
  'property': [
    {
      'Math.Pi': 'konstanta Pi, ~3.142'
    },
    {
      'Math.E': 'angka Euler, ~2.718'
    },
    {
      'Math.LN2': 'logaritma natural dari 2, ~0.693'
    },
    {
      'Math.LN10': 'logaritma natural dari 10, ~2.303'
    },
    {
      'Math.LOG2E':'logaritma basis 2 dari E, ~1.443'
    },
    {
      'Math.LOG10E': 'logaritma basis 10 dari E, ~0.434'
    },
    {
      'Math.SQRT1_2': 'akar pangkat 2 dari 1/2, ~0.707'
    },
    {
      'Math.SQRT2': 'akar pangkat 2 dari 2, ~1.414'
    }
  ],
  'method': [
  {
    'Math.abs': 'mengembalikan angka absolut',
    'Math.ceil': 'mengembalikan angka integer dari pembulatan ke atas suatu angka',
    'Math.floor': 'mengembalikan angka integer dari pembulatan ke bawah suatu angka',
    'Math.round': 'mengembalikan angka integer dari pembulatan suatu angka (angka>=.5 maka pembulatan ke atas, angka<.5 maka pembulatan ke bawah)',
    'Math.trunc': 'mengembalikan angka integer dengan menghilangkan angka di belakang koma',
    'Math.max': 'mengembalikan angka terbesar dari beberapa angka (bukan array)',
    'Math.min': 'mengembalikan angka terkecil dari beberapa angka (bukan array)',
    'Math.pow': 'mengembalikan hasil dari pangkat',
    'Math.random': 'mengembailkan suatu angka acak X, dimana 0< X <1'
  }
  ]
}
//console.log(object_math);

var testing2 = Math.random()*15;
//console.log(testing2);
var test = Math.round((Math.random()*10));
//console.log(test);

// ******************************************************************
// ******************************************************************


// Pertanyaan 1
var soal1 = {
  'pertanyaan': '1. Mana yang bukan termasuk tipe data di Javascript?',
  'pilihan': tipe_data,
  'jebakan': 'operator',
  'jawaban': tipe_data
}
console.log(soal1.pertanyaan);

for(i=0; i<soal1.pilihan.length; i++) {
  console.log(soal1.pilihan[i])
}
console.log(soal1.jebakan);

var jawab1 = 'test';
var nilai = 0;

function cek_jawaban1() {
  if(jawab1===soal1.pilihan[0]){
    nilai1 = nilai + 4;
    console.log('JAWABAN ANDA BENAR');
  }
  else if(jawab1==='') {
    nilai1 = nilai =0;
    console.log('ANDA BELUM MENGISI JAWABAN');
  }
  else {
    nilai1 = nilai - 1;
    console.log('JAWABAN ANDA MASIH SALAH, COBA BACA REFERENSI LAGI !!');
  }
  return(nilai1);
}
cek_jawaban1();
//console.log('NILAI ANDA = ' + nilai1);


// Pertanyaan 2
var soal2 = {
  'pertanyaan': '2. Operator arithmetic yang digunakan untuk mencari sisa bagi adalah ?',
  'pilihan': operator,
  'jawaban': operator
}
console.log(soal2.pertanyaan);

for(i=0; i<soal2.pilihan.arithmetic.length; i++) {
  console.log(soal2.pilihan.arithmetic[i])
}

var jawab2 = '%';

function cek_jawaban2() {
  if(jawab2===soal2.pilihan[4] || 'modulus' || '%'){
    nilai2 = nilai + 4;
    console.log('JAWABAN ANDA BENAR');
  }
  else if(jawab2==='') {
    nilai2 = nilai + 0;
    console.log('ANDA BELUM MENGISI JAWABAN');
  }
  else {
    nilai2 = nilai - 1;
    console.log('JAWABAN ANDA MASIH SALAH, COBA BACA REFERENSI LAGI !!');
  }
  return(nilai2);
}
cek_jawaban2();


console.log('TOTAL NILAI ANDA = ' + (nilai1 + nilai2));