const TelegramBot = require('node-telegram-bot-api');

const token = process.env.BOT_TOKEN

const bot = new TelegramBot(token, {polling: true});


bot.on('message', (msg) => {
    
var Hi = "hi";
if (msg.text.toString().toLowerCase().indexOf(Hi) === 0) {
bot.sendMessage(msg.chat.id,"Hello dear user");
} 
    
});

bot.on('message', (msg) => {
    
var Hi = "help";
if (msg.text.toString().toLowerCase().indexOf(Hi) === 0) {
bot.sendMessage(msg.chat.id,"type `hi` to say hi.\n type `checkid` to check chat id.\n type `gen` to gen list.\n type `checkgen` to check if the gen is running.");
} 
    
});




bot.on('message', (msg) => {
    
var Hi = "check";
if (msg.text.toString().toLowerCase().indexOf(Hi) === 0) {
bot.sendMessage(msg.chat.id,"if you dont get this message the generator is running!");
} 
    
});


bot.on('message', (msg) => {
    
var Hi = "chatid";
if (msg.text.toString().toLowerCase().indexOf(Hi) === 0) {
bot.sendMessage(msg.chat.id,"Current Chat ID is: " + msg.chat.id);
} 
    
});


//n = process.env.BOT_NUM

a = process.env.A
z = process.env.Z


bot.on('message', (msg) => {
    
var Hi = "gen";
if (msg.text.toString().toLowerCase().indexOf(Hi) === 0) {
bot.sendMessage(msg.chat.id,"Starting gen...  " + a + "-" + z);

genlist(msg.chat.id);
} 
    
});

















var Key = "e=10001;m=abef72b26a0f2555ad7e7f8b3f4972878235c2df6ea147e58f062a176964eb6dda829756960fdec18fbcabb9cf4d57493ef885093f4bd1a846a63bdebdeefd20eebe71d9f5eb6f8ddb8e9ee7c9de12c6f6963f8486a3434ce0289eeaf5fea94ae1474e13ebcd03d0b7ffdb353b9db4abdda91240bb03e5110282743a9bfe993e578b49b0adde478b3caf7d8a0c7b0355ff8ef106018cedcccfde2db51bca63af10bbb30ce1168d5efdb5e84b01b02c2ffe4d5b6b6c67e1ea54be792a887fc41a866591bfe7afab22c80db20d50d6515dcaa6b039ca3c06dbc623817340d429f43e7a079858f4b863990074051e7d7109be2f1f194114b25537d63ec630b4d789";

var randomNum = "F5683BC3863CB454933826129FEE2DBECBAED67DA952D8F777950BF796D2B54898C386630EB072FC943BA730211420900DED5AC4B0089A35FF7182A36BF774275A8F770F5B88584CA0FC71D76EF80951839A976D1D2FD13BE95AB8D23502707B3671EC72"

