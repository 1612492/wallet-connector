import { getEthereumProvider } from "../utils/provider";

class Ethereum {
  public wallet: string;
  public provider: any;
  public account: any;
  public chainId: any;
  public balance: any;
  public connected: any;

  constructor(wallet: string) {
    this.wallet = wallet;
  }

  public async init() {
    this.provider = getEthereumProvider(this.wallet);
    this.connected = await this.isEnabled();
  }

  async isEnabled() {
    try {
      const [account] = await this.provider.request({ method: "eth_accounts" });

      return account ? true : false;
    } catch (error) {
      return false;
    }
  }

  public async connect() {
    try {
      await this.provider.request({ method: "eth_requestAccounts" });
      this.connected = true;
    } catch (error) {
      throw error;
    }
  }

  public async getBalance() {
    try {
      this.balance = await this.provider.request({
        method: "eth_getBalance",
        params: [this.account, "latest"],
      });
    } catch (error) {
      throw error;
    }
  }

  public async getAccount() {
    try {
      this.account = await this.provider.request({ method: "eth_accounts" });
    } catch (error) {
      throw error;
    }
  }

  public async getChainId() {
    try {
      this.chainId = await this.provider.request({ method: "eth_chainId" });
    } catch (error) {
      throw error;
    }
  }
}

export default Ethereum;
