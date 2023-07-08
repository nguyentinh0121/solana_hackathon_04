const HELIUS_API_KEY = "0f0ad220-5df8-4778-84a1-b30843942205";
const HELIUS_ENDPOINT = `https://api.helius.xyz/v0/`;
const HELIUS_TOKENENDPOINT = `https://api.mainnet-beta.solana.com`;
const LAMPORT_PER_SOL = 10e9

const createHeliusEndpoint = (type) =>
  `${HELIUS_ENDPOINT}${type}/?api-key=${HELIUS_API_KEY}`;

const tokenAddressInput = document.querySelector("#token-address-input");
const searchButton = document.querySelector("#search-button");
const balances = document.querySelector("#balances");

tokenAddressInput.addEventListener("change", () => {
  tokenAddressInput.value.length >40 <= 44
    ? searchButton.classList.remove("hide")
    : searchButton.classList.contains("hide")
    ? null
    : searchButton.classList.add("hide")
});

// searchButton.addEventListener("click", () => {
//   tokenAddressInput.value.length >44 <= 44
//     ? balances.classList.remove("hide")
//     : balances.classList.contains("hide")
//     ? null
//     : balances.classList.add("hide");
// });

// searchButton.addEventListener("click", (e) => {
//   e.preventDefault();

//   console.log(tokenAddressInput.value);
//   getBalances(tokenAddressInput.value);
  
//   // console.log()
// });
///////////////////////////////////////////////////////////////////////////////////////
// const getBalances = async (address) => {
//   const url = createHeliusEndpoint(`addresses/${address}/balances`);
//   const response = await fetch(url);
//   const data = await response.json();
//   console.log("balances: ", data.nativeBalance / LAMPORT_PER_SOL);
  
//   document.getElementById("showblances").innerHTML = ("balances: ", data.nativeBalance / LAMPORT_PER_SOL) + (" sol"); 
// };

// const getTokenHolderBalance = async (tokenAddress) => {
//   const url = createHeliusEndpoint(`tokens/${tokenAddress}/holder-balance`);
//   const response = await fetch(url, {
//     method: 'POST',
//     body: JSON.stringify({
//       tokenAddress: tokenAddress
//     })
//   });
//   const data = await response.json();
//   console.log("Token Holder Balance: ", data.nativeBalance / 10e9);
// };