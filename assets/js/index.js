
const url = `https://mainnet.helius-rpc.com/?api-key=85a5f949-989a-4969-a742-80c4814644fe`

    // Hàm gửi request đến Helius API để lấy thông tin holder state
    async function getHolderState() {
      const walletAddressInput = document.querySelector("#wallet-address-input");
      try {
        const response = await axios.get('https://api.helius.ai/v1/token/USDH1SM1ojwWUga67PGrgFWUHibbjqMvuMaDkRJTgkX');
        return response.data;
      } catch (error) {
        console.error(error);
      }
    }

    // Hàm hiển thị thông tin holder state đã lấy được
    function displayHolderState(holderState) {
      console.log(holderState); // In ra console cho mục đích kiểm tra

      // Hiển thị thông tin trong một phần tử HTML (ví dụ: div có id "holderStateDiv")
      const holderStateDiv = document.getElementById("holderStateDiv");
      holderStateDiv.innerText = JSON.stringify(holderState);
    }

    // Hàm thực hiện snapshot và hiển thị holder state
    async function snapshotHolderState() {
      const holderState = await getHolderState();
      displayHolderState(holderState);
    }