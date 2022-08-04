import { getCardanoProvider } from "../utils/provider";

class Cardano {
  public wallet: string;
  public provider: any;
  public account: any;
  public chainId: any;
  public balance: any;
  public connected: any;

  constructor(wallet: string) {
    this.wallet = wallet;
  }

  async init() {
    this.connected = await this.isEnabled();

    if (this.connected) {
      this.provider = getCardanoProvider(this.wallet);
    }
  }

  isEnabled() {
    try {
      return (window as any).cardano[this.wallet].isEnabled();
    } catch (error) {
      return false;
    }
  }

  async connect() {
    try {
      this.provider = await getCardanoProvider(this.wallet);
      this.connected = true;
    } catch (error) {
      throw error;
    }
  }

  public async getBalance() {
    try {
      this.balance = await this.provider.getBalance();
    } catch (error) {
      throw error;
    }
  }

  public async getAccount() {
    try {
      this.account = await this.provider.getChangeAddress();
    } catch (error) {
      throw error;
    }
  }

  async getChainId() {
    try {
      this.chainId = await this.provider.getNetworkId();
    } catch (error) {
      throw error;
    }
  }
}

export default Cardano;
