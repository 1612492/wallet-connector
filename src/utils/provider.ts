export function getCardanoProvider(wallet: string) {
  if (!(window as any).cardano as any) throw new Error("no wallet installed");

  if (!(window as any).cardano[wallet]) throw new Error("no wallet installed");

  try {
    return (window as any).cardano[wallet].enable();
  } catch (error) {
    throw error;
  }
}

export function getEthereumProvider(wallet: string) {
  if (!(window as any).ethereum as any) throw new Error("no wallet installed");

  if ((window as any).ethereum.providers) {
    function getProvider(key: string) {
      const provider = (window as any).ethereum.providers.find(
        (p: any) => p[key]
      );

      if (!provider) {
        throw new Error("no wallet installed");
      }

      return provider;
    }

    switch (wallet) {
      case "metamask":
        return getProvider("isMetamask");
      case "coinbase":
        return getProvider("isCoinbaseWallet");
      default:
        throw new Error("unsupported");
    }
  }

  return (window as any).ethereum;
}
