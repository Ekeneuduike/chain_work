import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ethers } from 'ethers';

@Injectable({
  providedIn: 'root',
})
export class ContractService {
  
  router = inject(Router);
  private provider: ethers.providers.Web3Provider | undefined;
  private signer: ethers.Signer | undefined;
  constructor() {}

  async connectWallet(path:string): Promise<void> {
    if (typeof window.ethereum !== 'undefined') {
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        this.provider = new ethers.providers.Web3Provider(window.ethereum);
        this.signer = this.provider.getSigner();
        const address = await this.signer.getAddress();
        console.log('Connected address:', address);
        await window.ethereum.request({
          method: 'wallet_addEthereumChain',
          params: [
            {
              chainId: '0xaa36a7', // Hexadecimal chain ID for Sepolia
              chainName: 'Sepolia',
              nativeCurrency: {
                name: 'SepoliaETH',
                symbol: 'ETH',
                decimals: 18,
              },
              rpcUrls: ['https://rpc.sepolia.org'],
              blockExplorerUrls: ['https://sepolia.etherscan.io'],
            },
          ],
        });
        this.router.navigateByUrl("/app/"+path)
      } 
      catch (error) {
        console.error('User denied account access', error);
      }
    } else {
      console.log('MetaMask is not installed');
    }
  }
}

declare let window: any;