function Encrypt(e, n, t, o) {
  var r = [
  ];
  switch (t.toLowerCase()) {
    case 'chgsqsa':
      if (null == e || null == n) {
        return null
      }
      r = PackageSAData(e, n);
      break;
    case 'chgpwd':
      if (null == e || null == o) {
        return null
      }
      r = PackageNewAndOldPwd(e, o);
      break;
    case 'pwd':
      if (null == e) {
        return null
      }
      r = PackagePwdOnly(e);
      break;
    case 'pin':
      if (null == e) {
        return null
      }
      r = PackagePinOnly(e);
      break;
    case 'proof':
      if (null == e && null == n) {
        return null
      }
      r = PackageLoginIntData(null != e ? e : n);
      break;
    case 'saproof':
      if (null == n) {
        return null
      }
      r = PackageSADataForProof(n);
      break;
    case 'newpwd':
      if (null == o) {
        return null
      }
      r = PackageNewPwdOnly(o)
  }
  if (null == r || 'undefined' == typeof r) {
    return r
}
if ('undefined' != typeof Key && void 0 !== parseRSAKeyFromString) {
  var i = parseRSAKeyFromString(Key)
}
var a = RSAEncrypt(r, i, randomNum);
return a
}
function PackageSAData(e, n) {
var t = [
],
o = 0;
t[o++] = 1,
t[o++] = 1,
t[o++] = 0;
var r,
i = n.length;
for (t[o++] = 2 * i, r = 0; i > r; r++) {
t[o++] = 255 & n.charCodeAt(r),
t[o++] = (65280 & n.charCodeAt(r)) >> 8
}
var a = e.length;
for (t[o++] = a, r = 0; a > r; r++) {
t[o++] = 127 & e.charCodeAt(r)
}
return t
}
function PackagePwdOnly(e) {
var n = [
],
t = 0;
n[t++] = 1,
n[t++] = 1,
n[t++] = 0,
n[t++] = 0;
var o,
r = e.length;
for (n[t++] = r, o = 0; r > o; o++) {
n[t++] = 127 & e.charCodeAt(o)
}
return n
}
function PackagePinOnly(e) {
var n = [
],
t = 0;
n[t++] = 1,
n[t++] = 2,
n[t++] = 0,
n[t++] = 0,
n[t++] = 0;
var o,
r = e.length;
for (n[t++] = r, o = 0; r > o; o++) {
n[t++] = 127 & e.charCodeAt(o)
}
return n
}
function PackageLoginIntData(e) {
var n,
t = [
],
o = 0;
for (n = 0; n < e.length; n++) {
t[o++] = 255 & e.charCodeAt(n),
t[o++] = (65280 & e.charCodeAt(n)) >> 8
}
return t
}
function PackageSADataForProof(e) {
var n,
t = [
],
o = 0;
for (n = 0; n < e.length; n++) {
t[o++] = 127 & e.charCodeAt(n),
t[o++] = (65280 & e.charCodeAt(n)) >> 8
}
return t
}
function PackageNewPwdOnly(e) {
var n = [
],
t = 0;
n[t++] = 1,
n[t++] = 1;
var o,
r = e.length;
for (n[t++] = r, o = 0; r > o; o++) {
n[t++] = 127 & e.charCodeAt(o)
}
return n[t++] = 0,
n[t++] = 0,
n
}
function PackageNewAndOldPwd(e, n) {
var t = [
],
o = 0;
t[o++] = 1,
t[o++] = 1;
var r,
i = n.length;
for (t[o++] = i, r = 0; i > r; r++) {
t[o++] = 127 & n.charCodeAt(r)
}
for (t[o++] = 0, i = e.length, t[o++] = i, r = 0; i > r; r++) {
t[o++] = 127 & e.charCodeAt(r)
}
return t
}
function mapByteToBase64(e) {
return e >= 0 && 26 > e ? String.fromCharCode(65 + e)  : e >= 26 && 52 > e ? String.fromCharCode(97 + e - 26)  : e >= 52 && 62 > e ? String.fromCharCode(48 + e - 52)  : 62 == e ? '+' : '/'
}
function base64Encode(e, n) {
var t,
o = '';
for (t = n; 4 > t; t++) {
e >>= 6
}
for (t = 0; n > t; t++) {
o = mapByteToBase64(63 & e) + o,
e >>= 6
}
return o
}
function byteArrayToBase64(e) {
var n,
t,
o = e.length,
r = '';
for (n = o - 3; n >= 0; n -= 3) {
t = e[n] | e[n + 1] << 8 | e[n + 2] << 16,
r += base64Encode(t, 4)
}
var i = o % 3;
for (t = 0, n += 2; n >= 0; n--) {
t = t << 8 | e[n]
}
return 1 == i ? r = r + base64Encode(t << 16, 2) + '==' : 2 == i && (r = r + base64Encode(t << 8, 3) + '='),
r
}
function parseRSAKeyFromString(e) {
var n = e.indexOf(';');
if (0 > n) {
return null
}
var t = e.substr(0, n),
o = e.substr(n + 1),
r = t.indexOf('=');
if (0 > r) {
return null
}
var i = t.substr(r + 1);
if (r = o.indexOf('='), 0 > r) {
return null
}
var a = o.substr(r + 1),
s = new Object;
return s.n = hexStringToMP(a),
s.e = parseInt(i, 16),
s
}
function RSAEncrypt(e, n) {
for (var t = [
], o = 42, r = 2 * n.n.size - o, i = 0; i < e.length; i += r) {
if (i + r >= e.length) {
  var a = RSAEncryptBlock(e.slice(i), n, randomNum);
  a && (t = a.concat(t))
} else {
  var a = RSAEncryptBlock(e.slice(i, i + r), n, randomNum);
  a && (t = a.concat(t))
}
}
var s = byteArrayToBase64(t);
return s
}
function RSAEncryptBlock(e, n, t) {
var o = n.n,
r = n.e,
i = e.length,
a = 2 * o.size,
s = 42;
if (i + s > a) {
return null
}
applyPKCSv2Padding(e, a, t),
e = e.reverse();
var c = byteArrayToMP(e),
l = modularExp(c, r, o);
l.size = o.size;
var u = mpToByteArray(l);
return u = u.reverse()
}
function JSMPnumber() {
this.size = 1,
this.data = [
],
this.data[0] = 0
}
function duplicateMP(e) {
var n = new JSMPnumber;
return n.size = e.size,
n.data = e.data.slice(0),
n
}
function byteArrayToMP(e) {
var n = new JSMPnumber,
t = 0,
o = e.length,
r = o >> 1;
for (t = 0; r > t; t++) {
n.data[t] = e[2 * t] + (e[1 + 2 * t] << 8)
}
return o % 2 && (n.data[t++] = e[o - 1]),
n.size = t,
n
}
function mpToByteArray(e) {
var n = [
],
t = 0,
o = e.size;
for (t = 0; o > t; t++) {
n[2 * t] = 255 & e.data[t];
var r = e.data[t] >>> 8;
n[2 * t + 1] = r
}
return n
}
function modularExp(e, n, t) {
for (var o = [
], r = 0; n > 0; ) {
o[r] = 1 & n,
n >>>= 1,
r++
}
for (var i = duplicateMP(e), a = r - 2; a >= 0; a--) {
i = modularMultiply(i, i, t),
1 == o[a] && (i = modularMultiply(i, e, t))
}
return i
}
function modularMultiply(e, n, t) {
var o = multiplyMP(e, n),
r = divideMP(o, t);
return r.r
}
function multiplyMP(e, n) {
var t = new JSMPnumber;
t.size = e.size + n.size;
var o,
r;
for (o = 0; o < t.size; o++) {
t.data[o] = 0
}
var i = e.data,
a = n.data,
s = t.data;
if (e == n) {
for (o = 0; o < e.size; o++) {
  s[2 * o] += i[o] * i[o]
}
for (o = 1; o < e.size; o++) {
  for (r = 0; o > r; r++) {
    s[o + r] += 2 * i[o] * i[r]
  }
}
} else {
for (o = 0; o < e.size; o++) {
  for (r = 0; r < n.size; r++) {
    s[o + r] += i[o] * a[r]
  }
}
}
return normalizeJSMP(t),
t
}
function normalizeJSMP(e) {
var n,
t,
o,
r,
i;
for (o = e.size, t = 0, n = 0; o > n; n++) {
r = e.data[n],
r += t,
i = r,
t = Math.floor(r / 65536),
r -= 65536 * t,
e.data[n] = r
}
}
function removeLeadingZeroes(e) {
for (var n = e.size - 1; n > 0 && 0 == e.data[n--]; ) {
e.size--
}
}
function divideMP(e, n) {
var t = e.size,
o = n.size,
r = n.data[o - 1],
i = n.data[o - 1] + n.data[o - 2] / 65536,
a = new JSMPnumber;
a.size = t - o + 1,
e.data[t] = 0;
for (var s = t - 1; s >= o - 1; s--) {
var c = s - o + 1,
l = Math.floor((65536 * e.data[s + 1] + e.data[s]) / i);
if (l > 0) {
  var u = multiplyAndSubtract(e, l, n, c);
  for (0 > u && (l--, multiplyAndSubtract(e, l, n, c)); u > 0 && e.data[s] >= r; ) {
    u = multiplyAndSubtract(e, 1, n, c),
    u > 0 && l++
  }
}
a.data[c] = l
}
removeLeadingZeroes(e);
var d = {
'q': a,
'r': e
};
return d
}
function multiplyAndSubtract(e, n, t, o) {
var r,
i = e.data.slice(0),
a = 0,
s = e.data;
for (r = 0; r < t.size; r++) {
var c = a + t.data[r] * n;
a = c >>> 16,
c -= 65536 * a,
c > s[r + o] ? (s[r + o] += 65536 - c, a++)  : s[r + o] -= c
}
return a > 0 && (s[r + o] -= a),
s[r + o] < 0 ? (e.data = i.slice(0), - 1)  : 1
}
function hexStringToMP(e) {
var n,
t,
o = Math.ceil(e.length / 4),
r = new JSMPnumber;
for (r.size = o, n = 0; o > n; n++) {
t = e.substr(4 * n, 4),
r.data[o - 1 - n] = parseInt(t, 16)
}
return r
}
function applyPKCSv2Padding(e, n, t) {
var o,
r = e.length,
i = [
218,
57,
163,
238,
94,
107,
75,
13,
50,
85,
191,
239,
149,
96,
24,
144,
175,
216,
7,
9
],
a = n - r - 40 - 2,
s = [
];
for (o = 0; a > o; o++) {
s[o] = 0
}
s[a] = 1;
var c = i.concat(s, e),
l = [
];
for (o = 0; 20 > o; o++) {
l[o] = Math.floor(256 * Math.random())
}
l = SHA1(l.concat(t));
var u = MGF(l, n - 21),
d = XORarrays(c, u),
f = MGF(d, 20),
p = XORarrays(l, f),
v = [
];
for (v[0] = 0, v = v.concat(p, d), o = 0; o < v.length; o++) {
e[o] = v[o]
}
}
function MGF(e, n) {
if (n > 4096) {
return null
}
var t = e.slice(0),
o = t.length;
t[o++] = 0,
t[o++] = 0,
t[o++] = 0,
t[o] = 0;
for (var r = 0, i = [
]; i.length < n; ) {
t[o] = r++,
i = i.concat(SHA1(t))
}
return i.slice(0, n)
}
function XORarrays(e, n) {
if (e.length != n.length) {
return null
}
for (var t = [
], o = e.length, r = 0; o > r; r++) {
t[r] = e[r] ^ n[r]
}
return t
}
function SHA1(e) {
var n,
t = e.slice(0);
PadSHA1Input(t);
var o = {
'A': 1732584193,
'B': 4023233417,
'C': 2562383102,
'D': 271733878,
'E': 3285377520
};
for (n = 0; n < t.length; n += 64) {
SHA1RoundFunction(o, t, n)
}
var r = [
];
return wordToBytes(o.A, r, 0),
wordToBytes(o.B, r, 4),
wordToBytes(o.C, r, 8),
wordToBytes(o.D, r, 12),
wordToBytes(o.E, r, 16),
r
}
function wordToBytes(e, n, t) {
var o;
for (o = 3; o >= 0; o--) {
n[t + o] = 255 & e,
e >>>= 8
}
}
function PadSHA1Input(e) {
var n,
t = e.length,
o = t,
r = t % 64,
i = 55 > r ? 56 : 120;
for (e[o++] = 128, n = r + 1; i > n; n++) {
e[o++] = 0
}
var a = 8 * t;
for (n = 1; 8 > n; n++) {
e[o + 8 - n] = 255 & a,
a >>>= 8
}
}
function SHA1RoundFunction(e, n, t) {
var o,
r,
i,
a = 1518500249,
s = 1859775393,
c = 2400959708,
l = 3395469782,
u = [
],
d = e.A,
f = e.B,
p = e.C,
v = e.D,
m = e.E;
for (r = 0, i = t; 16 > r; r++, i += 4) {
u[r] = n[i] << 24 | n[i + 1] << 16 | n[i + 2] << 8 | n[i + 3] << 0
}
for (r = 16; 80 > r; r++) {
u[r] = rotateLeft(u[r - 3] ^ u[r - 8] ^ u[r - 14] ^ u[r - 16], 1)
}
var h;
for (o = 0; 20 > o; o++) {
h = rotateLeft(d, 5) + (f & p | ~f & v) + m + u[o] + a & 4294967295,
m = v,
v = p,
p = rotateLeft(f, 30),
f = d,
d = h
}
for (o = 20; 40 > o; o++) {
h = rotateLeft(d, 5) + (f ^ p ^ v) + m + u[o] + s & 4294967295,
m = v,
v = p,
p = rotateLeft(f, 30),
f = d,
d = h
}
for (o = 40; 60 > o; o++) {
h = rotateLeft(d, 5) + (f & p | f & v | p & v) + m + u[o] + c & 4294967295,
m = v,
v = p,
p = rotateLeft(f, 30),
f = d,
d = h
}
for (o = 60; 80 > o; o++) {
h = rotateLeft(d, 5) + (f ^ p ^ v) + m + u[o] + l & 4294967295,
m = v,
v = p,
p = rotateLeft(f, 30),
f = d,
d = h
}
e.A = e.A + d & 4294967295,
e.B = e.B + f & 4294967295,
e.C = e.C + p & 4294967295,
e.D = e.D + v & 4294967295,
e.E = e.E + m & 4294967295
}
function rotateLeft(e, n) {
var t = e >>> 32 - n,
o = (1 << 32 - n) - 1,
r = e & o;
return r << n | t
}


