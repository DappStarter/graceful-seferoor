require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess narrow flee skull guard render remind hole grid clog orange taste'; 
let testAccounts = [
"0x3247d59735c8820b2cf95785f64cdef32e2419d552a35836e7dc324c8e4f9e4d",
"0xe3e0ac413229d7785a17edadf317dd6bb1dc90839e8a34a1768d289c08a73880",
"0xa1898662b05cd8c53ed64e3117a4cb459ec7c7e4308c966356859a8fa9d0bbb3",
"0x95a855221b7c7ad9c67a533553feab620c6b2699d90647eb4362e250df735b3b",
"0x0ed7c155d36c51308ad7b47095e42a16e9da5256c193430a621935d95d5c2ac9",
"0x3ee2602ba79ea2631ba3b662ea63a139b60b5a348a31defc4b8b6fc3d31619f2",
"0xe81aad6da452f043289ad7413dcbcb5fce34676cdb4c13db6070796bdb11fc43",
"0x7dec3b84cf6d0002446d18f5e9839a0cb434131dd0ccda19f9e41b7fe67694d8",
"0x2915ed0ab9fbf2753599d4ec2b13be81cd368b60e55c786d2c3d0a7f594c889e",
"0xa897949bc360ebc6ec0cdc0211366ad763c688775c855b8fdfaed677347aa461"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

