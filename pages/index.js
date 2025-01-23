// app/page.tsx
"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./assets/tailwind.output.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import "@fontsource/montserrat";
import "@fontsource/courier-prime";
import {
  createWeb3ReactRoot,
  useWeb3React,
  Web3ReactProvider,
} from "@web3-react/core";
// import { Web3ProviderNetwork } from "./Web3Provider";
import getLibrary from "./utils/getLibrary";
import ChainUpdater from "./updaters/ChainUpdater";
import ApplicationUpdater from "./updaters/ApplicationUpdater";
import connect from "./hooks/useMorals";
import TransactionUpdater from "./updaters/TransactionUpdater";
import { injected } from "./connectors";
import "react-notifications/lib/notifications.css";
import { NotificationContainer } from "react-notifications";
import { MoralisProvider } from "react-moralis";
import { MoralisAPIKey } from "./constants";

export const Web3ProviderNetwork = createWeb3ReactRoot("NETWORK");

// if (!!window.ethereum) {
//   window.ethereum.autoRefreshOnNetworkChange = false;
// }

if (typeof window !== "undefined" && window.ethereum) {
  window.ethereum.autoRefreshOnNetworkChange = false;
}

function Updaters() {
  return (
    <>
      <ChainUpdater />
      <TransactionUpdater />
      <ApplicationUpdater />
    </>
  );
}

const ConnectWallet = () => {
  const { account, activate } = useWeb3React();

  useEffect(() => {
    if (!account) {
      try {
        activate(injected);
      } catch (err) {
        console.error(err);
      }
    }
  }, [activate]);

  return null;
};

export default function Home({ data }) {
  return (
    <React.StrictMode>
      <Web3ReactProvider getLibrary={getLibrary}>
        <Web3ProviderNetwork getLibrary={getLibrary}>
          <MoralisProvider
            appId={MoralisAPIKey.appId}
            serverUrl={MoralisAPIKey.serverUrl}
          >
            <Updaters />
            <ConnectWallet />
            <Router>
              <App />
            </Router>
          </MoralisProvider>
        </Web3ProviderNetwork>
      </Web3ReactProvider>
      <NotificationContainer />
    </React.StrictMode>
  );
}

reportWebVitals();

export async function getStaticProps() {
  const data = "Fetching data";
  async function getDataFromDatabase(id) {
    const cachedData = await getAsync(id);
    if (cachedData) {
      console.log("Fetching data from cache");
      return JSON.parse(cachedData);
    }
    console.log("Fetching data from the database");
    const data = await MyModel.findById(id);
    await setAsync(id, JSON.stringify(data));
    return data;
  }
  async function main() {
    const data1 = await getDataFromDatabase();
    console.log("data1");
    const data2 = await getDataFromDatabase();
    console.log("data2");
  }
  connect();
  return {
    props: {
      data,
    },
  };
}