//  var enc = Encrypt(null, "8730867", "saproof", null)
//  console.log(enc)




// function write(filename, text){
//   var fstorm  = require('fstorm');
//   var writer = fstorm('./' + filename);
//   writer.write(text);
// }

// Generate Encrypted List
// Write to file



const fs = require('fs');



function zf(num, size) {
    var s = "000000000" + num;
    return s.substr(s.length-size);
}

// function write(filename, text){
//   fs.writeFileSync('./' + filename, text);
// }


// console.log(process.env.a)
// console.log(process.env.z)
// a = 0
// z = 9999999

// len 7 
// 0000000
// 9999999
// 1000000

// 10 bots
// 


// 1115802374:AAEwZoyiAkwaH5ZLU4hlvWupl5kY7qGQ81E



filename = "pwd_gen_list_" + zf(a,7) + "-" + zf(z,7)+".txt"
function genlist(chatid){
	for (var i = a; i <= z; i++) {
	//text += cars[i] + "<br>";
	// Code Here
	var enc = zf(i,7) + ":" + Encrypt(null, zf(i,7),"saproof", null);
	//write("pwd_gen_list", i + ":" + enc);
	fs.appendFileSync(filename, enc + '\n');
	console.log("Hash for: " + zf(i,7) + "has been added.");
	}
	bot.sendDocument(chatid, filename);
}

