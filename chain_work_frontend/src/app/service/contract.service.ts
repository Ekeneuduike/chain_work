import { inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { ethers } from 'ethers';

@Injectable({
  providedIn: 'root',
})
export class ContractService {
  
  userAddr = signal<string>('');
  router = inject(Router);
  private provider: ethers.providers.Web3Provider | undefined;
  private signer: ethers.Signer | undefined;
  constructor() {}

 

  async connectWallet(): Promise<string> {
    if (typeof window.ethereum !== 'undefined') {
      let address;
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        this.provider = new ethers.providers.Web3Provider(window.ethereum);
        this.signer = this.provider.getSigner();
        address = await this.signer.getAddress();
        localStorage.setItem('userAddr',address)
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
        
      } 
      catch (error) {
        console.error('User denied account access', error);
      }
      return address!;
    } 
    else {
      alert("MetaMask is not installed")
      return "";
      console.log('MetaMask is not installed');
    }
  }

getUserAddr() : string {
  let userAddr = localStorage.getItem('userAddr')
  return userAddr ? userAddr : '';
}

}

declare let window: any;
